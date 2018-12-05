import './PubsMap.scss'
import * as React from 'react'
import c from 'classnames'
import { Pub } from '../../../types/Pub'
import { PubMapItem } from './PubMapItem/PubMapItem'

interface Props {
    className?: string
    pubs?: Pub[]
    onSelectPub: (event: React.MouseEvent<HTMLButtonElement>, pubId: string) => void
}

export class PubsMap extends React.Component<Props> {
    public render() {
        const { pubs, onSelectPub } = this.props

        if (!pubs) {
            return null
        }

        return (
            <div className={this.getClassName()}>
                {pubs.map(pub => (
                    <PubMapItem
                        pub={pub}
                        onSelectPub={onSelectPub}
                        key={pub.full_id}
                    />
                ))}
            </div>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-PubsMap', {}, className)
    }
}
