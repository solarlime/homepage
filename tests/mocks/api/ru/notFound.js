export const response = {
  subtitle_1: 'Тт',
  subtitle_2: 'Уу',
  caption_1: 'Фф',
  caption_2: 'Хх',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
