import './CurrentPub.scss'
import c from 'classnames'
import * as React from 'react'
import { List } from '../../Core/List/List'
import { ListItem } from '../../Core/List/ListItem'
import { BeerAmount } from './BeerAmount/BeerAmount'
import { getArrayOfRandomNumbersWhichEqual } from '../../../utils/array'

interface Props {
    className?: string
    pub?: any
}

export class CurrentPub extends React.Component<Props> {
    public render() {
        const { pub } = this.props

        const properties = Object.entries(pub) || []
        const pubNumber = 3
        const randomBeerAmount = getArrayOfRandomNumbersWhichEqual(20)[pubNumber] || 1
        const desiredDataKeys = [ 'name', '' ]

        return (
            <div className={this.getClassName()}>
                <BeerAmount amount={randomBeerAmount}/>
                <List>
                    {properties
                        .filter(([ key, value ]) => desiredDataKeys.includes(key) && !!value)
                        .map(([ key, value ], i) => (
                            <ListItem key={i}>
                                <h3 className={`krt-CurrentPub__data-title`}>
                                    {this.getTransformedKeyName(key)}
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

    private getTransformedKeyName = (key: string) => {
        if (key === 'name') {
            return 'Naam'
        }

        return key
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-CurrentPub', {}, className)
    }
}
