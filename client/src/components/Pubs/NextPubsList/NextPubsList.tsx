import './NextPubsList.scss'
import * as React from 'react'
import c from 'classnames'
import { List } from '../../Core/List/List'
import { NextPubsListItem } from './NextPubsListItem'

interface Props {
    className?: string
}

export class NextPubsList extends React.Component<Props> {
    public render() {
        return (
            <List className={this.getClassName()}>
                <NextPubsListItem />
            </List>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-NextPubsList', {}, className)
    }
}
