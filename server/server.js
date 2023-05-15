import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

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
    const qInsert = "INSERT INTO fonts (`id`, `family`, `category`, `variants`, `subsets`, `version`, `lastModified`, `kind`, `files`) VALUES (?)";

    const variants = JSON.stringify(req.body.variants);
    const subsets = JSON.stringify(req.body.subsets);
    const files = JSON.stringify(req.body.files);
    const values = [req.body.id, req.body.family, req.body.category, variants, subsets, req.body.version, req.body.lastModified, req.body.kind, files];
    
    const qSelect = "SELECT * FROM fonts WHERE id = ?";

    db.query(qInsert, [values], (err, result) => {
        if (err) return res.json(err);

        // Retrieve the inserted row using the insertId
        const insertedId = result.insertId;
        db.query(qSelect, [insertedId], (err, result) => {
            if (err) return res.json(err);
            console.log('result', result)
            return res.json(result[0]);
        });
    })
})

app.delete("/fonts/:id", (req, res) => {
    const q = "DELETE FROM fonts WHERE id = ?";
    db.query(q, [req.params.id], (err, result) => {
        if (err) return res.json(err);
        console.log('result', result)

        return res.json("Font deleted successfully");
    })
})

app.get("/templates",(req, res) => {
    const q = "SELECT * FROM templates";
    db.query(q, (err, result) => {
        if (err) return res.json(err);
        console.log('result', result)

        return res.json(result);
    })
})

app.post("/templates", (req, res) => {
    const q = "INSERT INTO templates (`id`, `author`, `code`, `compactibleBrowsers`, `name`, `date`, `madeWith`, `responsive`) VALUES (?)";

    const compactibleBrowsers = JSON.stringify(req.body.compactibleBrowsers);
    const madeWith = JSON.stringify(req.body.madeWith);
    const code = JSON.stringify(req.body.code);
    const values = [req.body.id, req.body.author, code, compactibleBrowsers, req.body.name, req.body.date, madeWith, req.body.responsive];

    const qSelect = "Select * FROM templates WHERE id = ?"

    db.query(q, [values], (err, result) => {
        if (err) return res.json(err);

        const insertedId = result.insertId
        db.query(qSelect, [insertedId], (err, result) => {
            if (err) return res.json(err)
        console.log('result', result)

        return res.json(result(0))
        })

        return res.json("Templates added successfully");
    })
})

app.delete("/templates/:id", (req, res) => {
    const q = "DELETE FROM templates WHERE id = ?";
    db.query(q, [req.params.id], (err, result) => {
        if (err) return res.json(err);
        console.log('result', result)

        return res.json("Template deleted successfully");
    })
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})