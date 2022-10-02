const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");



app.use(cors());



server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
