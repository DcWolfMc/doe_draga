const comments = require('./src/post');

module.exports = app => {
  app.get('/', (req, res) => { res.send('Servidor em funcinamento!') });
  comments.rotas(app);
};