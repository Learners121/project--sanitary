import openConnection from "../database/connection.js";
import { checkData, getData, insertData } from "../util/globalUtil.js";

const addProductService = async (data, res) => {
  const {
    categoryName,
    classType,
    productCode,
    productCompany,
    productName,
    productQty,
    productRate,
    productSize,
  } = data;
  let conn = null;
  try {
    conn = await openConnection();
    let sql = `SELECT Category_id FROM Category WHERE Name = "${categoryName}"`;
    let categoryId = await checkData(conn, sql);

    sql = `SELECT class_id FROM class WHERE class_type = "${classType}"`;
    let classId = await checkData(conn, sql);
    console.log(categoryId, classId);

    if (categoryId === null) {
      sql = `INSERT INTO Category (Name) VALUES ("${categoryName}")`;
      categoryId = await insertData(conn, sql);
    } else {
      categoryId = categoryId.Category_id;
    }

    if (categoryId === null) {
      sql = `INSERT INTO class (class_type) VALUES("${classType}")`;
      classId = await insertData(conn, sql);
    } else {
      classId = classId.class_id;
    }

    sql = `INSERT INTO Product_details (
      Category_id,
      Class_id,
      Product_name,
      Product_code,
      Product_size,
      Product_qty,
      Product_rate,
      Product_company_name
      ) VALUES (
        "${categoryId}",
        "${classId}",
        "${productName}",
        "${productCode}",
        "${productSize}",
        "${productQty}",
        "${productRate}",
        "${productCompany}"
      )`;
    await insertData(conn, sql);
    res.status(201).send({ data: null, message: "Data Inserted Successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ data: null, message: "Product Already Exist" });
    if (conn !== null) {
      conn.close();
    }
  } finally {
    console.log("inside layer");
  }
};

export default { addProductService };
