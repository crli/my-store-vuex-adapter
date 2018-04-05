import {VuexStrategy} from '../../../src'
import {myStoreAdapter} from 'my-store-adapter'

describe('创建vuex适配器', function () {

    it('Store', async function () {

        //定义module，命名为user模块
        const module = {
            state(){
                return {
                    id: 0,
                    name: '',
                    sex: 0,
                    age: 0,
                }
            },
            namespace: 'user',
            mutation: {
                update(state, user){
                    state.id = user.id
                    state.name = user.name
                    state.sex = user.sex
                    state.age = user.age
                },
            }
        }

        //注册vuex策略
        myStoreAdapter.use(new VuexStrategy)

        const store = myStoreAdapter.create('vuex', module)

        // //使用promise判断vuex的修改是否好用
        // await new Promise(resolve => {
        //     const user = {
        //         name: 'xiaoming',
        //         sex: 1,
        //         age: 20,
        //     }

        //     store.subscribe(()=>{
        //         assert.deepEqual(store.state, user)
        //         resolve()
        //     })

        //     store.dispatch({type: 'update', payload: user})
        // })
    });

});

