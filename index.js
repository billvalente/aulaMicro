const express = require("express");
const servidor = express();


servidor.get("/:gabriel", (req, res) => {
    const{gabriel} = req.params
    res.status(200).json({
        mensagem: `Seja Bem vindo ${gabriel}!´
      
  
    })
  });


servidor.listen(3028, () => {
  console.log("Servidor on");
});
