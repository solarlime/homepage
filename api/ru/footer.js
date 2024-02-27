export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(
    {
      language: 'english version',
    },
  );
};
