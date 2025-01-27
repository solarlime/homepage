export const response = {
  subtitle_job: 'Аа',
  skills_title: 'Бб',
  about_title: 'Вв',
  bottom_text_1: 'Гг',
  bottom_text_2: 'Дд',
  bottom_text_3: 'Ее',
  bottom_button: 'Ëё',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
