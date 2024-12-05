const express = require('express');
const cors = require('cors');
const formRoutes = require('./src/routes/formRoutes');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());


app.use('/api/form', formRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
