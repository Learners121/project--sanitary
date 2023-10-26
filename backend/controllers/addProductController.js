import services from '../services/index.js';

const addProductController = (req, res) => {
  services.addProductServices.addProductService('hello', res);
};

export default { addProductController };
