export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(
    {
      print: 'напечатать резюме',
      download: 'загрузить .pdf',
    },
  );
};
