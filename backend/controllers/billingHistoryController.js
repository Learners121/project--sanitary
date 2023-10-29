import services from '../services/index.js';

const getBillingHistoryController = (req, res) => {
  services.billingHistoryServices.getBillingHistoryService(
    'getBillingHistoryController',
    res
  );
};

const editBillingHistoryController = (req, res) => {
  services.billingHistoryServices.editBillingHistoryService(
    'editBillingHistoryController',
    res
  );
};

const deleteBillingHistoryController = (req, res) => {
  services.billingHistoryServices.deleteBillingHistoryService(
    'deleteBillingHistoryController',
    res
  );
};

export default {
  getBillingHistoryController,
  editBillingHistoryController,
  deleteBillingHistoryController,
};
