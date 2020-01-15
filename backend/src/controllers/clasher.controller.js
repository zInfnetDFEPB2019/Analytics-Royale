const axios = require('axios');
const replaceHashtag = require('../utils/replaceHashtag');
require('dotenv').config();

module.exports = {
  async getClasherInfo(rq, rs) {
    let { playerTag } = rq.body;
    playerTag = replaceHashtag(playerTag);

    const url = `https://api.clashroyale.com/v1/players/${playerTag}`;
    const option = {
      headers: {
        Authorization: process.env.JWT_KEY,
      },
    };

    let resposta;

    try {
      resposta = await axios.get(url, option);
    } catch (error) {
      console.error(error);
    }

    return rs.json(resposta.data);
  },
};

// async function get() {
//   const playerTag = '%23YJYRY29UU';

//   const url = `https://api.clashroyale.com/v1/players/${playerTag}`;

//   const option = {
//     headers: {
//       Authorization: JWT_KEY,
//     },
//   };

//   let resposta;

//   try {
//     resposta = await axios.get(url, option);
//     console.log(resposta.data);
//   } catch (error) {
//     console.error(error);
//   }

//   // return rs.json(resposta.data);
// }

// get();
