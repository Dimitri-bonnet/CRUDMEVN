var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const index = require('./routes')

/* Pour me connecter a la base de donnée */
mongoose.connect('mongodb+srv://dim:Azerty3991@cluster0-bfjvn.mongodb.net/CRUD?retryWrites=true&w=majority'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
}, 
(err) => {
  if(err){
    console.log('ERROR DB')
  }else{
    console.log('CONNECT DB OK !')
  }
});

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client-build')));
app.use(index);
app.get('*',(req, res) =>{
  res.sendFile(path.join(__dirname, "../client-build/index.html"));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
