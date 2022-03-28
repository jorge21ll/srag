import express from "express";

import { equipmentsRoutes } from "./routes/equipments.routes";
import { objectiveRoutes } from "./routes/objectives.routes";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/equipments", equipmentsRoutes);
app.use("/users", usersRoutes);
app.use("/objectives", objectiveRoutes);
app.listen(3333, () => console.log("Server is running!"));
