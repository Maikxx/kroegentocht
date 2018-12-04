import * as React from 'react'
import c from 'classnames'

interface Props {
    className?: string
}

export class PageTitle extends React.Component<Props> {
    public render() {
        return (
            <h1 className={this.getClassName()}>
                Kroegentocht
            </h1>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-Column', {}, className)
    }
}
