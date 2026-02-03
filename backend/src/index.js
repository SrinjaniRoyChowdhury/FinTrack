import express from "express"

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.json({message:"Setup Sucess"}));

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));