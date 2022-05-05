import { callFetch } from "../utils/CallFetch";

export  async function getProductsDetail(line,product,locale){
    try {
        const params ={
            method:"GET",
            headers:{
                "content-type":'application/json',
                "locale":locale
            }
        }
        const res = await callFetch(`${process.env.BACK_API}/products/${line}/${product}`,params);
        return res?res:null
    } catch (error) {
        return null
    }
}

//*********************************Event************************************/

export  async function getEventByProductAndLine(line,product,page=1,locale){
    try {
        const params ={
            method:"GET",
            headers:{
                "content-type":'application/json',
                "locale":locale
            }
        }
        const res = await callFetch(`${process.env.BACK_API}/products/events/${line}/${product}?page=${page}`,params);
        return res?res:null
    } catch (error) {
        return null
    }
}
export  async function getEventByProductAndLineDetail(line,product,event,locale){
    try {
        const params ={
            method:"GET",
            headers:{
                "content-type":'application/json',
                "locale":locale
            }
        }
        const res = await callFetch(`${process.env.BACK_API}/products/events/${line}/${product}/${event}`,params);
        return res?res:null
    } catch (error) {
        return null
    }
}

//*********************************Videos************************************/

export  async function getVideosByProductAndLine(line,product,locale){
    try {
        const params ={
            method:"GET",
            headers:{
                "content-type":'application/json',
                "locale":locale
            }
        }
        const res = await callFetch(`${process.env.BACK_API}/products/videos/${line}/${product}?`,params);
        return res?res:null
    } catch (error) {
        return null
    }
}