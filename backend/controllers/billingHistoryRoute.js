import services from "../services/index.js"

const billingHistoryRoute = (req,resp)=>{
 
    services.billingHistoryServices.billingHistoryService
    
  resp.send('billingHistoryRoute') 
   
}

export default {billingHistoryRoute}