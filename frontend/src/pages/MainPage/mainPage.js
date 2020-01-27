import React, { useState } from 'react';
import api from '../../services/api';
import './style.css';
import crownLogo from '../../assets/clash-royale-crown.png';

const MainPage = () => {
  const [playerTag, setPlayerTag] = useState('');
  
  
  async function getClasherInfo(e) {
    e.preventDefault();
    try{
      const response = await api.post('/clasher', {playerTag});
      console.log(playerTag);
      console.log(response);
    }catch(err) {
      console.log(err);
    }
  }  

  return (
    <main>
      <div className="container">
      <div className="search-wrapper">
          <img src={crownLogo} className="logo"></img>
          <div className="search-box">
            <form onSubmit={getClasherInfo}>
              <input
                name="playerTag"
                id="playerTag"
                required
                value={playerTag}
                onChange={e => (setPlayerTag(e.target.value))}
              ></input>
              <button type="submit">
                Search
              </button>
            </form>
          </div>
          </div>
          </div>
    </main>
  );
};

export default MainPage;
