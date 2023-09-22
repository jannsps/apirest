import app from "./app.js";
import { PORT } from "./config.js";
import cors from 'cors'
app.listen(PORT)
console.log(`Servidor corriendo en puerto ${PORT}`);