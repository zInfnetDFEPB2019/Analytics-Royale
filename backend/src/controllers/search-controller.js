const axios = require("axios");
require("dotenv").config();

module.exports = {
  async getInfo(req, res) {
    let { searchTag, searchType } = req.body;
    console.log(searchType);

    searchTag = searchTag.replace("#", "%23");

    let url = `https://api.clashroyale.com/v1/players/${searchTag}`;
    const option = {
      headers: {
        Authorization: process.env.JWT_KEY
      }
    };

    if (searchType == "2") url = url.replace("players", "clans");

    console.log(url);

    try {
      const searchRes = await axios.get(url, option);
      console.log(searchRes);
      return res.json({
        status: true,
        info: searchRes.data
      });
    } catch (error) {
      return res.json({
        status: false,
        info: error.data
      });
    }
  }
};
