export const response = {
  subtitle_1: 'The page you are\u00a0looking\u00a0for cannot be found! Maybe you have\u00a0made a\u00a0mistake in\u00a0your request.',
  subtitle_2: 'Try again or\u00a0visit the\u00a0main page.',
  caption_1: 'A photo by',
  caption_2: 'on',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
