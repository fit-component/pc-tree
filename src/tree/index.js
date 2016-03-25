import React from 'react'
import classNames from 'classnames'

export default class Tree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {className, children, defaultExpendAll, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        let Children = React.Children.map(children, (item)=> {
            return React.cloneElement(item, {
                defaultExpendAll: defaultExpendAll
            })
        })

        return (
            <div {...others} className={classes}>
                {Children}
            </div>
        )
    }
}

Tree.defaultProps = {
    // @desc 默认是否展开全部
    defaultExpendAll: false
}