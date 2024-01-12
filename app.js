const express=require('express');
const app=express();
const port=4000;
const connection=require('mysql2');
const cors = require('cors');


app.use(cors());


const q =connection.createConnection({
    database:'Garagy',
    host:'localhost',
    password:'', 
    user:'root'
})


app.use(express.json())

app.post('/enterdata',(req,res,next)=>{
    const{name,email,password,phone}=req.body;
    q.execute(`insert into parkingman  (name,email,password,phone) values ('${name}','${email}','${password}' ,${phone} )`,(err,result)=>{
        res.json({message:"added sucessfully"});
    })
    
})

app.get('/getallparking',(req,res,next)=>{
    q.execute(`select * from parkingman`,(err,result)=>{
        if(err)
        {
            console.log('errorrrrrr occur');
        }
        else
        {
            res.send(result)
        }
    });
    
})

app.delete('/deleteparkman',(req,res,next)=>{
    const{id}=req.body;
    q.execute(`delete from parkingman where id=${id}`)
    res.send({message:"deleted succesfully"});
})

app.patch('/updatepark',(req,res,next)=>{
    const{id,name,email,phone}=req.body;
    q.execute(`update parkingman set name='${name}', email='${email}', phone=${phone} where id=${id} `)
    res.send({message:"updated succesfully"});
})

app.post('/addpark',(req,res,next)=>{
    const{city,address,area,parkid,hours,isEmpty}=req.body;
    q.execute(`insert into parking (city,address,area,parkid,hours,isEmpty) values ('${city}', '${address}','${area}',${parkid},${hours},${isEmpty})`,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.json({message:"added successfully"}); 
        }
    })
})

app.get('/getallfree',(req,res,next)=>{
    q.execute(`select * from parking`,(err,result)=>{
        res.send(result)
    })
})

app.get('/getpark',(req,res,next)=>{
    const{id}=req.body;
    q.execute(`select * from parking where id=${id}`,(err,result)=>{
        res.send(result);
    })
})

app.delete('/deletepark',(req,res,next)=>{
    const{id}=req.body;
    q.execute(`delete from parking where id=${id}`)
    res.send("deleted succesfully");
})

app.put('/updatepark',(req,res,next)=>{
    const{id,city,address,area,parkid,hours}=req.body;
    q.execute(`update parking set city='${city}', address='${address}', area='${area}', parkid=${parkid}, hours=${hours} where id=${id}`)
    res.send({message:"successfully"});
})

app.patch('/updateparkvalue',(req,res,next)=>{
    const{id,isEmpty}=req.body;
    q.execute(`update parking set isEmpty=${isEmpty} where id=${id}`)
    res.send({message:"updated successfully"});
})

app.post('/enterdetails',(req,res,next)=>{
    const{startdate,carid}=req.body;
    q.execute(`insert into customer (startdate,carid) values('${startdate}','${carid}')`);
    res.send({message:"added successfully"});
})

app.get('/getdetails',(req,res,next)=>{
    const{carId}=req.body;
    q.execute(`select startDate  price where carId=${carId} `,(result,err)=>{
        res.send(result);
    });
})
app.listen(port,()=>{
    console.log(`your port is working on port = ${port}`);
}) 



