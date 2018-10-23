import Axios from "axios";
import { BASE_URL } from './../constants/config';


export const apiCall = (endPoint, method = 'GET', body) => {
    return Axios({
        method: method,
        url: `${BASE_URL}${endPoint}`,
        data: body
    }).catch(err => console.log(err))
}

// export const SignInService = async data => {
//     console.log({
//         data
//     })
//     return new Promise(async resolve => {
//         try {
//             let result = await Axios.post('http://localhost:3000/nguoi-dung/dang-nhap', data);
//             return resolve({
//                 error: false,
//                 data: result
//             })
//         } catch (error) {
//             return resolve({
//                 error: true,
//                 message: error.message
//             })
//         }
//     })
// }