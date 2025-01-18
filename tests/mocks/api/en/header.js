export const response = {
  print: 'Hh',
  download: 'Ii',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
