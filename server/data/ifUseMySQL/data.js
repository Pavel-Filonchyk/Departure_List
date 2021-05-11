const mysql = require('mysql')  

const pool = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "database",
  password: "root"
})


const data = {}
data.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`Select * FROM list`, (err, results) => {
      if(err){
        return reject(err)
      }
      return resolve(results)
    })
  })
}

module.exports = data




