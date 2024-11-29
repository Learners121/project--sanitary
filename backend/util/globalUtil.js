const getData = async (conn, sql) => {
  try {
    const [rows] = await conn.query(sql);
    return rows;
  } catch (err) {
    throw new Error(err.sqlMessage);
  }
};

const insertData = async (conn, sql) => {
  try {
    const [rows, fields] = await conn.query(sql);
    return rows.insertId;
  } catch (err) {
    console.log(err);
    throw new Error(err.sqlMessage);
  }
};

const checkData = async (conn, sql) => {
  try {
    let result = null;
    const data = await conn.query(sql);
    if(data[0].length > 0) {
      result = data[0][0]
    }
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export { getData, insertData, checkData };
