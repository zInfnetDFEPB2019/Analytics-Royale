const axios = require('axios');
const replaceHashtag = require('../utils/replaceHashtag');
require('dotenv').config();

module.exports = {
  async getClanInfo(rq, rs) {
    let { clanTag } = rq.body;

    clanTag = replaceHashtag(clanTag);

    const url = `https://api.clashroyale.com/v1/clans/${clanTag}`;
    const option = {
      headers: {
        Authorization: process.env.JWT_KEY,
      },
    };

    let resposta;

    try {
      resposta = await axios.get(url, option);
    } catch (error) {
      console.error('erro');
    }

    return rs.json(resposta.data);
  },
};
