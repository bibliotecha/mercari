/**
 * サーバーを立ち上げるためだけのファイル
 */
const app = require('./app');

const port = 3000;

app.listen(port, () => {
  console.log('サーバーが立ち上がりました');
});
