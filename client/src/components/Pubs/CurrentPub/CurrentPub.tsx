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

        return (
            <div className={this.getClassName()}>
                <BeerAmount amount={1}/>
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

    private loopThroughPubProperties = () => {
        const { pub } = this.props

        return Object.entries(pub)
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-CurrentPub', {}, className)
    }
}
