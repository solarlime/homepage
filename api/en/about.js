export const response = {
  subtitle_job: 'Front-end developer',
  skills_title: 'Tools',
  about_title: 'About me',
  bottom_text_1: 'Interested in working together?',
  bottom_text_2: 'Got an idea?',
  bottom_text_3: 'Contact me on the links above.',
  bottom_button: 'To links!',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
