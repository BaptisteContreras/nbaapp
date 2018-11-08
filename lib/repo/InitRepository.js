const editJsonFile = require("edit-json-file");
let status = editJsonFile("./config/status.json");
const axios = require('axios');
axios.defaults.baseURL = status.get("phpServer.url");


/**
 * Insert into the database the players (get from the NBA's api)
 * @param {JSON} datas 
 * @returns boolean
 */
var initPlayers = function(datas){
    // Check if the app has already been init
    if(status.get("init") === true){
        return false
    }

    // prepare the data
    console.log(datas)
   
}

/**
 * Insert into the database the teams (get from the NBA's api)
 * @param {JSON} datas 
 * @returns boolean
 */
var initTeams = function(datas){
    if(status.get("init") === true){
        return false
    }
}

/**
 * Initialize the database for the first time server launch
 * @param {JSON} teams 
 * @param {JSON} players 
 * @returns boolean
 */
var initFirst = function(teams, players){
    updateConf("init",false)
    res = initPlayers(players) && initTeams(teams);
    return res
}

/**
 * Change a value in a JSON config file (by default ./config/status.json)
 * @param {String} where 
 * @param {String} what 
 * @param {String} file 
 * @returns boolean
 */
var updateConf = function(where, what,path='./config/status.json'){
    let file = editJsonFile(path);
    file.set(where,what)
    file.save()
    console.log(file)
}

exports.initFirst = initFirst
exports.updateConf = updateConf
exports.initPlayers = initPlayers
exports.initTeams = initTeams