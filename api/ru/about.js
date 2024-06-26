export const response = {
  subtitle_job: 'Front-end разработчик',
  skills_title: 'Инструменты',
  about_title: 'Обо мне',
  bottom_text_1: 'Заинтересовал?',
  bottom_text_2: 'Есть, что предложить?',
  bottom_text_3: 'Свяжитесь со мной по ссылкам, указанным выше.',
  bottom_button: 'Наверх!',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};

