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
        console.log(this.props.pub)

        return (
            <div className={this.getClassName()}>
                <BeerAmount amount={1}/>
                <List>
                    <ListItem>
                        <h3 className={`krt-CurrentPub__data-title`}>
                            Data title
                        </h3>
                        <span className={`krt-CurrentPub__data-content`}>
                            Data content
                        </span>
                    </ListItem>
                </List>
            </div>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-CurrentPub', {}, className)
    }
}
