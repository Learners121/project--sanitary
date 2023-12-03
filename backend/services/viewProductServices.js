import openConnection from "../database/connection.js";
import { getData } from "../util/globalUtil.js";

const viewProductService = async (data, res) => {
  const conn = await openConnection();
  try {
    const sql = `
    SELECT
    pd.Product_uuid,
    pd.Product_id,
    cat.Name AS Category_name,
    cls.class_type,
    pd.Product_name,
    pd.Product_code,
    pd.Product_size,
    pd.Product_rate,
    pd.Product_qty,
    pd.Product_company_name
FROM
    Product_details pd
JOIN
    Category cat ON pd.category_id = cat.category_id
JOIN
    class cls ON pd.class_id = cls.class_id;
    `;
    const result = await getData(conn, sql);
    if (result.length > 0) {
      res.send(result);
    } else {
      res.status(400).send({ data: null, message: `Product Doesn't Exist` });
    }
  } catch (error) {
    console.log(error);
  } finally {
    conn.close();
    console.log(`Finally Resolved`);
  }
};

export default { viewProductService };
