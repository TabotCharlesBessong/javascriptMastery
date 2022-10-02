const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");


const port = 5000 || process.env.PORT 


app.use(cors());



server.listen(port, () => console.log(`Server is running on port ${port}`));
