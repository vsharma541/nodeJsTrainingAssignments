let exp = require('express');
let path = require('path');
let app = exp();
let fs = require('fs');

app.use(exp.json());

const PORT = Number(process.argv[2]);
const file = process.argv[3];

app.get('/book', (req, resp) => {
    try {
        let filePath = path.join('./bookstoRead', file);
        let content = fs.readFileSync(filePath, 'utf-8');
        content = content.replace(/(?:\\[rn]|[\r\n]+)+/g, "");
        content = JSON.parse(content);
        resp.status(200).json(content);
    } catch (error) {
        resp.status(422).json(error);
    }
})

app.listen(PORT, () => {console.log('server on 4000')});