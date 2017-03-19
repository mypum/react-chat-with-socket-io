import express from 'express'
import http from 'http'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'
import serverRendering from './serverRendering'
import socket from './routes/socket'

const app = express();
const server = http.createServer(app)


const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(serverRendering);
app.set('port', 3000);

/* Socket.io Communication */
const io = require('socket.io')(server);
io.sockets.on('connection', socket);

server.listen(app.get('port'), function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server listening on', app.get('port'));
});
