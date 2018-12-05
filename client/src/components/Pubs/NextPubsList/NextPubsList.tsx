import './NextPubsList.scss'
import * as React from 'react'
import c from 'classnames'
import { List } from '../../Core/List/List'
import { NextPubsListItem } from './NextPubsListItem'
import { Pub } from '../../../types/Pub'

interface Props {
    className?: string
    nextPubs?: Pub[]
}

export class NextPubsList extends React.Component<Props> {
    public render() {
        const { nextPubs } = this.props

        if (!nextPubs) {
            return null
        }

        return (
            <List className={this.getClassName()}>
                {nextPubs.map(nextPub => (
                    <NextPubsListItem
                        key={nextPub.full_id}
                        pub={nextPub}
                    />
                ))}
            </List>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-NextPubsList', {}, className)
    }
}
