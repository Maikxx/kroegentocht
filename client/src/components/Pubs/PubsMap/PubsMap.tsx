import './PubsMap.scss'
import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
}

export class PubsMap extends React.Component<Props> {
    public render() {
        return (
            <div className={this.getClassName()}>
                Map
            </div>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-PubsMap', {}, className)
    }
}
