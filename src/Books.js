import React from 'react';
import Card from './Card';
import './Books.css';

const Books = () => {
  return (
    <div className="books">
      <div className="row">
        {/* Geronimo Stilton Books */}
        <Card
          url="https://m.media-amazon.com/images/I/81kSSKCwhVL._AC_UF1000,1000_QL80_.jpg"
          t1="Geronimo Stilton"
          t2="Lost Treasure of the Emerald Eye"
          price="$10.99"
          link="books/lost-treasure-of-the"
        />
          
        <Card
          url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSQHaURvlnsJf-GIpkqCwQgKSieE4ctYO2U68hPl3GfNr6lqPfmP84Zkzg9nI2EB68n8itOOefRdhlBHRnR8b9wWoo0FNlDHT5ld9FVSCtFVD29Ebj6PO_iTglZoxyDYO5NKfbnGo8mM0/s1600/24077307.jpg"
          t1="Geronimo Stilton"
          t2="The Curse of the Cheese Pyramid"
          price="$12.99"
          link="books/the-curse-of-cheese"
        />
        <Card
          url="https://img1.od-cdn.com/ImageType-400/0290-1/C14/76A/9F/%7BC1476A9F-199F-443F-A6D8-32F0E6E29987%7DImg400.jpg"
          t1="Geronimo Stilton"
          t2="Cat and Mouse in a Haunted House"
          price="$11.99"
          link="books/cat-and-mouse-in"
        />
        {/* Thea Stilton Books */}
        <Card
          url="https://m.media-amazon.com/images/I/71eeou0k+4L._AC_UF1000,1000_QL80_.jpg"
          t1="Thea Stilton"
          t2="The Dragon's Code"
          price="$10.99"
          link="books/the-dragon-code"
        />
        <Card
          url="https://m.media-amazon.com/images/I/A1YZ-alcFOL._AC_UF1000,1000_QL80_.jpg"
          t1="Thea Stilton"
          t2="The Secret of the Old Castle"
          price="$12.99"
          link="books/the-secret-of-old-castle"
        />
        <Card
          url="https://m.media-amazon.com/images/I/71qiuYMHC1L._AC_UF1000,1000_QL80_.jpg"
          t1="Thea Stilton"
          t2="The Mystery in Paris"
          price="$11.99"
          link="books/thea-stilton"
        />
      </div>
    </div>
  );
}

export default Books;
