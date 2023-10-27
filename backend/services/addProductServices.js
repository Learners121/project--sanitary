import conn from '../database/connection.js';

const addProductService = async (data, res) => {
  try {
    console.log(conn);
    res.send(data);
  } catch (err) {
  }finally {
  }
};

export default { addProductService };
