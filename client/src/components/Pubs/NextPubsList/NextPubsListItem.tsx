import './NextPubsListItem.scss'
import * as React from 'react'
import c from 'classnames'
import { ListItem } from '../../Core/List/ListItem'
import FilledBeer from '../../../../assets/icons/filled-beer.svg'
import { Row } from '../../Layout/Row/Row'
import { Column } from '../../Layout/Column/Column'
import { Image } from '../../Core/Image/Image'
import { Heading } from '../../Core/Text/Heading/Heading'
import { Paragraph } from '../../Core/Text/Paragraph/Paragraph'

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
                        <Heading level={3}>
                            DD Club
                        </Heading>
                        <Paragraph>
                            Adres
                        </Paragraph>
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
