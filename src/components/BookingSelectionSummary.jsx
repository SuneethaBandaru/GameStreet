export default function BookingSelectionSummary({ dateLabel, duration, time }) {
  const selections = [
    ["Date", dateLabel],
    ["Duration", duration],
    ["Start time", time],
  ];
  const complete = selections.every(([, value]) => value);

  return (
    <section className="mt-5 rounded-xl border border-booking-violet/20 bg-white/70 p-4" aria-live="polite" aria-label="Your booking selection">
      <h2 className="font-display text-sm font-bold text-booking-violet">Your selection</h2>
      <dl className="mt-2 grid grid-cols-3 gap-2 max-[600px]:gap-1">
        {selections.map(([label, value]) => (
          <div key={label} className="min-w-0">
            <dt className="font-mono text-[9px] uppercase tracking-[.08em] text-booking-subtle">{label}</dt>
            <dd className={`mt-1 truncate text-xs font-semibold ${value ? "text-booking-ink" : "text-booking-subtle"}`}>{value || "Choose"}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-[10px] text-booking-subtle">
        {complete ? "All session details selected." : "Select a date, duration, and start time to continue."}
      </p>
    </section>
  );
}
