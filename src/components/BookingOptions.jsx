const durations = ["1h", "4h", "8h", "12h"];
const hours = ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];

export default function BookingOptions({ duration, time, onDurationChange, onTimeChange }) {
  return (
    <>
      <h2 className="booking-label mb-[10px] mt-[15px] text-base font-bold tracking-[-.035em] text-booking-violet">How long are we talking?</h2>
      <div className="flex gap-[13px] max-[600px]:gap-[11px]">
        {durations.map((option) => <button key={option} onClick={() => onDurationChange(option)} aria-pressed={duration === option} className={`min-w-[57px] rounded-full border-0 px-3 py-1.5 font-mono text-[11px] transition-colors max-[600px]:min-w-[63px] ${duration === option ? "bg-booking-violet text-white" : "bg-booking-muted text-booking-ink hover:bg-booking-violet hover:text-white"}`}>{option}</button>)}
      </div>
      <h2 className="booking-label mb-[10px] mt-[19px] text-base font-bold tracking-[-.035em] text-booking-violet max-[600px]:mt-[17px]">Available hours</h2>
      <div className="grid max-w-[390px] grid-cols-6 gap-x-2 gap-y-[9px] max-[900px]:max-w-[340px] max-[900px]:grid-cols-5 max-[600px]:max-w-none max-[600px]:grid-cols-5">
        {hours.map((option) => <button key={option} onClick={() => onTimeChange(option)} aria-pressed={time === option} className={`rounded-full border-0 px-[3px] py-[5px] font-mono text-[10px] transition-colors max-[600px]:px-0 max-[600px]:py-[7px] ${time === option ? "bg-booking-violet text-white" : "bg-booking-muted text-booking-ink hover:bg-booking-violet hover:text-white"}`}>{option}</button>)}
      </div>
    </>
  );
}
