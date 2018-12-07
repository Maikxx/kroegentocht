import './BeerProgress.scss'
import * as React from 'react'
import c from 'classnames'
import { times } from '../../../utils/array'
import { BeerProgressIcon } from './BeerProgressIcon'
import { Input } from '../../Core/DataEntry/Input/Input'
import { Button } from '../../Core/Button/Button'

interface Props {
    className?: string
    progress: number
}

interface State {
    amountSet: boolean
}

export class BeerProgress extends React.Component<Props, State> {
    public state: State = {
        amountSet: false,
    }

    public render() {
        const { progress } = this.props
        const { amountSet } = this.state

        return (
            <div className={this.getClassName()}>
                {!amountSet && (
                    <React.Fragment>
                        <Input
                            className={`krt-BeerProgress__amount`}
                            name={`beer-amount`}
                            type={`number`}
                            value={20}
                        />
                        <Button
                            onClick={() => this.setState({ amountSet: true })}
                            className={`krt-BeerProgress__set-button`}
                        >
                            Set amount of beers
                        </Button>
                    </React.Fragment>
                )}
                {amountSet && (
                    <React.Fragment>
                        {times(progress).map((n: number) => (
                            <BeerProgressIcon filled={true} key={n}/>
                        ))}
                        {times(20 - progress).map((n: number) => (
                            <BeerProgressIcon filled={false} key={n}/>
                        ))}
                    </React.Fragment>
                )}
            </div>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-BeerProgress', {}, className)
    }
}
