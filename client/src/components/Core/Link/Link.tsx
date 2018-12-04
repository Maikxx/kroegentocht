import './Link.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
    to: string
}

export class Link extends React.Component<Props> {
    public render() {
        const { children, to } = this.props

        return (
            <a
                href={to}
                target={`_blank`}
                className={this.getClassName()}
            >
                {children}
            </a>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-Link', {}, className)
    }
}
