export interface PropsInterface {
    /**
     * 默认是否展开全部
     */
    defaultExpendAll?:boolean

    [x: string]: any
}

export class Props implements PropsInterface {
    defaultExpendAll=false
}

export interface StateInterface {

}

export class State implements StateInterface {

}