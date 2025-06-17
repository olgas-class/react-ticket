import { Link } from "react-router-dom";

const TicketCard = ({ ticket }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4>
          {ticket.id} - {ticket.name}
        </h4>
        <p>{ticket.description}</p>
        <Link to={`/tickets/${ticket.id}`}>Vedi dettagli</Link>
      </div>
    </div>
  );
};

export default TicketCard;
