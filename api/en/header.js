export const response = {
  print: 'print cv',
  download: 'download .pdf',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
