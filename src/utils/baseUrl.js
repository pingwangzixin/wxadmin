export function baseUrl() {
  console.log(process.env.NODE_ENV)
  return process.env.NODE_ENV == 'development'? '/api/' : 'https://ysxs-patient.beta.microzan.com.cn/api/'
}