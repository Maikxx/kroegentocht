import './Heading.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
    level: number
}

export class Heading extends React.Component<Props> {
    public render() {
        const { children, level } = this.props
        const Component = `h${level}`

        return (
            <Component className={this.getClassName()}>
                {children}
            </Component>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-Heading', {}, className)
    }
}
