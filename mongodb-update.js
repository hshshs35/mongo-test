const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/wtf', (err, db) =>{
    if(err)
        return console.log(err);

    db.collection('users').findOneAndUpdate({_id: ObjectId("5a13bb225d2cf303f9811f68")},
        {$set:{name: 'huangsha'},
        $inc:{age: 1}},
        {returnOriginal: false},
        ).then((result)=>{
        console.log(JSON.stringify(result, undefined, 2));
    });

    db.close();
});