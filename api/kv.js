const kv = require("@vercel/kv")
require("node-fetch")

module.exports = async (req, res) => {

  const kvClient = kv.createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  })

  if (req.method === 'GET') {
    try {
      const giftList = await kvClient.hgetall("gift:list2");
      console.log('gift response from get: ', giftList)
      console.groupEnd()
      return res.status(200).json(giftList);
    } catch (error) {
      return res.status(500).json({err:"erro: "})
    }
  } else  if (req.method === 'POST') {
    const data = req.body;
    console.log('data to be saved in bff: ', data)
    const kvKey = data.index?.toString();
    const fields = {}
    fields[`${kvKey}`] = data
    console.log('fields: ', fields)
    try {
      await kvClient.hset("gift:list2", fields)
      res.status(200).send({msg: 'POST Hello World!'});
    } catch (error) {
      console.log('Error in POST: ', error)
    }
  } else {
    return
  }
};
