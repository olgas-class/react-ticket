import Home from "./pages/Home";
import CreateTicket from "./pages/CreateTicket";
import GuestLayout from "./layouts/GuestLayout";
import TicketList from "./pages/TicketList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowTicket from "./pages/ShowTicket";
import Page404 from "./pages/Page404";
import About from "./pages/About";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.tickets}>
            <Route path="" element={<TicketList />} />
            <Route path={routes.ticketsCreate} element={<CreateTicket />} />
            <Route path=":id" element={<ShowTicket />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
