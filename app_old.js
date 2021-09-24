const http = require ('http');

http.createServer((req, res)=>{

    // res.setHeader('Content-Disposition','attachment: filename=lista.csv')
    // res.writeHead(200,{ 'Content-Type': 'application/csv'});
    
    //res.write('id, nombre\n');
    // res.write('1,  Paola\n');
    // res.write('2,  Freyja');
    // res.write('3,  Mayushi');
    // res.write('4,  Frijolito');

    res.write('Hola mundo');
    res.end();
})
.listen(8080);

console.log('escuchando en el puerto: 8080')