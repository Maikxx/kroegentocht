import './BeerAmount.scss'
import * as React from 'react'
import c from 'classnames'
import FilledBeer from '../../../../../assets/icons/filled-beer-dark.svg'
import { Image } from '../../../Core/Image/Image'

interface Props {
    amount: number
    className?: string
}

export class BeerAmount extends React.Component<Props> {
    public render() {
        const { amount } = this.props

        return (
            <div className={this.getClassName()}>
                <span className={`krt-BeerAmount__amount`}>
                    {amount}
                </span>
                <Image src={FilledBeer}/>
            </div>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-BeerAmount', {}, className)
    }
}
