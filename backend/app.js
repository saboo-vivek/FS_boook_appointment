const express=require('express')
const bodyParser=require('body-parser')
const  sequelize=require('./db_config');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('views'))


const route=require('./route')
app.use(route)


async function initiate(){
        try{
            await sequelize.sync();
            app.listen(3000,()=>{
                console.log("Server started on port 3000");
            })
            
        }catch(err){
            console.log("error", err);
        }
    }
    initiate();