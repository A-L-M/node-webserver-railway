const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    //Para devolver texto modificando el header
    // res.writeHead(200, { "Content-Type": "text/plain" });

    //Para devolver json
    // res.writeHead(200, { "Content-Type": "application/json" });

    //Para devolver un csv
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });

    const persona = {
      id: 1,
      nombre: "Fernando",
    };

    //Devolviendo un json en la respuesta
    // res.write(JSON.stringify(persona));

    //Devolviendo un csv en la respuesta
    res.write("id, nombre");
    res.write("1, Fernando");
    res.write("2, Maria");
    res.write("3, Juan");

    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
