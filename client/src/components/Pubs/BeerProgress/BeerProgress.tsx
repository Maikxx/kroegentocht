import './BeerProgress.scss'
import * as React from 'react'
import c from 'classnames'
import { times } from '../../../utils/array'
import { BeerProgressIcon } from './BeerProgressIcon'

interface Props {
    className?: string
    current: number
}

export class BeerProgress extends React.Component<Props> {
    public render() {
        const { current } = this.props

        return (
            <div className={this.getClassName()}>
                {times(current).map((n: number) => (
                    <BeerProgressIcon filled={true} key={n}/>
                ))}
                {times(20 - current).map((n: number) => (
                    <BeerProgressIcon filled={false} key={n}/>
                ))}
            </div>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-BeerProgress', {}, className)
    }
}
