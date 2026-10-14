import { useState } from "react";
import BookingCalendar from "../components/BookingCalendar";
import BookingContactForm from "../components/BookingContactForm";
import BookingOptions from "../components/BookingOptions";
import BookingSelectionSummary from "../components/BookingSelectionSummary";
import BookingSuccess from "../components/BookingSuccess";

export default function BookingPage() {
  const [month, setMonth] = useState(new Date(2026, 9, 1));
  const [date, setDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [duration, setDuration] = useState(null);
  const [time, setTime] = useState(null);
  const [booking, setBooking] = useState(null);
  const changeMonth = (step) => {
    setMonth((current) => new Date(current.getFullYear(), current.getMonth() + step, 1));
    setDate(null);
    setSelectedMonth(null);
    setTime(null);
  };
  const selectDate = (day) => {
    setDate(day);
    setSelectedMonth(`${month.getFullYear()}-${month.getMonth()}`);
    setTime(null);
  };
  const sessionComplete = Boolean(date && duration && time);
  const selectedDate = date && selectedMonth
    ? (() => {
        const [year, monthIndex] = selectedMonth.split("-").map(Number);
        return new Date(year, monthIndex, date);
      })()
    : null;
  const dateLabel = selectedDate?.toLocaleDateString("en-US", { month: "short", day: "numeric" }) ?? null;
  const submitBooking = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const selectedDate = date && selectedMonth
      ? (() => {
          const [year, monthIndex] = selectedMonth.split("-").map(Number);
          return new Date(year, monthIndex, date);
        })()
      : null;
    const dateLabel = selectedDate?.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) ?? "Date to be confirmed";
    const name = form.get("name")?.toString().trim() || "GameStreet guest";
    const email = form.get("email")?.toString().trim() || "";
    const reference = `GS-${Date.now().toString(36).toUpperCase()}`;
    const summary = `LAN Party · ${dateLabel} · ${time ?? "Time to be confirmed"} · ${duration ?? "Duration to be confirmed"}`;
    const payload = JSON.stringify({ type: "GameStreet booking", reference, name, email, summary });
    setBooking({ reference, summary, payload });
  };

  return (
    <main className="grid min-h-screen place-items-center bg-booking-outer px-[4vw] py-[34px] text-booking-ink max-[600px]:bg-booking-pink max-[600px]:p-0">
      <div className="booking-frame relative min-h-[650px] w-full max-w-[1100px] bg-booking-pink px-[7%] pb-[58px] pt-[78px] max-[900px]:px-[5%] max-[900px]:pb-[55px] max-[900px]:pt-[70px] max-[600px]:min-h-screen max-[600px]:px-[6vw] max-[600px]:pb-[58px] max-[600px]:pt-[72px]">
        <a
          className="absolute left-6 top-5 font-mono text-[9px] tracking-[.1em] text-booking-link"
          href="/#games"
        >
          ← &nbsp; GAMESTREET{" "}
          <span className="ml-[15px] text-booking-subtle">
            LAN PARTY · BOOKING
          </span>
        </a>
        {booking ? (
          <BookingSuccess booking={booking} />
        ) : (
        <div className="mx-auto grid max-w-[850px] grid-cols-[1fr_300px] items-start gap-[12%] max-[900px]:grid-cols-[1fr_270px] max-[900px]:gap-[7%] max-[600px]:grid-cols-1 max-[600px]:gap-7">
          <section>
            <span className="font-mono text-[9px] tracking-[.13em] text-booking-kicker">
              GAMESTREET · GS1
            </span>
            <h1 className="font-display mb-2 mt-[3px] text-[clamp(36px,4vw,49px)] font-bold leading-[.98] tracking-[-.055em] text-booking-violet max-[600px]:text-[42px]">
              Reserve your screen time
            </h1>
            <p className="mb-[14px] text-xs italic text-booking-subtle">
              Choose a date to see available hours
            </p>
            <BookingCalendar
              month={month}
              selectedDate={date}
              selectedMonth={selectedMonth}
              onMonthChange={changeMonth}
              onDateSelect={selectDate}
            />
            <BookingOptions
              duration={duration}
              time={time}
              onDurationChange={setDuration}
              onTimeChange={setTime}
            />
            <BookingSelectionSummary dateLabel={dateLabel} duration={duration} time={time} />
          </section>
          <BookingContactForm onSubmit={submitBooking} sessionComplete={sessionComplete} />
        </div>
        )}
        <footer className="absolute bottom-[19px] left-[7%] right-[7%] flex justify-between font-mono text-[8px] tracking-[.1em] text-booking-footer max-[600px]:text-[7px]">
          <span>HIGH SCORES & GOOD COMPANY</span>
          <span>STOCKHOLM, SWEDEN · 2026</span>
        </footer>
      </div>
    </main>
  );
}
