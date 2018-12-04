import './Section.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
}

export class Section extends React.Component<Props> {
    public render() {
        const { children } = this.props

        return (
            <section className={this.getClassName()}>
                {children}
            </section>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-Section', {}, className)
    }
}
