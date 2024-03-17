export const response = {
  subtitle_1: 'Страница, которую вы ищете, не\u00a0была найдена! Возможно, в\u00a0запросе есть ошибка.',
  subtitle_2: 'Попробуйте ещё раз или\u00a0перейдите на\u00a0главную страницу.',
  caption_1: 'Автор фото: ',
  caption_2: ', взято с',
};

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(response);
};
