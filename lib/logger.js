//passed message and level, outputs colorized message

var chalk=require('chalk');


var logger=function(message, level){
  switch (level){
    case "info":
      info(message);
      break;
    case "warning":
      warning(message);
      break;
    case "error":
      error(message);
      break;
  }

  function info(message){
    message+=" logged at INFO level"
    console.log(chalk.blue(message));
  }
  function warning(message){
    message+=" logged at WARNING level"
    console.log(chalk.red(message));
  }
  function error(message){
    message+=" logged at ERROR level"
    console.log(chalk.yellow(message));
  }
}

module.exports=logger;