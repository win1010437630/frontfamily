import {NUMADD,ADD,DES} from './actiontype'
export function add(e){
    return {
        type:ADD,
        item:e
    }
}
export function addnum(){
    return {
        type:NUMADD
    }
}

export function des(abc){
    return {
        type:DES,
        abc
    }
}

