import BookingPage from "./pages/BookingPage";
import GamesPage from "./pages/GamesPage";

const bookingPath = "/event/book-lan-event";

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "");
  return path === bookingPath ? <BookingPage /> : <GamesPage />;
}
