import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading'
import 'antd/dist/antd.css'
// 1. Initialize
const app = dva();

app.model(require("./models/users").default);

// 2. Plugins
// app.use({});
app.use(createLoading())
// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
