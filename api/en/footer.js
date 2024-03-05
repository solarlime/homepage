export const response = {
  language: 'русская версия',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
