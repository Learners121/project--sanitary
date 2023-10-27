import openConnection from '../database/connection.js';
import { getData } from '../util/globalUtil.js';

const addProductService = async (data, res) => {
  try {
    const conn = await openConnection();
    const fieldsName = [];
    const reqData = await getData(conn, 'Category', fieldsName);
    res.send(reqData);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  } finally {
    console.log('inside layer');
    conn.end();
  }
};

export default { addProductService };
