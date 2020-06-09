const express = require('express');
const app = express();
const router = express.Router();

const path = `${__dirname}/views/`;
const port = 8080;

router.use(function (req, res, next){
 console.log(`/${req.method}`);
 next();
})

router.get('/', function(req, res){
 res.sendFile(`${path}index.html`);
})

router.get('/sharks', function(req, res){
 res.sendFile(`${path}sharks.html`);
})

// mount static assets and router middleware 
app.use(express.static(path));
app.use('/', router);

app.listen(port, () => {
 console.log(`Live on port ${port}!`)
})
