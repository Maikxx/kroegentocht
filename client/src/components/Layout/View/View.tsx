import './View.scss'
import * as React from 'react'
import c from 'classnames'
import { Heading } from '../../Core/Text/Heading/Heading'

interface Props {
    className?: string
    hiddenPageTitle?: string
}

export class View extends React.Component<Props> {
    public render() {
        const { children, hiddenPageTitle } = this.props

        return (
            <main className={this.getClassName()}>
                {hiddenPageTitle && (
                    <Heading level={1} className={`krt-View__hidden-page-title`}>
                        {hiddenPageTitle}
                    </Heading>
                )}
                {children}
            </main>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-View', {}, className)
    }
}
