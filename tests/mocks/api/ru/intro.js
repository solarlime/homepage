export const response = {
  title: 'Ии',
  title_name: 'Йй',
  subtitle: 'Кк',
  imac: 'Лл',
  table_title: 'Мм',
  projects_title: 'Нн',
  bottom_text_1: 'Оо',
  bottom_text_2: 'Пп',
  bottom_text_3: 'Рр',
  bottom_button: 'Сс',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
