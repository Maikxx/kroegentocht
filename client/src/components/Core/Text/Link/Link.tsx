import './Link.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
    phone?: string
    target?: '_blank' | '_self' | '_parent' | '_top'
    to?: string
}

export class Link extends React.Component<Props> {
    public static defaultProps: Props = {
        target: '_blank',
    }

    public render() {
        const { phone } = this.props

        if (phone) {
            return this.renderPhoneLink()
        }

        return this.renderLink()
    }

    private renderPhoneLink = () => {
        const { className, children, to, phone, ...restProps } = this.props
        const href = `tel:${phone}`

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

    private renderLink = () => {
        const { className, children, to, phone, ...restProps } = this.props

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
