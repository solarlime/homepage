export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(
    {
      print: 'print cv',
      download: 'download .pdf',
    },
  );
};
