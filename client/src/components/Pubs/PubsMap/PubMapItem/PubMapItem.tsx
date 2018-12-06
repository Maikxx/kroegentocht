import './PubMapItem.scss'
import * as React from 'react'
import c from 'classnames'
import { Pub } from '../../../../types/Pub'

interface Props {
    className?: string
    defaultSelected?: string[]
    nextPubId?: string
    onSelectPub: (event: React.MouseEvent<HTMLButtonElement>, pubId: string) => void
    pub: Pub
}

export class PubMapItem extends React.Component<Props> {
    public render() {
        const { pub, onSelectPub, defaultSelected, nextPubId } = this.props
        const { full_id } = pub
        const isClickable = nextPubId === full_id || (defaultSelected && defaultSelected.includes(full_id))

        return (
            <button
                className={this.getClassName()}
                onClick={event => isClickable && onSelectPub(event, full_id)}
            />
        )
    }

    private getClassName = () => {
        const { className, pub, nextPubId, defaultSelected } = this.props
        const { full_id } = pub

        return c('krt-PubMapItem', {
            [`krt-PubMapItem--${full_id}`]: true,
            'krt-PubMapItem--is-clickable': nextPubId === full_id || (defaultSelected && defaultSelected.includes(full_id)),
        }, className)
    }
}
