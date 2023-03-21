import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { routes } from "./routes";

const app = express();

app.use(helmet());

app.use(cors());

dotenv.config();

//Configurando cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

//Definindo json como padrão
app.use(express.json());

//Subindo servidor
app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server started on port:${process.env.PORT || 3000}`);
});


//Recebendo as rota da api
app.use("/api", routes);

export { app };
