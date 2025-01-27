export const response = {
  subtitle_job: 'Aa',
  skills_title: 'Bb',
  about_title: 'Cc',
  bottom_text_1: 'Dd',
  bottom_text_2: 'Ee',
  bottom_text_3: 'Ff',
  bottom_button: 'Gg',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
