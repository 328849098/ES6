/**
 * Created by guohanshuang on 2017/7/12.
 */
//node：node 16.2promise.js
const fs=require('fs');

fs.readFile('2let.html',function (err,data) {
    var p1=new Promise(function (resolve,rejected) {
        if(err){
            rejected(err);
        }else{
            resolve(data);
        }
    });

    p1.then(function (value) {
        console.log(value.toString());
    },function (value) {
        console.log(value);
    });
});