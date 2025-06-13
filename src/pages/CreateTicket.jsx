import { useState } from "react";
import axios from "axios";
import TicketForm from "../components/TicketForm";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const initialFormData = {
    name: "",
    programmingLanguage: "HTML",
    urgency: "media",
    updates: false,
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const sendData = (event) => {
    event.preventDefault();
    // console.log("Invio dati al server", formData);
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/tickets", formData)
      .then((resp) => {
        if (resp.data.id) {
          // setShowAlert(true);
          // setFormData(initialFormData);
          // setTimeout(() => {
          //   setShowAlert(false);
          // }, 5000);
          navigate(`/tickets/${resp.data.id}`);
        }
      });
  };

  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center mb-3">Apri il ticket</h3>

                {showAlert && (
                  <Alert
                    type="success"
                    message="I dati sono stati inviati con successo"
                  />
                )}

                <TicketForm
                  formData={formData}
                  handleChange={handleChange}
                  onFormSubmit={sendData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
