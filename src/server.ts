import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
// eslint-disable-next-line import/no-unresolved
import swaggerFile from "./swagger.json";
import "./database";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
app.listen(3333, () => console.log("Server is running!"));
