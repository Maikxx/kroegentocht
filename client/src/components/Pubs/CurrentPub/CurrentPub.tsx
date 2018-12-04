import './CurrentPub.scss'
import c from 'classnames'
import * as React from 'react'
import { List } from '../../Core/List/List'
import { ListItem } from '../../Core/List/ListItem'
import { BeerAmount } from './BeerAmount/BeerAmount'

interface Props {
    className?: string
    pub?: any
}

export class CurrentPub extends React.Component<Props> {
    public render() {
        const properties = this.loopThroughPubProperties() || []
        const pubNumber = 3
        const randomBeerAmount = this.getArrayOfRandomNumbersWhichEqual(20)[pubNumber] || 1
        console.log(this.getArrayOfRandomNumbersWhichEqual(20)[pubNumber])

        return (
            <div className={this.getClassName()}>
                <BeerAmount amount={randomBeerAmount}/>
                <List>
                    {properties
                        .filter(([ key, value ]) => !!value)
                        .map(([ key, value ], i) => (
                            <ListItem key={i}>
                                <h3 className={`krt-CurrentPub__data-title`}>
                                    {key}
                                </h3>
                                <span className={`krt-CurrentPub__data-content`}>
                                    {value}
                                </span>
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        )
    }

    // https://stackoverflow.com/questions/24020709/generate-an-array-that-adds-up-to-specific-value-using-only-2-numbers
    private getArrayOfRandomNumbersWhichEqual = (maxTotal: number) => {
        let sum = 0
        const numbers = []

        while (sum < maxTotal) {
            const num = Math.floor((Math.random() * 2) + 4)
            if (sum + num > maxTotal) {
                numbers.push(1)
                sum += 1
            } else {
                numbers.push(num)
                sum += num
            }
        }

        return numbers
    }

    private loopThroughPubProperties = () => {
        const { pub } = this.props

        return Object.entries(pub)
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-CurrentPub', {}, className)
    }
}
