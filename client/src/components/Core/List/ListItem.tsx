import './ListItem.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
}

export class ListItem extends React.Component<Props> {
    public render() {
        const { children } = this.props

        return (
            <li className={this.getClassName()}>
                {children}
            </li>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-ListItem', {}, className)
    }
}
