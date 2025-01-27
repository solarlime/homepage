export const response = {
  subtitle_1: 'Tt',
  subtitle_2: 'Uu',
  caption_1: 'Vv',
  caption_2: 'Ww',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
