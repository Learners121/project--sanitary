import services from '../services/index.js';

const billingHistoryController = (req, resp) => {
  services.billingHistoryServices.billingHistoryService;

  resp.send('billingHistoryRoute');
};

export default { billingHistoryController };
