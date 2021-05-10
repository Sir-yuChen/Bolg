import axios from 'axios'
import servicePath from '../config/apiUrl'


export const getTypeList = async ()=>{
   return await  axios(servicePath.getArticleTypeList).then(res =>res)
}  