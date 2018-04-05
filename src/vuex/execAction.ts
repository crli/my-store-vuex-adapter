// import {createVuexStateProxy} from './getVuexDataProxy'
import {Mutation} from 'my-store-adapter'

/**
 * 执行action
 * @export
 * @template T 
 * @param {T} state                 state
 * @param {object} action           action
 * @param {Mutation<T>} mutation    处理该action的mutation
 * @returns 
 */
export function execAction<T extends object>(state: T, action: object, mutation: Mutation<T>){
}