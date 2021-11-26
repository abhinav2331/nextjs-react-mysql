const { createPool } = require('mysql');
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin@1234',
    port: 3306,
    database: 'meetupsdata'
});

pool.getConnection((err) => {
    if (err) throw err;
    console.log("DB Connected!");
});

const executeQuery = (query, arrParams) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arrParams, (err, data) => {
                if (err) {
                    console.log("error in execution");
                    reject(err);
                }
                resolve(data);
            })
        }
        catch (err) {
            console.log("Error in DB side");
            reject(err);
        }
    })
}

module.exports = { executeQuery };


