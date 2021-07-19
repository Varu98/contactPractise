import "./styles.css";

function Avatar(props) {
  return (
    <div>
      <img className="dp" src={props.img} alt="random" />
    </div>
  );
}
export default Avatar;
