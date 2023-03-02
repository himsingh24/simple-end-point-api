const connection = require("../db/config");



module.exports = {
    getAllUsers: (req,res)=>{
        connection.query("SELECT * FROM users  ",(err,results)=>{
            if(err){
                console.log(err);
                res.status(500).send("error retrieving users");
            }
            else {
                res.json(results);
            }
        });
    },
    deleteUser:(req,res) => {
        const id = req.params.id;
        connection.query("DELETE FROM users WHERE id= ?",[id],(err,results)=>{
            if(err){
                console.log(err);
                res.status(500).send("error retrieving users");
            }
            else {
                res.json("user Deleted");
            }
        });

    }
};

