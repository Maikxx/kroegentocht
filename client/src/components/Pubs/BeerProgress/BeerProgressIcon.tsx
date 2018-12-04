import './BeerProgressIcon.scss'
import * as React from 'react'
import c from 'classnames'

import EmptyBeer from '../../../../assets/icons/empty-beer.svg'
import FilledBeer from '../../../../assets/icons/filled-beer.svg'
import { Image } from '../../Core/Image/Image'

interface Props {
    className?: string
    filled: boolean
}

export class BeerProgressIcon extends React.Component<Props> {
    public render() {
        const { filled } = this.props
        const src = filled
            ? FilledBeer
            : EmptyBeer

        return (
            <Image
                className={this.getClassName()}
                src={src}
            />
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-BeerProgressIcon', {}, className)
    }
}
