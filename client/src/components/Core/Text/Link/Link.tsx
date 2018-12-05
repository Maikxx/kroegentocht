import './Link.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
    to?: string
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
    target?: '_blank' | '_self' | '_parent' | '_top'
}

export class Link extends React.Component<Props> {
    public static defaultProps: Props = {
        target: '_blank',
    }

    public render() {
        const { className, children, to, ...restProps } = this.props
        const href = to
            ? to.includes('http')
                ? to
                : `http://${to}`
            : `#`

        return (
            <a
                href={href}
                className={this.getClassName()}
                {...restProps}
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
