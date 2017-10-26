import dva from 'dva';

// 1. Initialize
const app = dva({
  initialState: {
    index: 0
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/add.js'));
app.model(require('./models/list.js'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
