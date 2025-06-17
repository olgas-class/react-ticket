import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import TicketCard from "./TicketCard";

const TicketsGrid = () => {
  const { tickets } = useContext(GlobalContext);
  return (
    <div className="row row-cols-2 g-3">
      {tickets.map((curTicket) => (
        <div key={curTicket.id} className="col">
          <TicketCard ticket={curTicket} />
        </div>
      ))}
    </div>
  );
};

export default TicketsGrid;
