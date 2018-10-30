import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={
    count:1,
    list:[],
}

var mutations={
    increment () {
      // 变更状态
      state.count++
    },
    addlist(state,data){
      state.list=data;
    }
  }

  var getters={
    computedCount(){
      return state.count*2
    }
  }

  var actions={
    mutationsCount(context){
      context.commit('increment')
    }
  }

  const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
  })

  export default store;

  