import axios from "axios"
import { PaymentData } from "viewmodel/paymentdata.viewmodel";

export const getpayments = async (url,payload) => {
    try{
        const responce = await axios.post(url,payload);
        return new PaymentData(responce.data?.data)
    }
    catch(error){
        return error
    }
} 