import './Column.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
    title?: string
}

export class Column extends React.Component<Props> {
    public render() {
        const { children, title } = this.props

        return (
            <section className={this.getClassName()}>
                {title && (
                    <h2 className={`krt-Column__title`}>
                        {title}
                    </h2>
                )}
                {children}
            </section>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-Column', {}, className)
    }
}
