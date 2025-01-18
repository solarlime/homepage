export const response = {
  title: 'Jj',
  title_name: 'Kk',
  subtitle: 'Ll',
  imac: 'Mm',
  table_title: 'Nn',
  projects_title: 'Oo',
  bottom_text_1: 'Pp',
  bottom_text_2: 'Qq',
  bottom_text_3: 'Rr',
  bottom_button: 'Ss',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
