import './Button.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: string
}

export class Button extends React.Component<Props> {
    public render() {
        const { className, children, ...restProps } = this.props

        return (
            <button
                {...restProps}
                className={this.getClassName()}
            >
                {children}
            </button>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-Button', {}, className)
    }
}
