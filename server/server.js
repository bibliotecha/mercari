/**
 * サーバーを立ち上げるためだけのファイル
 */
const app = require('./app');

const port = 4000;

app.listen(port, () => {
  console.log('サーバーが立ち上がりました');
});
