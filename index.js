const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 9000; 

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//HOMEPAGE
app.get('/', (req, res) => {
    res.send('This is the homepage of the Software\'s Job Site');
});
  
//new company details page
companyRouter.post('/', (req, res) =>{
    res.send(`WILL CREATE company: ${req.body.company} into the database`);
});

//update a company
companyRouter.put('/:companyId', (req,res) =>{
    res.send(`WILL UPDATE company: ${req.body.name} into the database`);
});

//Delete a company
companyRouter.delete('/:companyId', (req, res) => {
    res.send(`This will delete the company: ${req.params.companyId}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

