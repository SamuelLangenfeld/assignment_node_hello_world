var lodash_var=  require('lodash');
var chalk_var=  require('chalk');
console.log(chalk_var.blue("what up"));

var phonetic = ["alpha","bravo","charlie","delta","echo","foxtrot","golf","hotel","india","julliett","kilo","lima","mike","november","oscar","papa","quebec","romeo","sierra","tango","uniform","victor","whiskey","xray","yankee","zulu"];
lodash_var.each(phonetic, function(letter){
  console.log(letter);
})