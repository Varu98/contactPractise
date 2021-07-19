import "./styles.css";
import contacts from "./contacts";

import Card from "./Card";

function createCard(contact) {
  return (
    <div>
      <Card
        key={contact.id}
        id={contact.id}
        img={contact.img}
        name={contact.name}
        tel={contact.tel}
        email={contact.email}
      />
      <br />
      <br />
    </div>
  );
}

//https://picsum.photos/200
export default function App() {
  return (
    <div className="App">
      <h1>Contact Cards!</h1>
      <br />
      {contacts.map(createCard)}
      {/* <Card
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
      /> */}
    </div>
  );
}
