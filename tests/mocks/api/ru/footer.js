export const response = {
  language: 'Zz',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
