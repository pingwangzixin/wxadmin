import { baseUrl} from './baseUrl.js'
export default {
	getUserList:baseUrl() +'user/patientList', //获取用户列表接口
	getUserInfo:baseUrl() +'user/patientDetails'//get获取用户详情接口
}