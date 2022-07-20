import exp from 'express';
import routes from './routes/inventory-routes';

const app = exp();
const PORT: number = 8081;

app.use(exp.json());

app.use(routes);

app.listen(PORT, () => console.log('server on ' + PORT));