import { delay, http, HttpResponse } from 'msw';

const unsplashResult = {
  urls: {
    raw: 'test_raw',
    thumb: 'test_thumb',
  },
  alt_description: 'test_description',
  user: {
    first_name: 'Test',
    last_name: 'Test',
    links: {
      html: 'test_userlink',
    },
  },
  links: {
    html: 'test_photolink',
  },
};

const handlers = [
  http.get('/api/:language/:component', async ({ params }) => {
    const { language, component } = params;
    await delay(200);
    // @ts-ignore
    const answer = await import(`../../api/${language}/${component}`).then((res) => { const { response } = res; return response; });
    return HttpResponse.json(answer);
  }),
  http.get('http://test.server/isServerDown', () => HttpResponse.error()),
  http.get('https://api.unsplash.com/photos/random', () => HttpResponse.json(unsplashResult)),
  http.post(import.meta.env.VITE_APP_SERVER, () => HttpResponse.error()),
];

export { handlers, unsplashResult };
