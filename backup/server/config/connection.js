const mysql=require('mysql');
var db;

connectDatabase=()=>{
    if(!db){
        db=mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database:'fitness_life',
        });
       db.connect(function(err){
           if(!err){
              console.log("Database is connected");
           }else{
              console.log(err);
           }
       });

    }
  return db;
};

module.exports=connectDatabase();