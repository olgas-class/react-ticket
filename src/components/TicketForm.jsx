const TicketForm = ({ formData, handleChange, onFormSubmit }) => {
  const languages = ["HTML", "CSS", "JS", "JAVA", "PHP"];
  const urgencyArray = ["bassa", "media", "alta"];

  return (
    <form onSubmit={onFormSubmit}>
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
            <label className="form-check-label" htmlFor={curUrgency}>
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
  );
};

export default TicketForm;
