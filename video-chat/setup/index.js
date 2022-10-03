const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require('socket.io')(server,{
  cors:{
    origin:'*',
    methods:['GET','POST']
  }
})


const port = 5000 || process.env.PORT 

app.use(cors());
app.get('/',(req,res)=>{
  res.send('<h1>My server is running </h1>')
})

io.on('connection',(socket)=>{
  socket.emit('me',socket.id)

  socket.on('disconnect',()=> {
    socket.broadcast.emit('callEnded')
  })

  socket.on('callUser',({userToCall,signalData,from,name}) => {
    io.to(userToCall).emit('callUser',{signal:signalData,from:name})
  } )

  socket.on('answerCall',(data)=>{
    io.to(data.to).emit('callAccepted',data.signal)
  })
})

server.listen(port, () => console.log(`Server is running on port ${port}`));
