export const response = {
  print: 'напечатать резюме',
  download: 'загрузить .pdf',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
