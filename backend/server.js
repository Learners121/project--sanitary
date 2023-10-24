import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/index.js";

const app = express();

app.use(cors({ origin: "*" }));

app.use(bodyParser.json())
app.use("/user", routes.userRoute);
app.use("/add-product", routes.addProductRoute); // shahnavaz
app.use("/view-product", routes.viewProductRoute); // juber
app.use("/billing-history", routes.billingHistoryRoute); // mofique
app.use("/pending-bills", routes.pendingBillsRoute); // uzair

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
