import express from 'express'
import { postRoutes } from './module/post/post.route';

const app = express();

app.use(express.json());

app.use("/post", postRoutes);

export default app;