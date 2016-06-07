export interface PropsInterface {
    /**
     * 标题
     */
    title?: string

    /**
     * 是否展示子元素
     */
    showChildren?: boolean

    /**
     * 是否默认展开全部
     */
    defaultExpendAll?: boolean

    /**
     * 标题渲染
     */
    render?: () => void

    /**
     * 点击后的回调
     */
    onClick?: (title?: any) => void

    [x: string]: any
}

export class Props implements PropsInterface {
    title = ''
    showChildren = false
    defaultExpendAll = false
    render = () => {
    }
    onClick = () => {
    }
}

export interface StateInterface {
    /**
     * 是否显示children
     */
    showChildren?: boolean
}

export class State implements StateInterface {
    showChildren = false
}