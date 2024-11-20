import express from 'express';
import fs from "fs";
import bodyparser from "body-parser";

const app = express();
app.use(bodyparser.json());

const readData = () =>{
    try{
        const data = fs.readFileSync("./bd.json");
    return JSON.parse(data);
    }catch (error){
        console.log(error);
    }
};

const writeData = (data) =>{
    try{
      fs.writeFileSync("./bd.json", JSON.stringify(data));
    }catch (error){
        console.log(error);
    }
}

app.get("/", (req, res) => {
    res.send("bienbenidos al parquiadero 29 ");
})

app.get("/vehiculos", (req, res) => {
const data = readData();
res.json(data.vehiculos); 
});

app.get("/vehiculos/:id", (req, res) => {
    const data = readData();
    const id = req.parseInt(req.params.id);
    const vehiculo =data.vehiculo.find((vehiculo) => vehiculo.id === id);
});

app.post("/vehiculo", (req, res ) => {
    const data = readData();
    const body = req.body;
    const newvehiculo ={
        id: data.vehiculo.length + 1,
        ...body,
    };
     data.vehiculo.push(newvehiculo);
     writeData(data);
     res.json(newvehiculo)
});

app.listen(3000, () => {
    console.log('server listening on port 3000');
});