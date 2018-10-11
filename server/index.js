import express from 'express';
import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
//import Loadable from 'react-loadable';
//import { getBundles } from 'react-loadable/webpack';
//import pageTemplate from './pageTemplate';
import App from '../src/App';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../build')));
app.get('/*', (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }
    const context = {};
    const appResponse = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    htmlData = htmlData.replace(
      `<div id="root"></div>`,
      `<div id="root">${appResponse}</div>`
    );
    // inject the rendered app into our html and send it
    return res.send(htmlData);
  });
});

//Loadable.preloadAll().then(() => {
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}/`);
});
//});
