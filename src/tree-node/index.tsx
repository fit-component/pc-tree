import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import '../font/index.scss'
import './index.scss'

export * from './module'

export default class TreeNode extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    componentWillMount() {
        this.setState({
            showChildren: this.props.defaultExpendAll || this.props.showChildren
        })
    }

    handleContainerClick(event: Event) {
        this.props.onClick(event)
        if (!this.props.toggleByArrow) {
            this.setState({
                showChildren: !this.state.showChildren
            })
            this.props.onToggleShow(event)
        }
    }

    handleArrowClick(event: Event) {
        if (this.props.toggleByArrow) {
            this.setState({
                showChildren: !this.state.showChildren
            })
            this.props.onToggleShow(event)
        }
    }

    render() {
        const {className, children, defaultExpendAll, title, render} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        let childrenStyle = {
            'display': this.state.showChildren ? 'block' : null
        }

        let titleCaretClass = classNames({
            'fit-tree-right': true,
            'down': this.state.showChildren
        })

        let Children: any = null
        if (this.props) {
            Children = React.Children.map(children, (item: any) => {
                if (item) {
                    return React.cloneElement(item, {
                        defaultExpendAll: defaultExpendAll
                    })
                }
            })
        }

        const _others = others(new module.Props(), this.props)

        return (
            <div {..._others} className={classes}>
                <div onClick={this.handleContainerClick.bind(this) }
                     className="title">
                    {React.Children.count(children) > 0 ?
                        <div className="title-caret"
                             onClick={this.handleArrowClick.bind(this) }>
                            <i className={titleCaretClass}/>
                        </div> : <div className="empty-caret"/>
                    }
                    {title || render() }
                </div>
                <div style={childrenStyle}
                     className="children">
                    {Children ? Children : null}
                </div>
            </div>
        )
    }
}