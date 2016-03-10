import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class TreeNode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showChildren: this.props.defaultExpendAll || this.props.showChildren
        }
    }

    handleTitleClick() {
        this.setState({
            showChildren: !this.state.showChildren
        })
        this.props.onClick(this.props.title)
    }

    render() {
        const {className, children, defaultExpendAll, title, render, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        let childrenStyle = {
            'display': this.state.showChildren ? 'block' : null
        }

        let titleCaretClass = classNames({
            'fa': true,
            'caret-left': true,
            'fa-caret-right': !this.state.showChildren,
            'fa-caret-down': this.state.showChildren
        })

        let Children = null
        if (this.props) {
            Children = React.Children.map(children, (item)=> {
                if (item) {
                    return React.cloneElement(item, {
                        defaultExpendAll: defaultExpendAll
                    })
                }
            })
        }

        return (
            <div {...others} className={classes}>
                <div onClick={this.handleTitleClick.bind(this)}
                     className="title">
                    {React.Children.count(children) > 0 ?
                        <div className="title-caret">
                            <i className={titleCaretClass}/>
                        </div> : <div className="empty-caret"/>
                    }
                    {title || render()}
                </div>
                <div style={childrenStyle}
                     className="children">
                    {Children ? Children : null}
                </div>
            </div>
        )
    }
}

TreeNode.defaultProps = {
    title: '',
    showChildren: false,
    defaultExpendAll: false,
    render: ()=> {
    },
    onClick: (title)=> {
    }
}