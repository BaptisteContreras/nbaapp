let app = require('express')()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const axios = require('axios');
axios.defaults.baseURL = 'https://data.nba.net/';

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
    axios.get('https://stats.nba.com/stats/playerdashboardbyyearoveryear?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=2544&PlusMinus=N&Rank=N&Season=2018-19&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&Split=yoy&VsConference=&VsDivision=')
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
/*
app.get('/a', (request, response) => {
    axios.get('https://stats.nba.com/stats/playerdashboardbyyearoveryear?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=2544&PlusMinus=N&Rank=N&Season=2018-19&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&Split=yoy&VsConference=&VsDivision=')
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
*/
app.listen("8080")
/*
var h = new Headers({
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Origin",
    "Access-Control-Allow-Origin": "http://stats.nba.com",
    "Host": "stats.nba.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0",
    "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "Origin" : "http://stats.nba.com"
});

fetch("http://data.nba.net/10s/prod/v1/20181022/scoreboard.json", {
    method: "GET",
    headers : h
})
    .catch(() => {
        console.log("Fail zone");
    })
.then((res) => {
    if (res.ok) {
        console.log("YEEET");
        res.json().then((json) => {
                console.log(JSON.stringify(json, null, 2));
            });
        } else {
            console.log("error", res);
        }
    });
*/