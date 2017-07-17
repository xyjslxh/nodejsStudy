var bValue;
var o = {};
Object.defineProperty(o, 'b', {
    get: function() {
        return bValue;
    },
    set: function(newValue) {
        bValue = newValue;
    },
    enumerable: true,
    configurable: true
});
o.b = 38;
console.log(Object.getOwnPropertyDescriptor(index, 'bValue'));

// delete bValue;
// bValue = 40;


function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({val:temperature});
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
console.log(arc);
delete arc.getArchive; // [{ val: 11 }, { val: 13 }]
console.log(arc);
// arc.getArchive().forEach( function(element, index) {
// 	console.log(element);
// });