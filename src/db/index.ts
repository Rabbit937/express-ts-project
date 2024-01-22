import mysql from 'mysql2/promise'
import config from '../config'

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})


// 测试连接
pool.getConnection().then(() => {
    console.log('connect is success')
});

export default pool;