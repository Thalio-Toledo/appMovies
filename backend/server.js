import express from 'express';

const app = express()
const port = process.env.PORT || 3001


const filmes = [
    {id:1, Titulo: "Batman dark knight"},
    {id:2, Titulo: "Iron man"},
    {id:3, Titulo: "Avengers"}
]


app.get('/', (req,res)=>{
    res.status(200).send("App de Filmes")
})

app.get('/filmes',(req,res)=>{
    res.status(200).json(filmes)
})


app.listen(port,()=>{
    console.log(`O servidor está rodando em http://localhost:${port} `)
})
