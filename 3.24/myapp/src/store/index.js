// 这个文件就是 记录vuex配置的文件

// 导入vue  和 vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const store = new Vuex.Store({
    // state 属性   相当于 vue => data
    // 定义普通属性
    state:{
        count:1,
        hello:'world',
        uname:''
    },
    // 定义方法
    mutations:{
        changecount(state){
            state.count = state.count + 10;
        },
        changehello(state){
            state.hello = 'hello vuex'
        },
        changeuname(state){
            state.uname = '黎明'
        }
    },
    actions:{
        // 也是方法
        actionsChangeUname(context){
            context.commit('changeuname');
        }

    },

    // 定义 计算属性
    getters:{
        getStateUname(){
            return '刘德华'
        }
    }
});

export default store;