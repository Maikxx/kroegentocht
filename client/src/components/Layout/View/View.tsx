import './View.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
}

export class View extends React.Component<Props> {
    public render() {
        const { children } = this.props

        return (
            <main className={this.getClassName()}>
                {children}
            </main>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-View', {}, className)
    }
}
