import './Image.scss'
import * as React from 'react'
import c from 'classnames'

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    className?: string
}

export class Image extends React.Component<Props> {
    public render() {
        const { className, ...restProps } = this.props

        return (
            <img {...restProps} className={this.getClassName()}/>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-Image', {}, className)
    }
}
