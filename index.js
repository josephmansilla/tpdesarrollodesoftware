import bodyParser from "body-parser";
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { readFileSync } from 'fs'
import { parse } from 'yaml'
import { z } from "zod";

const app = express();
const port = 20000;
const spec = parse(readFileSync("./docs.yaml", "utf-8"));
const PATH_MEDICAL_V1 = "/v1/medical";

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));

app.get("/healthCheck", (req, res) => {
    res.status(200).json({mensaje:"Todo marcha bien!"})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});