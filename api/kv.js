const kv = require("@vercel/kv")
require("node-fetch")

module.exports = async (req, res) => {

  const kvClient = kv.createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  })

  if (req.method === 'GET') {
    console.log('dentro do get')
    // fetch(`${KV_REST_API_URL}/`, {
    //   headers: {
    //     Authorization: `Bearer ${KV_REST_API_TOKEN}`,
    //   },
    //   body: '["HGETALL", "gift:list"]',
    //   method: 'POST',
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log('backend response: ',  data));
    try {
      console.group('dentro do try')
      const giftList = await kvClient.hgetall("gift:list");
      console.log(giftList)
      console.groupEnd()
      return res.status(200).json(giftList);
    } catch (error) {
      return res.status(500).json({err:"erro: "})
    }
  } else {
    const data = req.body;
    await kvClient.set("gift:list", data.index, data)
    res.status(200).send({msg: 'POST Hello World!'});
  }
};
