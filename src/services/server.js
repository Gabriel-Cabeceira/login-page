const express = require('express');
const app = express();
const port = 8001;
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Solicitação recebida: ${req.method}, ${req.url}, ${req.ip}`);
    next();
})

const users = [
    {
        id: 1,
        name: 'Gabriel',
        email: 'gabriel@proton.com',
        password: 'Senha123'
    },
    {
        id: 2,
        name: 'Aline',
        email: 'aline@hotmail.com',
        password: 'Teste123'
    }
];

app.post('/users/login', (req, res) => {

    const { email, password } = req.body;

    const user = users.find((user) => user.email === email && user.password === password);

    if(user) {
        res.json(user);
    } else {
        res.status(401).json({ message: 'Usuário não encontrado'})
    }

    
});

app.listen(port, () => {
    console.log(`Servidor iniciado e rodando na porta ${port}`);
})