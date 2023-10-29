const getData = async (conn, tableName, fieldsName) => {
  try {
    const [rows] = await conn.execute(
      `SELECT ${fieldsName.join(",") || "*"} FROM ${tableName}`
    );
    return rows;
  } catch (err) {
    throw new Error(err.sqlMessage);
  }
};

const insertData = async (conn, tableName, fieldsName, data) => {
  try {
    switch (tableName) {
      case "Category":
        const queryCategory = `INSERT INTO ${tableName} (${fieldsName.join(
          ","
        )}) VALUES(?)`;
        const [categoryTableDetails] = await conn.execute(queryCategory, [
          data,
        ]);
        break;
      case "Product_details":
        const queryProductDetails = `INSERT INTO ${tableName} (${fieldsName.join(
          ","
        )}) VALUES(?,?,?,?,?,?)`;
        const {
          productName,
          productCode,
          productSize,
          productQuantity,
          productRate,
          productCompany,
        } = data;
        const [productTableDetails] = await conn.execute(queryProductDetails, [
          productName,
          productCode,
          productSize,
          productQuantity,
          productRate,
          productCompany,
        ]);
        break;
      case "class":
        const queryClass = `INSERT INTO ${tableName} (${fieldsName.join(
          ","
        )}) VALUES(?)`;
        const [classTableDetails] = await conn.execute(queryClass, [data]);
        break;
      default:
        throw new Error(`Invalid Table`);
    }
  } catch (err) {
    throw new Error(err.sqlMessage);
  } finally {
    console.log(`Inside Util Layer`);
  }
};

export { getData, insertData };
