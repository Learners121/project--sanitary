import services from '../services/index.js';

const addProductController = (req, res) => {
  services.addProductServices.addProductService('from addPrdocutLayer', res);
};

export default { addProductController };
