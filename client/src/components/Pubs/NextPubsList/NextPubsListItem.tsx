import './NextPubsListItem.scss'
import * as React from 'react'
import c from 'classnames'
import { ListItem } from '../../Core/List/ListItem'
import FilledBeer from '../../../../assets/icons/filled-beer.svg'
import { Row } from '../../Layout/Row/Row'
import { Column } from '../../Layout/Column/Column'
import { Image } from '../../Core/Image/Image'

interface Props {
    className?: string
}

export class NextPubsListItem extends React.Component<Props> {
    public render() {
        return (
            <ListItem className={this.getClassName()}>
                <Row>
                    <Image src={FilledBeer}/>
                    <Column>
                        <h3 className={`krt-NextPubsListItem__name`}>
                            DD Club
                        </h3>
                        <span className={`krt-NextPubsListItem__address`}>
                            Adres
                        </span>
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
