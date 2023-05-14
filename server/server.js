import express from 'express';
import mysql2 from 'mysql2';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
})

app.get("/", (req, res) => {
    res.json('Hello World!');
})

app.get("/fonts",(req, res) => {
    const q = "SELECT * FROM fonts";
    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.post("/fonts", (req, res) => {
    const q = "INSERT INTO fonts (`id`, `family`, `category`, `variants`, `subsets`, `version`, `lastModified`, `kind`, `files`) VALUES (?)";

    const variants = JSON.stringify(req.body.variants);
    const subsets = JSON.stringify(req.body.subsets);
    const files = JSON.stringify(req.body.files);
    const values = [req.body.id, req.body.family, req.body.category, variants, subsets, req.body.version, req.body.lastModified, req.body.kind, files];
    db.query(q, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json("Font added successfully");
    })
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})