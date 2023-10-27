const getData = async (conn, tableName, fieldsName) => {
  try {
    const [rows, fields] = await conn.execute(
      `SELECT ${fieldsName.join(',') || '*'} FROM ${tableName}`
    );
    return rows;
  } catch (err) {
    throw new Error(err.sqlMessage);
  } finally {
    conn.end();
  }
};

export { getData };