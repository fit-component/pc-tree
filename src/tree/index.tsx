import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Tree extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    render() {
        const {className, children, defaultExpendAll} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        let Children = React.Children.map(children, (item: any) => {
            return React.cloneElement(item, {
                defaultExpendAll: defaultExpendAll
            })
        })

        const _others = others(new module.Props(), this.props)

        return (
            <div {..._others} className={classes}>
                {Children}
            </div>
        )
    }
}