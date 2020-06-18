const express = require('express')
const cors = require('cors')
const app = express();
const serverPort = process.env.PORT || 2048;
const path = require('path');

// alla post.body tolkas som json
app.use(express.json())
app.use(cors())

app.use(express.static(__dirname + '/../build'));
app.use('/assets', express.static(__dirname + '/public/hamsters'))


app.use('/', express.static('public'))
app.use('/assets', express.static('hamsters'))

const battleRoute = require('./routes/battle');
app.use('/api/battle', battleRoute);

const hamstersroute = require('./routes/hamsters');
app.use('/api/hamsters', hamstersroute);

const chartsRoute = require('./routes/charts');
app.use('/api/charts', chartsRoute);

const gamesRoute = require('./routes/games');
app.use('/api/games', gamesRoute);

const statsRoute = require('./routes/stats');
app.use('/api/stats', statsRoute);


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.listen(serverPort, () => console.log('Server is listening on port ' + serverPort));