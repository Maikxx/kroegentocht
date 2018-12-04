import './List.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
}

export class List extends React.Component<Props> {
    public render() {
        const { children } = this.props

        return (
            <ul className={this.getClassName()}>
                {children}
            </ul>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-List', {}, className)
    }
}
