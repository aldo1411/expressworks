const express = require('express');
const path = require('path');
const app = express();

const portNumber = process.argv[2];
const staticSite = process.argv[3];

app.use(express.static(staticSite||path.join(__dirname, 'public')));

app.listen(portNumber);