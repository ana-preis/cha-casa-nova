module.exports = (req, res) => {
  // check if is get method
  if (req.method === 'GET') {
    res.status(200).send({msg: 'GET Hello World!'});
  } else {
    res.status(200).send({msg: 'POST Hello World!'});
  }
};