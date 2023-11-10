import services from "../services/index.js";

const addProductController = (req, res) => {
  let dataObj;
  const {
    category,
    classType,
    productName,
    productCode,
    productSize,
    productRate,
    productQuantity,
    productCompany,
  } = (dataObj = req.body);
  services.addProductServices.addProductService(dataObj, res);
};
export default { addProductController };
