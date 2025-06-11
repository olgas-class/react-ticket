import { useState } from "react";
import axios from "axios";

function App() {
  const languages = ["HTML", "CSS", "JS", "JAVA", "PHP"];
  const urgencyArray = ["bassa", "media", "alta"];

  const initialFormData = {
    name: "",
    programmingLanguage: "HTML",
    urgency: "media",
    updates: false,
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    console.log(name, ":", value, checked, type);

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const sendData = (event) => {
    event.preventDefault();
    // console.log("Invio dati al server", formData);
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/tickets", formData)
      .then((resp) => {
        if (resp.data.id) {
          setShowAlert(true);
          setFormData(initialFormData);
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
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
                  <div className="alert alert-success">
                    I dati sono stati inviati con successo
                  </div>
                )}

                <form onSubmit={sendData}>
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.name}
                      name="name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="language" className="form-label">
                      Seleziona il linguaggio di programmazione
                    </label>
                    <select
                      className="form-control"
                      id="language"
                      value={formData.programmingLanguage}
                      name="programmingLanguage"
                      onChange={handleChange}
                    >
                      {languages.map((curLanguage, index) => (
                        <option key={index} value={curLanguage}>
                          {curLanguage}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-2">
                    <h5 className="mt-3">Livello di urgenza</h5>

                    {urgencyArray.map((curUrgency, index) => (
                      <div key={index} className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="urgency"
                          id={curUrgency}
                          value={curUrgency}
                          checked={formData.urgency === curUrgency}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={curUrgency}
                        >
                          {curUrgency}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="updates"
                      id="updates"
                      checked={formData.updates}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="updates">
                      Ricevi aggiornamenti sulla richiesta
                    </label>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="description" className="form-label">
                      Descrizione del problema
                    </label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      id="description"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Invia
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
