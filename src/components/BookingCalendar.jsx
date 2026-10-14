const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

export default function BookingCalendar({ month, selectedDate, onMonthChange, onDateSelect }) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const offset = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  return (
    <div className="w-full max-w-[360px] rounded-[15px] bg-booking-violet px-[17px] py-3 text-white shadow-[0_3px_0_var(--color-booking-violet-shadow)] max-[600px]:max-w-none max-[600px]:min-h-[215px] max-[600px]:px-[18px] max-[600px]:py-[14px]">
      <div className="flex h-6 items-center justify-center gap-[17px]">
        <button className="border-0 bg-transparent p-0 text-[23px] leading-none text-white" onClick={() => onMonthChange(-1)} aria-label="Previous month">‹</button>
        <strong className="min-w-[74px] text-center text-xs font-semibold">{month.toLocaleDateString("en-US", { month: "short", year: "numeric" })}</strong>
        <button className="border-0 bg-transparent p-0 text-[23px] leading-none text-white" onClick={() => onMonthChange(1)} aria-label="Next month">›</button>
      </div>
      <div className="mt-1 grid grid-cols-7 gap-x-px gap-y-0.5 text-center max-[600px]:mt-[7px] max-[600px]:gap-y-[6px]">
        {weekdays.map((day, index) => <span key={`${day}-${index}`} className="pb-1 text-[9px] opacity-70 max-[600px]:pb-2">{day}</span>)}
        {Array.from({ length: offset }, (_, index) => <span key={`blank-${index}`} />)}
        {Array.from({ length: daysInMonth }, (_, index) => index + 1).map((day) => (
          <button
            key={day}
            onClick={() => onDateSelect(day)}
            className={`mx-auto grid size-[25px] place-items-center rounded-full border-0 bg-transparent p-0 text-[10px] text-white hover:bg-brand-yellow hover:text-brand-ink max-[600px]:size-[30px] ${selectedDate === day ? "!bg-brand-yellow !text-brand-ink" : ""}`}
            aria-pressed={selectedDate === day}
          >{day}</button>
        ))}
      </div>
    </div>
  );
}
