const express = require('express');
const Router = require('./Router');
const server = express();
server.use(express.json());
const port = 6000;
server.use('/api/v1',Router)


server.listen(port, () => {console.log(`Server is running at Port ${port}`);
})

