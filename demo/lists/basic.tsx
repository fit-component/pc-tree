import * as React from 'react'
import {Tree, TreeNode} from '../../src'

export default class Demo extends React.Component<any, any> {
    render() {
        return (
            <Tree>
                <TreeNode title="上古卷轴">
                    <TreeNode title="简介"/>
                    <TreeNode title="第一章">
                        <TreeNode title="残卷">
                            <TreeNode title="残卷1"/>
                            <TreeNode title="残卷2"/>
                        </TreeNode>
                        <TreeNode title="后记"/>
                    </TreeNode>
                </TreeNode>
            </Tree>
        )
    }
}