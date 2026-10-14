import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function BookingSuccess({ booking }) {
  const [qrCode, setQrCode] = useState("");
  const [shareMessage, setShareMessage] = useState("");

  useEffect(() => {
    let isMounted = true;
    QRCode.toDataURL(booking.payload, {
      width: 320,
      margin: 2,
      color: { dark: "#211735", light: "#ffffff" },
      errorCorrectionLevel: "H",
    }).then((url) => {
      if (isMounted) setQrCode(url);
    });
    return () => { isMounted = false; };
  }, [booking.payload]);

  const downloadQr = () => {
    if (!qrCode) return;
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = `gamestreet-booking-${booking.reference}.png`;
    link.click();
  };

  const shareBooking = async () => {
    const shareData = {
      title: "GameStreet booking confirmation",
      text: `Booking ${booking.reference} · ${booking.summary}`,
      url: window.location.href,
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
        setShareMessage("Booking link copied to clipboard.");
      }
    } catch (error) {
      if (error.name !== "AbortError") setShareMessage("Unable to share right now. You can download your QR code instead.");
    }
  };

  return (
    <section className="mx-auto flex w-full max-w-[620px] flex-col items-center text-center">
      <div className="mb-4 grid size-14 place-items-center rounded-full bg-booking-violet text-3xl text-white" aria-hidden="true">✓</div>
      <span className="font-mono text-[10px] tracking-[.16em] text-booking-kicker">GAMESTREET · GS1</span>
      <h1 className="font-display mt-2 text-[clamp(36px,5vw,52px)] font-bold leading-tight tracking-[-.055em] text-booking-violet">Booking successful</h1>
      <p className="mt-3 max-w-[480px] text-sm leading-relaxed text-booking-message">Booking is successful, you will receive a confirmation email shortly along with the QR code</p>
      <div className="mt-6 rounded-2xl bg-white p-4 shadow-[0_8px_25px_rgb(50_30_80_/_12%)]">
        {qrCode ? <img className="block size-56" src={qrCode} alt={`QR code for booking ${booking.reference}`} /> : <div className="grid size-56 animate-pulse place-items-center bg-booking-muted text-xs text-booking-ink">Generating QR code…</div>}
      </div>
      <p className="mt-4 font-mono text-[10px] tracking-[.1em] text-booking-subtle">BOOKING REF · {booking.reference}</p>
      <p className="mt-2 text-sm text-booking-ink">{booking.summary}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button onClick={downloadQr} disabled={!qrCode} className="rounded-full bg-booking-violet px-6 py-3 text-sm font-bold text-white transition hover:bg-booking-link disabled:cursor-wait disabled:opacity-60">Download QR code</button>
        <button onClick={shareBooking} className="rounded-full border border-booking-violet px-6 py-3 text-sm font-bold text-booking-violet transition hover:bg-white">Share booking</button>
      </div>
      {shareMessage && <p role="status" className="mt-3 text-xs text-booking-subtle">{shareMessage}</p>}
      <a href="/#games" className="mt-7 text-xs font-semibold text-booking-link underline underline-offset-4">Back to the games</a>
    </section>
  );
}
