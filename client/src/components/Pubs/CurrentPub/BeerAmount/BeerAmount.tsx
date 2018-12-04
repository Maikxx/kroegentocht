import './BeerAmount.scss'
import * as React from 'react'
import c from 'classnames'
import FilledBeer from '../../../../../assets/icons/filled-beer-dark.svg'
import { Image } from '../../../Core/Image/Image'
import { Paragraph } from '../../../Core/Text/Paragraph/Paragraph'

interface Props {
    amount: number
    className?: string
}

export class BeerAmount extends React.Component<Props> {
    public render() {
        const { amount } = this.props

        return (
            <div className={this.getClassName()}>
                <Paragraph>
                    {amount}
                </Paragraph>
                <Image src={FilledBeer}/>
            </div>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-BeerAmount', {}, className)
    }
}
