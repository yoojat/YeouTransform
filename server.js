const express = require("express");
const next = require("next");

const dev = process.env.NODE !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const options = {
  root: __dirname + "/static/",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8"
  }
};

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/LogoBlue.png", (req, res) =>
      res.status(200).sendFile("/img/main/LogoBlue.png", options)
    );
    server.get("/robots.txt", (req, res) =>
      res.status(200).sendFile("robots.txt", options)
    );

    server.get("/branch/:id", (req, res) => {
      const actualPage = "/branch";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
