import './PubMapItem.scss'
import * as React from 'react'
import c from 'classnames'
import { Pub } from '../../../../types/Pub'

interface Props {
    className?: string
    pub: Pub
    onSelectPub: (event: React.MouseEvent<HTMLButtonElement>, pubId: string) => void
}

export class PubMapItem extends React.Component<Props> {
    public render() {
        const { pub, onSelectPub } = this.props

        return (
            <button
                className={this.getClassName()}
                onClick={event => onSelectPub(event, pub.full_id)}
            />
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-PubMapItem', {}, className)
    }
}
