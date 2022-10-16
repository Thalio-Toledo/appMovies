import express from  'express';

const app = express();
app.use(express.json())



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


app.get('/filmes/:id',(req,res)=>{
    const index = buscaFilme(req.params.id);
    res.json(filmes[index])

})

app.post('/filmes',(req,res)=>{
    filmes.push(req.body)
    res.status(201).send('Filme cadastrado com sucesso')
})

app.put('/filmes/:id',(req,res)=>{
    const index = buscaFilme(req.params.id);
    filmes[index].titulo = req.body.titulo;
    res.send('Filme Atualizado com sucesso!')

})

app.delete('/livros/:id',(req,res)=>{
    let {id} = req.params;
    const index = buscaFilme(id);
    filmes.splice(index,1)
    res.send(`Filme ${id} removido com sucesso`)
})

function buscaFilme(id){
    return filmes.findIndex(livro =>  livro.id == id) //O método findIndex executa a função callback uma vez para cada elemento presente no array até encontrar um onde o callback retorna um valor verdadeiro. Se tal elemento for encontrado, findIndex imediatamente retorna o índice deste elemento.

}

export default app