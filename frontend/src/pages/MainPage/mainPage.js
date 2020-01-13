import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
const JWT_KEY =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg1OWUyY2IzLWMxMTktNDVkYy05NTMyLWM2Y2Y3NDc5ZmU0MCIsImlhdCI6MTU3ODkyOTgwMSwic3ViIjoiZGV2ZWxvcGVyLzhhZmExMjEyLWYxMjktMzlhMS0xOGE5LWY5NGVhNjEzMDE1MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTEuMzIuMTU4LjE5OCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.te0elFHyrAX66CTkHVUHzMDe-JStfOXTyKrKNhrgSj2NiMvzoNMTVYkHjm-Odygc35GKR8hfv59EMHbhlCpjvA';

const MainPage = () => {
  const apiToken = '';
  const clashRoyaleApi = 'https://api.clashroyale.com/v1/player';
  const [clasher, setClasher] = useState('');
  async function getClasherInfo() {
    const response = await axios.get(clashRoyaleApi + `/${clasher}`, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    console.log(response);
  }
  getClasherInfo();

  return (
    <div className="container">
      <div className="row">
        <div className="col s4 offset-s4">
          <h1>Royalitics</h1>
        </div>
        <form className="col s6 offset-s3">
          <input
            id="clasher"
            value={clasher}
            onChange={event => setClasher(event.target.value)}
            placeholder="Clasher`s Nickname"
            className="input-field s12"
          ></input>
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
