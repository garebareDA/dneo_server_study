import { createApp, createRouter } from "https://servestjs.org/@/mod.ts";
import routes from "./routes/index.jsx"

const app = createApp();
app.route("/", routes.IndexRoutes());
app.listen({port: 8000});