var Service = require('./Service');

var getDataConntrollerfn = async (req, res) =>
{
    var book = await Service.getDataFromDBService();
    res.send({ "status": true, "data": book });
}

var createControllerFn = async (req, res) => 
{
    var status = await Service.createDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Książka została dodana" });
    } else {
        res.send({ "status": false, "message": "Wystąpił błąd przy dodawaniu książki" });
    }
}

var updateController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await Service.updateDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Książka została zaktualizowana"} );
     } else {
         res.send({ "status": false, "message": "Aktualizacja książki się nie powiodła" });
     }
}

var deleteController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await Service.removeDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Książka została usunięta"} );
     } else {
         res.send({ "status": false, "message": "Usunięcie książki nie powiodło się" });
     }
}

module.exports = { getDataConntrollerfn, createControllerFn, updateController,deleteController};