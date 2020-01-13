import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';


const MainPage = () => {
  const [clasher, setClasher] = ('');
  const JWT_KEY =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjcyNzc5MDhkLWU3Y2EtNDdiZi1iNWE2LTc0ZjlkMTFiNGUxMyIsImlhdCI6MTU3ODkzOTA0OSwic3ViIjoiZGV2ZWxvcGVyLzhhZmExMjEyLWYxMjktMzlhMS0xOGE5LWY5NGVhNjEzMDE1MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzkuMTc4LjIxMi4xNzUiXSwidHlwZSI6ImNsaWVudCJ9XX0.3vNROaZV9g6_wQRWTgDUuKQBRI4E_7p8adCjIdxnTI5PqTzvsUbazJe1OucolhMrNASMscPPMKLqAdRa5MtX3A';
  const options = {
    headers: {Authorization: `Bearer ${JWT_KEY}`}
  }
  const apiUrl = 'https://api.clashroyale.com/v1/locations';
  

  async function getClasherInfo() {
    try {
    const response = await axios.get(apiUrl, options) 
    console.log(response);
    } catch(error) {
      console.log(error);
    }
  };
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
