import express from "express";
// import React from "react";
// import { renderToString } from "react-dom/server";

const app = express();

app.use(express.static('public'));
app.listen(3000, () => {
  console.log("Server is running in port 3000");
});

app.get("/", (req, resp) => {
  console.log("iniital page is rendering");
  const html = `
        <html>
        <head>
            <title>SSR</title>
        </head>
            <body>
            <p>this is base html</p>
            <div id="root"></div>
            </body>
            <script src="/client-build.js"></script>
        </html>
    `;
  resp.send(html);
});
