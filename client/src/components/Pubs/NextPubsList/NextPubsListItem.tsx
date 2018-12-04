import './NextPubsListItem.scss'
import * as React from 'react'
import c from 'classnames'
import { ListItem } from '../../Core/List/ListItem'
import FilledBeer from '../../../../assets/icons/filled-beer.svg'
import { Row } from '../../Layout/Row/Row'
import { Column } from '../../Layout/Column/Column'

interface Props {
    className?: string
}

export class NextPubsListItem extends React.Component<Props> {
    public render() {
        return (
            <ListItem className={this.getClassName()}>
                <Row>
                    <img src={FilledBeer} className={`krt-NextPubsListItem__icon`}/>
                    <Column>
                        <h3 className={`krt-NextPubsListItem__name`}>
                            DD Club
                        </h3>
                    </Column>
                </Row>
            </ListItem>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-NextPubsListItem', {}, className)
    }
}
