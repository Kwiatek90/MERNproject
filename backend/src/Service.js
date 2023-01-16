var Model = require('./Model');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        Model.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createDBService = (details) => {


    return new Promise(function myFn(resolve, reject) {
 
        var modelData = new Model();
 
        modelData.tytul = details.tytul;
        modelData.opis = details.opis;
        modelData.url = details.url;

        modelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateDBService = (id,details) => {     
    console.log(details);
    return new Promise(function myFn(resolve, reject) {
        Model.findByIdAndUpdate(id,details, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
 
    });
 }

 module.exports.removeDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        Model.findByIdAndDelete(id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
 
 }