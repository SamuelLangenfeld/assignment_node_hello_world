var _=  require('lodash');
var chalk_var=  require('chalk');
var logs=require('./data/logs');
var logger=require('./lib/logger');

_.each(logs, log =>{
  logger(log.message, log.level);
});