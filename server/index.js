const express = require('express')
const { auth } = require('./firebase');
const app = express();
const serverPort = process.env.PORT || 2048;

// alla post.body tolkas som json
app.use(express.json())

app.use(express.static(__dirname + '/../build'));



app.use('/', express.static('public'))
app.use('/assets', express.static('hamsters'))


const hamstersroute = require('./routes/hamsters');
app.use('/api/hamsters', hamstersroute);

const chartsRoute = require('./routes/charts');
app.use('/api/charts', chartsRoute);

const gamesRoute = require('./routes/games');
app.use('/api/games', gamesRoute);

const statsRoute = require('./routes/stats');
app.use('/api/stats', statsRoute);




app.listen(serverPort, () => console.log('Server is listening on port ' + serverPort));