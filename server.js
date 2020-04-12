const express = require('express');
const port = 3000;
const fileUpload = require('express-fileupload');
var parser = require("body-parser");
const app = express();

app.use(fileUpload());
app.use(parser());
app.use(express.static(__dirname + '/public/'));


app.post("/procesarDatos", function (req,res) {

	var usuario = req.body.nombre;
	console.log(usuario);
	var email = req.body.email;
	console.log(email);

	let EDFile = req.files.file
    EDFile.mv(`./img/${EDFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })
        return res.status(200).send("Gracias por tu donacion")
    });

	
});
app.get("/procesarDatos", function (req,res) {

	
});

app.listen(port, () => console.log(`Server listen on port: ${port}`));