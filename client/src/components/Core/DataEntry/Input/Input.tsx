import './Input.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
    defaultValue?: string | string[]
    name: string
    type: string
    value?: number | string
}

export class Input extends React.Component<Props> {
    public render() {
        const { className, ...restProps } = this.props

        return (
            <input
                {...restProps}
                className={this.getClassName()}
            />
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-Input', {}, className)
    }
}
