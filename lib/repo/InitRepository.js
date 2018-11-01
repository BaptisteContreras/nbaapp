/**
 * Insert into the database the players (get from the NBA's api)
 * @param {JSON} datas 
 * @returns boolean
 */
var initPlayers = function(datas){

}

/**
 * Insert into the database the teams (get from the NBA's api)
 * @param {JSON} datas 
 * @returns boolean
 */
var initTeams = function(datas){
    
}

/**
 * Initialize the database for the first time server launch
 * @param {JSON} teams 
 * @param {JSON} players 
 * @returns boolean
 */
var initFirst = function(teams, players){
    return initPlayers(players) && initTeams(teams);
}

/**
 * Change a value in a JSON config file (by default status.conf)
 * @param {String} where 
 * @param {String} what 
 * @param {String} file 
 * @returns boolean
 */
var updateConf = function(where, what,file="config/status.json"){

}
