import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import http from "http";

const port = process.env.PORT || "8080";
const app = express();

app.use(cors({ origin: '*' }));

// both body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", routes.userRoute);
app.use("/add-product", routes.addProductRoute);
app.use("/view-product", routes.viewProductRoute);
app.use("/billing-history", routes.billingHistoryRoute);
app.use("/pending-bills", routes.pendingBillsRoute);

const server = http.createServer(app);

server.listen(port);
server.on("listening", () => {
  console.log(`http://localhost:${port}`);
});
server.on("error", (err) => {
  console.log(err);
});
