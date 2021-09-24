require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express();
const port=process.env.PORT;




//renderizar vistas sencillas
//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
 
//midleware funcion que se ejecuta antes de otra cosa
//servir contenido extatico

app.use(express.static('public'));

// app.get('/',  (req, res)=> {
//     res.render('home',{
//         nombre:'Paola',
//         titulo:'curso node'
//     });
//   })
 

// app.get('/generic', (req, res) =>{
//     res.render('generic',{
//         nombre:'Paola',
//         titulo:'curso node'
//     })
//   })

//   app.get('/elements',  (req, res)=> {
//     res.render('elements',{
//         nombre:'Paola',
//         titulo:'curso node'
//     })
//   })

    app.get('*',(req,res)=>{
        res.sendFile(__dirname+'/public/index.html')
    })


app.listen(port);