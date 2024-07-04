import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="welcome-heading">
        <h1>WELCOME TO THE STILTON'S STORE</h1>
      </div>
      <div className="home-cards">
        <div className="home-card" onClick={() => navigate('/geronimo')}>
          <img src="https://geronimostilton.com/upload/assets/files/US,115,-1,419/3306-0.png" alt="Geronimo Stilton" />
        </div>
        <div className="home-card" onClick={() => navigate('/thea')}>
          <img src="https://i.pinimg.com/originals/f6/60/7a/f6607a2366b0890cf8bdecbd89866d00.png" alt="Thea Stilton" />
        </div>
      </div>
    </div>
  );
};

export default Home;
