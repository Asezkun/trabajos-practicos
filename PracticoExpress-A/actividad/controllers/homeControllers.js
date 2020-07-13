const fs = require("fs");
const db = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"));

const homeControllers = {
     index:(req,res)=>{
        res.write("BIENVENIDO A NUESTRO CENTRO DE SUCURSALES");
        res.write("\n\n")
        res.write("ESTAS SON NUESTRAS SUCURSALES\n")
        res.write("-----------------------------\n")
        db.forEach((element)=>{
            res.write(">>")
            res.write(" "+element.sucursal+"\n\n") 
        })
        res.write("-----------------------------\n")
        res.write("-----------------------------\n")
        res.end()
    },
};
module.exports = homeControllers;