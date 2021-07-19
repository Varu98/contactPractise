import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <br />

      <Avatar img={props.img} />
      <h3>{props.name}</h3>
      <Detail key={props.id} tel={props.tel} email={props.email} />
    </div>
  );
}
export default Card;
