import services from '../services/index.js';

const getBillingHistoryController = (req, res) => {
  services.billingHistoryServices.billingHistoryService(
    'getBillingHistoryController'
  );
};

const editBillingHistoryController = (req, res) => {
  services.billingHistoryServices.billingHistoryService(
    'editBillingHistoryController'
  );
};

const deleteBillingHistoryController = (req, res) => {
  services.billingHistoryServices.billingHistoryService(
    'deleteBillingHistoryController'
  );
};

export default {
  getBillingHistoryController,
  editBillingHistoryController,
  deleteBillingHistoryController,
};
