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
import { Pub } from '../../../types/Pub'

interface Props {
    className?: string
    pub: Pub
}

export class NextPubsListItem extends React.Component<Props> {
    public render() {
        const { pub } = this.props

        return (
            <ListItem className={this.getClassName()}>
                <Row>
                    <Image src={FilledBeer}/>
                    <Column>
                        <Heading level={3}>
                            {pub.name}
                        </Heading>
                        <Paragraph>
                            {pub['addr:street']} ({this.getDistanceToNextPub()})
                        </Paragraph>
                    </Column>
                </Row>
            </ListItem>
        )
    }

    private getDistanceToNextPub = () => {
        const { pub } = this.props
        const { name } = pub

        if (name === 'Gollem') {
            return '250 meter'
        } else if (name === 'Hunter\'s Grand Café') {
            return '600 meter'
        } else if (name === 'Café de Doelen') {
            return '500 meter'
        } else if (name === 'Café Katoen') {
            return '200 meter'
        }
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-NextPubsListItem', {}, className)
    }
}
