const axios = require('axios');
require('dotenv').config();

module.exports = {
  async getClanInfo(rq, rs) {
    let { clanTag } = rq.body;

    if (clanTag.includes('#')) {
      clanTag = clanTag.replace('#', '%23');
    }

    const url = `https://api.clashroyale.com/v1/clans/${clanTag}`;
    const option = {
      headers: {
        Authorization: process.env.JWT_KEY,
      },
    };

    try {
      const clan = await axios.get(url, option);
      return rs.json({
        status: true,
        info: clan.data,
      });
    } catch (error) {
      return rs.json({
        status: false,
        message: 'Invalid Clan Tag.',
      });
    }
  },
};
