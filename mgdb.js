const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/wtf', (err, db) =>{
    if(err)
        return console.log(err);

    db.collection('users').deleteMany({name: 'huangsha'}, (result) =>{
        console.log(result);
    });

    db.collection('users').findOneAndDelete({_id: ObjectId("5a13bb282c21e303faac496e")}, (result) =>{
        console.log(JSON.stringify(result, undefined, 2));
    });

    db.close();
});