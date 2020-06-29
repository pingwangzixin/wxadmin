import { baseUrl} from './baseUrl.js'
// export function intreface(){
// 	var interdata={
// 		getUserList:baseUrl() +'user/patientList', //获取用户列表接口
// 		getUserInfo:baseUrl() +'user/patientDetails'//获取用户详情接口
// 	}
	
// 	return interdata
// }

let intreface={
	getUserList:baseUrl() +'user/patientList', //获取用户列表接口
	getUserInfo:baseUrl() +'user/patientDetails'//获取用户详情接口
}
export default {intreface}//默认导出