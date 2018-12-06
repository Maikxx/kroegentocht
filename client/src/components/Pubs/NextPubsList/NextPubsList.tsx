import './NextPubsList.scss'
import * as React from 'react'
import c from 'classnames'
import { List } from '../../Core/List/List'
import { NextPubsListItem } from './NextPubsListItem'
import { Pub } from '../../../types/Pub'

interface Props {
    className?: string
    nextPubs?: Pub[]
    selectedRootId: string
}

export class NextPubsList extends React.Component<Props> {
    public render() {
        const { nextPubs, selectedRootId } = this.props

        return (
            <List className={this.getClassName()}>
                {nextPubs && nextPubs.map(nextPub => (
                    <NextPubsListItem
                        key={nextPub.full_id}
                        pub={nextPub}
                        selectedRootId={selectedRootId}
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
