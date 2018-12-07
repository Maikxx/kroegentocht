import './Paragraph.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
    extraSpaceBottom?: boolean
}

export class Paragraph extends React.Component<Props> {
    public render() {
        const { children } = this.props

        return (
            <p className={this.getClassName()}>
                {children}
            </p>
        )
    }

    private getClassName = () => {
        const { className, extraSpaceBottom } = this.props

        return c('krt-Paragraph', {
            'krt-Paragraph--extra-space-bottom': extraSpaceBottom,
        }, className)
    }
}
