import "./styles.css";
import contacts from "./contacts";

//https://picsum.photos/200
export default function App() {
  function Card(props) {
    return (
      <div className="card">
        <br />
        <img className="dp" src={props.img} alt="random" />
        <h3>{props.name}</h3>
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Contact Cards!</h1>
      <br />
      <Card
        name={contacts[0].name}
        tel={contacts[0].tel}
        email={contacts[0].email}
        img={contacts[0].img}
      />
      <div>
        <br />
        <br />
      </div>
      <Card
        name={contacts[1].name}
        tel={contacts[1].tel}
        email={contacts[1].email}
        img={contacts[1].img}
      />
      <div>
        <br />
        <br />
      </div>
      <Card
        name={contacts[2].name}
        tel={contacts[2].tel}
        email={contacts[2].email}
        img={contacts[2].img}
      />
    </div>
  );
}
