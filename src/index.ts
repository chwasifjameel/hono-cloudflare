import { Hono } from 'hono';

const app = new Hono();

app.get('/', async (c) => {
  try {
    // let body; = (await c.req.json()) || {};
    const contentType = c.req.header('ContentType');
    console.log('contentType', contentType);
    return c.json({
      message: 'Hello Hono!',
      contentType: contentType,
    });
  } catch (error) {
    return c.json({ error: 'Invalid or empty JSON in request body' });
  }
});
app.post('/', async (c) => {
  try {
    let body = (await c.req.json()) || {};
    // const contentType = c.req.header('ContentType');
    console.log('body', body);
    return c.json({
      message: 'Hello Hono!',
      body,
    });
  } catch (error) {
    return c.json({ error: 'Invalid or empty JSON in request body' });
  }
});

export default app;
