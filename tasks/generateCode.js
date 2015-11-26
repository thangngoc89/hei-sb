var Parse = require('parse/node');

Parse.initialize("wUyaZGM0qPNvr2DvKOgGTJSPXa1GWcHV3v3otEiX", "UuxpC6qz6NeU8pauVnzZ7gp9mViPMR3UeUx9K4Fd");
var CodeObject = Parse.Object.extend("Code");

var codeList = [];
for(var i = 0; i < 100; i++) {
  var code = new CodeObject();
  code.set('isValid', true);

  codeList.push(code);
}

Parse.Object.saveAll(codeList, {
  success: function(objs) {
    console.log('done')
  },
  error: function(objs) {
    console.error(objs)
  }
})