const express = require('express')
const {MongoClient, ObjectID } = require('mongodb')
const bodyParser= require('body-parser')
const assert =require('assert')

const app=express()

app.use(bodyParser.json());

const mongo_url="mongodb://localhost:27017"
const database="ProjectDatabase"

MongoClient.connect(mongo_url,(err,client)=>{
	assert.equal(null,err,'can not connect to mongo db')
    const db=client.db(database)


    app.post('/add_enseignant',(req,res)=>{
		let new_enseignant=req.body

		db.collection('Enseignant').insertOne({...new_enseignant},(err,data)=>{
			if(err) {
				res.send('can not add new ensignant')
			}
			else{
				res.send('ensignant added')
			}
		})
    })
    
    app.post('/add_etudiant',(req,res)=>{
		let new_etudiant=req.body

		db.collection('Etudiant').insertOne({...new_etudiant},(err,data)=>{
			if(err) {
				res.send('can not add new etudiant')
			}
			else{
				res.send('etudiant added')
			}
		})
    })

    app.post('/add_examen',(req,res)=>{
		let new_examen=req.body

		db.collection('Examen').insertOne({...new_examen},(err,data)=>{
			if(err) {
				res.send('can not add new examen')
			}
			else{
				res.send('examen added')
			}
		})
    })
    
    app.get('/etudiants',(req,res)=>{
		db.collection('Etudiant').find().toArray((err,data)=>{
			if(err) {
				res.send('not found')
			}
			else{
				res.send(data)
			}
		})
	})
   
    app.get('/enseignants',(req,res)=>{
		db.collection('Enseignant').find().toArray((err,data)=>{
			if(err) {
				res.send('not found')
			}
			else{
				res.send(data)
			}
		})
    })





    


})

app.listen(3001,(err)=>{
	if(err) return console.log('erreur')

	else {
		console.log('server is running')
	}
 })