const kv = require("@vercel/kv")
require("node-fetch")
const giftList = require("../src/configs/gift_list");

module.exports = async (req, res) => {

  const kvClient = kv.createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  })

  if (req.method === 'POST') {
    giftList.forEach(async gift => {
      const kvKey = gift.index?.toString();
      const fields = {}
      fields[`${kvKey}`] = JSON.stringify(gift)
      console.log('fields: ', fields)
      try {
        await kvClient.hset("gift:list2", fields)
      } catch (error) {
        console.log('Error in POST: ', error)
        return;
      }
    });
    res.status(200).send({msg: 'Populated Successfully!'});
  } else {
    return
  }
};
