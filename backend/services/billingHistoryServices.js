import openConnection from '../database/connection.js';
import { getData } from '../util/globalUtil.js';

const getBillingHistoryService = (data, resp) => {
  try {
    res.status(200).send(reqData);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  } finally {
    console.log('inside layer');
  }
};

const editBillingHistoryService = (data, resp) => {
  try {
    res.status(200).send(reqData);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  } finally {
    console.log('inside layer');
  }
};

const deleteBillingHistoryService = (data, resp) => {
  try {
    res.status(200).send(reqData);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  } finally {
    console.log('inside layer');
  }
};

export default {
  getBillingHistoryService,
  editBillingHistoryService,
  deleteBillingHistoryService,
};
