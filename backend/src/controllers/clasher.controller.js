const axios = require('axios');
require('dotenv').config();

module.exports = {
  async getClasherInfo(rq, rs) {
    let { playerTag } = rq.body;

    if (playerTag.includes('#')) {
      playerTag = playerTag.replace('#', '%23');
    }

    const url = `https://api.clashroyale.com/v1/players/${playerTag}`;
    const option = {
      headers: {
        Authorization: process.env.JWT_KEY,
      },
    };

    console.log(url);

    try {
      const clasher = await axios.get(url, option);
      return rs.json({
        status: true,
        info: clasher.data,
      });
    } catch (error) {
      return rs.json({
        status: false,
        message: error.data,
      });
    }
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
