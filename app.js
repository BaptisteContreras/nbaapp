let app = require('express')()

const axios = require('axios');
axios.defaults.baseURL = 'http://data.nba.net/';

app.set('view engine', 'ejs')


app.get('/', (request, response) => {
    axios.get('10s/prod/v1/2018/players.json')
        .then(function (resp) {
            // handle success
            console.log(resp.data);
            response.render('index', {r : resp.data})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

})

app.get('/a', (request, response) => {
    axios.get('/stats/playerdashboardbyyearoveryear?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Usage&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=2544&PlusMinus=N&Rank=N&Season=2018-19&SeasonSegment=&SeasonType=Regular Season&ShotClockRange=&Split=yoy&VsConference=&VsDivision=')
        .then(function (resp) {
            // handle success
            console.log("fine")
            console.log(resp.data);
            //response.render('index', {r : resp.data})
        })
        .catch(function (error) {
            // handle error
            console.log("ERRRROR")
            console.log(error);
        })
        .then(function () {
            // always executed
        });

})
app.listen("8080")