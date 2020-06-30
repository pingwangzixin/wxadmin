const state = {
  userId: '',
};
var copyState = deepClone(state); // 拷贝state对象
function deepClone(obj) {
	var newObj = obj instanceof Array ? [] : {}
	for (var i in obj) {
		newObj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
	}
	return newObj
};
const mutations = {
  getUserId(state, data) {
    state.userId = data;
  },
};
const actions = {
  getUserId(context, data) {
    context.commit('getUserId', data);
  },
  
};
export default {
  state,
  mutations,
  actions,

};
