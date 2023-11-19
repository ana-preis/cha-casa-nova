const kv = require("@vercel/kv")
require("node-fetch")
// import { createClient } from '@vercel/kv';
// const fetch = require("node-fetch");

//url:  https://moved-pup-37084.kv.vercel-storage.com
//token:  AZDcASQgZmVkODUzNWYtMzg5YS00NGNhLWEzODQtMGZhY2U0OTJkODczMmVkNGFhNDA3NjRiNDIzYTlkNzFhNDMxYzQ5MjcxMGU=

// const kvClient = createClient({

module.exports = async (req, res) => {

  // const kvClient = kv.createClient({
  //   url: process.env.KV_REST_API_URL,
  //   token: process.env.KV_REST_API_TOKEN,
  // })
  console.log('url: ', process.env.KV_REST_API_URL)
  console.log('token: ', process.env.KV_REST_API_TOKEN)
  const { KV_REST_API_URL, KV_REST_API_TOKEN } = process.env;


  if (req.method === 'GET') {
    console.log('dentro do get')
    fetch(`${KV_REST_API_URL}/`, {
      headers: {
        Authorization: `Bearer ${KV_REST_API_TOKEN}`,
      },
      body: '["HGETALL", "gift:list"]',
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => console.log('backend response: ',  data));
    // try {
    //   console.group(' dentro do try: ')
    //   // const giftList = await kvClient.hgetall("gift:list");
    //   const giftList = await kvClient.hget("gift:list", "1");
    //   // return res.status(200).json(giftList);
    //   console.log(giftList)
    //   console.groupEnd()
    //   return res.status(200).json({sdf:" sdfd"});
    // } catch (error) {
    //   return res.status(500).json({err:"erro"})
    // }
  // } else {
  //   const data = req.body;
  //   await kvClient.set("gift:list", data.index, data)
  //   res.status(200).send({msg: 'POST Hello World!'});
  }
};
