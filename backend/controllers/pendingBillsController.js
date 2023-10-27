import services from "../services/index.js"

const pendingBillsController = ( req,resp )=>{
  
   services.pendingBillServices.pendingBillService
   resp.send('pendingBillController');

};

export default { pendingBillsController}