const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/wtf', (err, db) =>{
    if(err)
        return console.log(err);

    // db.collection('users').insertOne({
    //     name: 'mike',
    //     age: 25,
    //     location: 'New York'
    // }, (err, result) =>{
    //     if(err)
    //         return console.log(err);
    //
    //     console.log(result.ops);
    // });
    //
    // db.close();

    db.collection('users').find().toArray().then((doc) =>{
        console.log(doc)
    }, (err) =>{
        console.log(err);
    });

    db.close();
})