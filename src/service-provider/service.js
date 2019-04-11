import express from 'express'

const app = express();

app.use(express.json());

const users = new Array(10).fill().map((_, i) => ({name: `user-${i}`, password: `pass-${i}`, age: i}))

app.get('/users', (_, res) => res.send(users));

export default app;
