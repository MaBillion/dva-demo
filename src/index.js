import dva from 'dva';
import './index.css';
import router from './router'
import index from './models/index'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(index.Home);
app.model(index.Login);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
