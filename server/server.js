var express = require('express');
var cors = require('cors');
var data = require('./database/database');
var cookieParser = require('cookie-parser');
var app = express();
app.use(express.json());
app.use(cors())
app.use(cookieParser());

//display semua data
app.get("/mission-data", (req,res)=>{
    data.all("SELECT * FROM mission ", (err, rows)=>{
        if(err) {return console.error(err.message)};
        res.json(rows)
    })
})
//display data berdasar id
app.get("/mission-data/:id", (req, res)=>{
    data.all("SELECT * FROM mission WHERE id = ?", [req.params.id], (err, rows)=>{
        if(rows[0]==null) return res.status(404).json("NOT FOUND");
        else{
            res.json(rows)
        }
    })
})

//menambah data
app.post("/mission-data", (req, res)=>{
    console.log(req.body)
    data.run("INSERT INTO mission(namaMisi, geoJSON) VALUES (?,?)", [req.body.namaMisi, req.body.geoJSON], (err)=>{
        if(err) res.status(500).json(err);
        res.status(200).json("add success");
    } )
})

//untuk delete data dari id tertentu
app.delete("/mission-data/:id", (req,res) => {
    data.all("SELECT id FROM mission WHERE id = ?", [req.params.id], (err, rows)=>{
        if(rows[0]==null) return res.status(404).json("DATA NOT FOUND :/");

        else{
            data.run("DELETE FROM mission WHERE id = ?", [req.params.id], (err)=>{
                if(err) res.status(404).json(err);
                res.status(200).json("delete success");
            })
        }
    })
})

//delete semua data
app.delete("/mission-data/", (req, res)=>{
    data.all("SELECT * FROM mission", (err, rows)=>{
        if(rows[0]==null) return res.status(404).json("NOT FOUND");
        else{
            data.run("DELETE FROM mission", (err)=>{
                if(err) return res.status(404).json("DATA NOT FOUND");
                res.status(200).json("delete success")
            })
        }
    })
})

//modify data by id


app.listen(3001, ()=>{
    console.log('Server up and running on http://localhost:3001 ...')
})

module.exports = app;