const diagram = require('./td');


// console.log(cimage);

function appendChild(c) {
    process.stdout.write(c);
}

function _to_txt(in_m) {
    
    for (y = 0; y < in_m.length; ++y) {
	for (x = 0; x < in_m[y].length; ++x) {
            var c = in_m[y][x] ? in_m[y][x].c : ' ';
            appendChild(c);
      }
	appendChild('\n');
    }
}
    

process.stdin.resume()
process.stdin.on('data', function(data) {
    var ast=diagram.parser.sequence_diagram(data);
    var cimage = diagram.html_render.to_cimage(ast);
    _to_txt(cimage);})

process.stdout.on('error', function(err) {
  if (err.code === 'EPIPE') return process.exit()
  process.emit('error', err)
})







