import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <Card
          url="https://m.media-amazon.com/images/I/81kSSKCwhVL._AC_UF1000,1000_QL80_.jpg"
          t1="Geronimo Stilton"
          t2="Lost Treasure of the Emerald Eye"
          p1="Join Geronimo and his family on a wild treasure hunt in search of the legendary Emerald Eye! This adventurous story is filled with excitement and humor."
          price="$10.99"
        >
          <button>Buy Now</button>
        </Card>
        <Card
          url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSQHaURvlnsJf-GIpkqCwQgKSieE4ctYO2U68hPl3GfNr6lqPfmP84Zkzg9nI2EB68n8itOOefRdhlBHRnR8b9wWoo0FNlDHT5ld9FVSCtFVD29Ebj6PO_iTglZoxyDYO5NKfbnGo8mM0/s1600/24077307.jpg"
          t1="Geronimo Stilton"
          t2="The Curse of the Cheese Pyramid"
          p1="Travel with Geronimo to Egypt where he uncovers the secret of the seven wonders and faces the curse of the Cheese Pyramid in this thrilling book."
          price="$12.99"
        >
          <button>Buy Now</button>
        </Card>
        <Card
          url="https://img1.od-cdn.com/ImageType-400/0290-1/C14/76A/9F/%7BC1476A9F-199F-443F-A6D8-32F0E6E29987%7DImg400.jpg"
          t1="Geronimo Stilton"
          t2="Cat and Mouse in a Haunted House"
          p1="Experience spooky and hilarious moments as Geronimo investigates a haunted house filled with creepy surprises and mysterious secrets."
          price="$11.99"
        >
          <button>Buy Now</button>
        </Card>
      </div>
    </div>
  );
}

export default App;
