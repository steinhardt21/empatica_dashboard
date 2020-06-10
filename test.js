const { db } = require("./pgAdaptor");

db.one('select * from download')
    .then(res => {
        console.log(res);
    });