var todo = require('./models/todo');

module.exports = {
  configure: function(app) {

    app.get('/', function (req, res) {
       console.log("Got a GET request for the homepage");
       res.send('Hello world GET');
    })

    app.get('/todo/', function(req, res) {
      todo.get(res);
    });

    app.post('/todo/', function(req, res) {
      todo.create(req.body, res);
    });

    app.put('/todo/', function(req, res) {
      todo.update(req.body, res);
    });

    app.delete('/todo/:id/', function(req, res) {
      todo.delete(req.params.id, res);
    });
  }
};
