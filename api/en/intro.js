export const response = {
  title: 'Hi! I am',
  title_name: 'Dmitriy',
  subtitle: 'I turn design into reality. Web\u00a0reality.',
  imac: 'I am inspired by different patterns of\u00a0industrial design. However, the better thing is an opportunity to animate them, to\u00a0provide an ability to interact with them. At\u00a0this moment, I feel that I have created something really new.',
  table_title: 'What I\u00a0use',
  projects_title: 'My works',
  bottom_text_1: 'Interested in working together?',
  bottom_text_2: 'Got an idea?',
  bottom_text_3: "Let's make something great!",
  bottom_button: "Let's go!",
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
