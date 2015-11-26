var Parse = require('parse/node');
Parse.initialize("wUyaZGM0qPNvr2DvKOgGTJSPXa1GWcHV3v3otEiX", "UuxpC6qz6NeU8pauVnzZ7gp9mViPMR3UeUx9K4Fd");
var WordObject = Parse.Object.extend("Word");

var rl = require('readline').createInterface({
  input: require('fs').createReadStream(__dirname + '/data/wordlist-sl.csv')
});

var processLine = function(line) {
  var parts = line.split(',');

  var word = parts[0];
  var sheets = [];
  for(var i = 1; i <= 5; i++){
    sheets.push(parts[i]);
  }

  return {
    word: word,
    sheets: sheets
  }
}

var wordList = [];

// Read file line by line and save to Parse
rl.on('line', function (line) {
  var word = processLine(line);
  var object = new WordObject();

  object.set("word", word.word);
  object.set("sheets", word.sheets);

  wordList.push(object);
}).on('close', function() {
  Parse.Object.saveAll(wordList, {
    success: function(objs) {
      console.log(objs);
    },
    error: function(error) {
      console.log(error);
    }
  });
});

