const fields = [
  { label: "Full name", name: "name", type: "text", autoComplete: "name" },
  {
    label: "Email address",
    name: "email",
    type: "email",
    autoComplete: "email",
  },
  { label: "Phone number", name: "phone", type: "tel", autoComplete: "tel" },
];

export default function BookingContactForm({ onSubmit, sessionComplete }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mt-[14px] min-h-[490px] rounded-2xl bg-booking-violet px-5 py-[25px] text-white shadow-[0_4px_0_var(--color-booking-violet-shadow)] max-[600px]:mt-0 max-[600px]:min-h-0 max-[600px]:px-[22px] max-[600px]:py-6"
    >
      <h2 className="mb-[21px] text-[17px] font-bold leading-[1.12] tracking-[-.025em]">
        Who's the legend that's
        <br />
        booking?
      </h2>
      {fields.map(({ label, ...input }) => (
        <label
          key={input.name}
          className="mb-[15px] block text-xs text-booking-label max-[600px]:mb-[13px]"
        >
          {label}
          <input
            {...input}
            required
            className="mt-[5px] block h-[31px] w-full rounded-md border-0 bg-white px-2 py-1 text-booking-ink outline-2 outline-transparent focus:outline-brand-yellow max-[600px]:h-[35px]"
          />
        </label>
      ))}
      <button
        disabled={!sessionComplete}
        className="mx-auto mt-[23px] block w-[145px] rounded-full border-0 bg-booking-button px-2.5 py-[10px] text-[11px] font-bold text-booking-ink shadow-[0_3px_0_var(--color-booking-button-shadow)] transition max-[600px]:mt-[19px] enabled:hover:bg-booking-button-hover enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none"
        type="submit"
        title={sessionComplete ? "Confirm your booking" : "Choose a date, duration, and start time first"}
      >
        Confirm
      </button>
      {!sessionComplete && <p className="mt-3 text-center text-[10px] leading-snug text-booking-label">Choose a date, duration, and start time to enable confirmation.</p>}
    </form>
  );
}
