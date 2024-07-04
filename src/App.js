import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Books from './Books';
import About from './About';
import Contact from './Contact';
import Geronimo from './Geronimo';
import Thea from './Thea';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewBook from './Books/viewbook';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/geronimo" element={<Geronimo />} />
          <Route path="/thea" element={<Thea />} />
          <Route path="/books/:bookId" element={<ViewBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
