import {StoreModule, Mutation, StrategyTemplate} from 'my-store-adapter'
import {execAction} from './execAction'

/**
 * @file 适配器的策略模板，定义处理数据的处理策略
 */
export class VuexStrategy implements StrategyTemplate {
     /**
     * 策略的名称，
     * @type {string}
     * @memberof StrategyTemplate
     */
    name = 'vuex'

    /**
     * 创建
     * @param {any} IStoreModule 
     * @returns {*} 
     * @memberof StrategyTemplate
     */
    creator<T extends object>(module: StoreModule<T>): any{
        return (state: T = module.state(), action: object & {type: string, payload: any}) => {
            if(!action){
                return state
            } else {
                if(module.mutation[action.type]){
                    return execAction(state, action['payload'], module.mutation[action.type].bind(module))
                } else {
                    return state
                }
            }
        }
    }

    /**
     * use的回调
     * @param {*} options 
     * @returns {StrategyTemplate} 
     * @memberof StrategyTemplate
     */
    onUse(options: any): StrategyTemplate{
        return this
    }
}