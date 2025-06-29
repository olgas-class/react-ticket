import { useState } from "react";
import axios from "axios";
import TicketForm from "../components/TicketForm";
import { useNavigate } from "react-router-dom";
import { useAlertContext } from "../contexts/AlertContext";

const CreateTicket = () => {
  const initialFormData = {
    name: "",
    programmingLanguage: "HTML",
    urgency: "media",
    updates: false,
    description: "",
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const { setShowAlert } = useAlertContext();

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const sendData = (event) => {
    event.preventDefault();
    // console.log("Invio dati al server", formData);
    axios.post(apiUrl, formData).then((resp) => {
      if (resp.data.id) {
        // setShowAlert(true);
        // setFormData(initialFormData);
        // setTimeout(() => {
        //   setShowAlert(false);
        // }, 5000);
        setShowAlert(true);
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
