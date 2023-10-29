import services from '../services/index.js';

const pendingBillsController = (req, res) => {
  services.pendingBillServices.pendingBillService('pendingBillController');
};

export default { pendingBillsController };
