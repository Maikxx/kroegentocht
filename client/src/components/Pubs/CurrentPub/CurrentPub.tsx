import './CurrentPub.scss'
import c from 'classnames'
import * as React from 'react'
import { List } from '../../Core/List/List'
import { ListItem } from '../../Core/List/ListItem'
import { Link } from '../../Core/Text/Link/Link'
import { BeerAmount } from './BeerAmount/BeerAmount'
import { Heading } from '../../Core/Text/Heading/Heading'
import { Paragraph } from '../../Core/Text/Paragraph/Paragraph'
import { Pub } from '../../../types/Pub'
import { capitalize } from '../../../utils/string'

interface Props {
    className?: string
    pub?: Pub
}

export class CurrentPub extends React.Component<Props> {
    private desiredDataKeys = [
        'name',
        'cuisine',
        'opening_hours',
        'phone',
        'website',
        'smoking',
        'description',
        'wheelchair',
        'darkroom',
        'atm',
        'karaoke',
        'payment:cash',
        'brewery',
    ]

    public render() {
        const { pub } = this.props
        const { beerAmount } = pub
        const properties = Object.entries(pub) || []
        const fullAddress = this.getFullAddress()

        return (
            <div className={this.getClassName()}>
                <BeerAmount amount={Number(beerAmount)}/>
                <List>
                    {properties
                        .filter(([ key, value ]) => this.desiredDataKeys.includes(key) && !!value)
                        .sort(([keyA]) => keyA === 'name' ? -1 : 1)
                        .map(([ key, value ], i) => {
                            const websiteContent = key === 'website' && (
                                <Link to={value}>
                                    {value}
                                </Link>
                            )

                            const telephoneContent = key === 'phone' && (
                                <Link phone={value}>
                                    {value}
                                </Link>
                            )

                            const content = websiteContent || telephoneContent || value

                            return (
                                <ListItem key={i}>
                                    <Heading level={3}>
                                        {this.getTransformedKeyName(key)}
                                    </Heading>
                                    <Paragraph>
                                        {content}
                                    </Paragraph>
                                </ListItem>
                            )
                        })
                    }
                    <ListItem>
                        <Heading level={3}>
                            Address
                        </Heading>
                        <Paragraph>
                            {fullAddress}
                        </Paragraph>
                    </ListItem>
                </List>
            </div>
        )
    }

    private getFullAddress = () => {
        const { pub } = this.props

        return `${pub['addr:street']} ${pub['addr:housenumber']}, ${pub['addr:postcode']}, the Netherlands`
    }

    private getTransformedKeyName = (key: string) => {
        switch (key) {
        case 'opening_hours':
            return 'Opening hours'
        case 'phone':
            return 'Phone number'
        case 'smoking':
            return 'Smoking allowed'
        case 'wheelchair':
            return 'Wheelchair friendly'
        case 'darkroom':
            return 'Has a darkroom'
        case 'atm':
            return 'Has an ATM'
        case 'payment:cash':
            return 'Paying with cash allowed'
        case 'brewery':
            return 'Has a own brewery'
        default:
            return capitalize(key)
        }
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-CurrentPub', {}, className)
    }
}
