const mysql=require("mysql2");


const connection= mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"users",
    }
);


connection.connect((err) => {
    if (err){
        console.log(err);
    }else{
        console.log("connected to databse");
    }
});


module.exports = connection;//for multiple thinggs(a,b,c)