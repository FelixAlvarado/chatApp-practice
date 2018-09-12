const express = require('express');
const app = express();





app.listen(3000, () => console.log('listening on 3000'));

//using static files 
app.use(express.static('public'));
