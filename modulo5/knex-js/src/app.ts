import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Rodando ${address.address}:${address.port}`);
  } else {
    console.error(`Algo errado falha!.`);
  }
});

export default app;