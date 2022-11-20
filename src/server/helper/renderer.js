import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../../client/page/Home/Home";

export default () => {
  return `
    <html>
        <head>
    <title>SSR Practice</title>
        </head>
        <body>
        <div id="react-app">${renderToString(<Home />)}</div>
            <script src="bundle-client.js"></script>
        </body>
    </html>
  `;
};
