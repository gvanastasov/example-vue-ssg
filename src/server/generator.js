import ejs from 'ejs';
import path from 'path'
import fs from 'fs';
import { fileURLToPath } from 'url';

import { renderToString } from 'vue/server-renderer';
import { createApp } from '../client/app.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = createApp();

const src = path.join(__dirname, "./index.ejs");
const dist = path.join(__dirname, "../../dist/public");

renderToString(app).then((html) => {
    ejs.renderFile(src, { html }).then(str => {
        fs.writeFile(path.join(dist, 'index.html'), str, err => {
            if (err) {
                console.log(err);
            }
        });
    })
})

