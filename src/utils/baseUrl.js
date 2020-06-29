export function baseUrl() {
  console.log(process.env.NODE_ENV)
  return process.env.NODE_ENV == 'development'? '/api/' : 'https://ysxs-patient.beta.microzan.com.cn/api/'
}

export const loadStyle = url => {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
};