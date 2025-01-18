export const response = {
  print: 'Жж',
  download: 'Зэ',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
