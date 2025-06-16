import { Link } from "react-router-dom";
import routes from "../routes/routes";

const Home = () => {
  return (
    <main>
      <div className="container">
        <section>
          <h1>Apri tutti i ticket che vuoi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus vel quibusdam corporis, laudantium cumque earum
            doloribus cum quae et dolorem officia blanditiis nostrum veritatis
            perferendis cupiditate illo odit tenetur.
          </p>
        </section>
        <section>
          <h2>Vedi il nostro priissimo ticket!</h2>
          <p>Il primo ticket non si scorda mai</p>
          <Link to="/tickets/1">Leggilo!</Link>
        </section>

        <section>
          <h2>Scopri chi siamo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, eligendi? Natus est, animi voluptatibus illum enim
            ullam consectetur! Fuga quidem corrupti reiciendis ea ipsam odio
            eaque soluta accusamus ducimus eligendi.
          </p>
          <Link to={routes.about}>Leggi di più</Link>
        </section>
      </div>
    </main>
  );
};

export default Home;
