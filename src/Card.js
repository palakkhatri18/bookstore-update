import "./styles.css";

export default function Card(props) {
  return (
    <div className="column">
      <div className="card">
        <img src={props.url} alt={props.t1} />
        <div className="container">
          <h5>{props.t1}</h5>
          <h3>{props.t2}</h3>
          <p>{props.p1}</p>
          <h4>{props.price}</h4>
          {props.children}
        <a href = {props.link}>
        <button>View More</button>
      </a>
        </div>
      </div>
    </div>
  );
}
