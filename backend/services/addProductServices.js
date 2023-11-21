import openConnection from "../database/connection.js";
import { getData, insertData } from "../util/globalUtil.js";

const addProductService = async (data, res) => {
  try {
    const conn = await openConnection();
    const fieldsName = {
      Category: ["name"],
      Product_details: [
        "Catogary_id",
        "class_type",
        "Product_name",
        "Product_code",
        "Product_size",
        "Product_qty",
        "Product_rate",
        "Product_company_name",
      ],
      class: ["class_type"],
    };
    const categoryTable = await insertData(
      conn,
      "Category",
      fieldsName.Category,
      data.category
    );
    const productTable = await insertData(
      conn,
      "Product_details",
      fieldsName.Product_details,
      data
    );

    const classTable = await insertData(
      conn,
      "class",
      fieldsName.class,
      data.classType
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  } finally {
    console.log("inside layer");
  }
};

export default { addProductService };
