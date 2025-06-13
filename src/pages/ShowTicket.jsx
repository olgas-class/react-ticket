import axios from "axios";
import Alert from "../components/Alert";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ShowTicket = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setError("");
    axios
      .get(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/tickets/${id}`)
      .then((resp) => {
        console.log(resp);

        setTicket(resp.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 404) {
          navigate("/not-found");
        } else {
          setError("Errore sconosciuto");
        }
      });
  }, [id]);

  return (
    <main>
      {error !== "" && <Alert type="danger" message={error} />}
      {ticket && (
        <div className="container">
          <a onClick={() => navigate(-1)} className="mb-2">
            Ritorna alla pagina precedente
          </a>
          <h1>Dettagli del ticket: {id}</h1>
          <h2>Da: {ticket.name}</h2>
          <p>Linguaggio: {ticket.language}</p>
          <p>Urgenza: {ticket.urgency}</p>
          <p>Dettagli: {ticket.description}</p>
        </div>
      )}
    </main>
  );
};

export default ShowTicket;
