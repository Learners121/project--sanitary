import { Router } from "express";

const addProductRoute = Router();
addProductRoute.post("/", (req, res) => {
  const {
    category,
    "class-type": classType,
    "product-name": productName,
    "product-code": productCode,
    "product-size": productSize,
    "product-rate": productRate,
    "product-quantity": productQnt,
    "product-company": productCompany,
  } = req.body;
  console.log(category, classType);
});

export default addProductRoute;
