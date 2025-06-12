import axios from "axios";
import { useEffect, useState } from "react";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    axios
      .get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/tickets")
      .then((resp) => {
        setTickets(resp.data);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <h1>Vedi tutti i iticket</h1>
        <div className="row row-cols-2 g-3">
          {tickets.map((curTicket) => (
            <div key={curTicket.id} className="col">
              <div className="card">
                <div className="card-body">
                  <h4>
                    {curTicket.id} - {curTicket.name}
                  </h4>
                  <p>{curTicket.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TicketList;
