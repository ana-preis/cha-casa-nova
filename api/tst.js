module.exports = async (req, res) => {
  const { key, value } = req.body;

  console.log('Writing to KV: ${key}: ${value}');

  res.status(200).send({ message: 'Value stored successfully'});
};