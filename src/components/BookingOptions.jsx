const durations = [1, 4, 8, 12];
const hours = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

const formatHour = (hour) => `${String(hour).padStart(2, "0")}:00`;

// A start time is unavailable if the chosen session (start -> start + duration)
// overlaps any hour that is already booked.
export const isHourAvailable = (hour, durationHours, bookedHours) => {
  const length = durationHours ?? 1;
  return !bookedHours.some((booked) => booked >= hour && booked < hour + length);
};

const pill = "rounded-full border-0 transition duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-booking-violet";
const available = "bg-booking-button text-booking-ink enabled:hover:bg-booking-violet enabled:hover:text-white";
const selectedStyle = "bg-booking-violet text-white ring-2 ring-booking-violet ring-offset-2 ring-offset-booking-pink";
const unavailable = "cursor-not-allowed bg-booking-muted/40 text-booking-subtle";

export default function BookingOptions({ duration, time, bookedHours = [], onDurationChange, onTimeChange }) {
  const durationHours = duration ? parseInt(duration, 10) : null;

  return (
    <>
      <h2 className="booking-label mb-[10px] mt-[15px] text-base font-bold tracking-[-.035em] text-booking-violet">How long are we talking?</h2>
      <div className="flex gap-[13px] max-[600px]:gap-[11px]">
        {durations.map((hoursLong) => {
          const option = `${hoursLong}h`;
          return (
            <button
              key={option}
              onClick={() => onDurationChange(option)}
              aria-pressed={duration === option}
              className={`${pill} min-w-[57px] px-3 py-1.5 font-mono text-[11px] max-[600px]:min-w-[63px] ${duration === option ? selectedStyle : available}`}
            >{option}</button>
          );
        })}
      </div>
      <h2 className="booking-label mb-[10px] mt-[19px] text-base font-bold tracking-[-.035em] text-booking-violet max-[600px]:mt-[17px]">Available hours</h2>
      <div className="grid max-w-[390px] grid-cols-6 gap-x-2 gap-y-[9px] max-[900px]:max-w-[340px] max-[900px]:grid-cols-5 max-[600px]:max-w-none max-[600px]:grid-cols-5">
        {hours.map((hour) => {
          const option = formatHour(hour);
          const open = isHourAvailable(hour, durationHours, bookedHours);
          return (
            <button
              key={option}
              disabled={!open}
              title={open ? undefined : "Not available"}
              onClick={() => onTimeChange(option)}
              aria-pressed={time === option}
              className={`${pill} px-[3px] py-[5px] font-mono text-[10px] max-[600px]:px-0 max-[600px]:py-[7px] ${!open ? unavailable : time === option ? selectedStyle : available}`}
            >{option}</button>
          );
        })}
      </div>
    </>
  );
}
