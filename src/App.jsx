import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateTicket from "./pages/CreateTicket";
import GuestLayout from "./layouts/GuestLayout";
import TicketList from "./pages/TicketList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/new-ticket" element={<CreateTicket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
