import services from '../services/index.js';

const viewProducController = (req, res) => {
  services.viewProductServices.viewProductService('view product route', res);
};

export default { viewProducController };
