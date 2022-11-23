const sqlite3 = require('sqlite3').verbose();
const path = require('path');
var db = new sqlite3.Database(path.join(__dirname, 'mission.db'), (err)=>{
    if(err) return console.error(err.message);
});

db.run("CREATE TABLE IF NOT EXISTS mission(id INTEGER PRIMARY KEY, namaMisi, geoJSON)", (err)=>{
    if(err) return console.error(err.message);
})

db.all("SELECT * FROM mission", (err, rows)=>{
    if(err) return console.error(err.message);
    console.log(rows);
})

module.exports = db;