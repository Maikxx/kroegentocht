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
import { Pub, PubName } from '../../../types/Pub'

interface Props {
    className?: string
    pub: Pub
    selectedRootId: string
}

export class NextPubsListItem extends React.Component<Props> {
    private regularStartingPoint = 'n2725878434'

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

    private getDistanceToNextPub = (): string | void => {
        const { pub, selectedRootId } = this.props
        const { name } = pub

        if (name === PubName.Gollem) {
            return selectedRootId === this.regularStartingPoint
                ? '250 meter'
                : '700 meter'
        } else if (name === PubName.HuntersGrand) {
            return selectedRootId === this.regularStartingPoint
                ? '600 meter'
                : '800 meter'
        } else if (name === PubName.DeDoelen) {
            return selectedRootId === this.regularStartingPoint
                ? '500 meter'
                : '200 meter'
        } else if (name === PubName.Katoen) {
            return '200 meter'
        } else if (name === PubName.HuntersBar) {
            return '500 meter'
        }
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-NextPubsListItem', {}, className)
    }
}
