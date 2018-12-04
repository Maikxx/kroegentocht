import './CurrentPub.scss'
import c from 'classnames'
import * as React from 'react'
import { List } from '../../Core/List/List'
import { ListItem } from '../../Core/List/ListItem'
import { Link } from '../../Core/Link/Link'
import { BeerAmount } from './BeerAmount/BeerAmount'
import { getArrayOfRandomNumbersWhichEqual } from '../../../utils/array'

interface Props {
    className?: string
    pub?: any
}

export class CurrentPub extends React.Component<Props> {
    public render() {
        const { pub } = this.props

        const properties = Object.entries(pub) || []
        const pubNumber = 3
        const randomBeerAmount = getArrayOfRandomNumbersWhichEqual(20)[pubNumber] || 1
        const desiredDataKeys = [
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

        return (
            <div className={this.getClassName()}>
                <BeerAmount amount={randomBeerAmount}/>
                <List>
                    {properties
                        .filter(([ key, value ]) => desiredDataKeys.includes(key) && !!value)
                        .map(([ key, value ], i) => (
                            <ListItem key={i}>
                                <h3 className={`krt-CurrentPub__data-title`}>
                                    {this.getTransformedKeyName(key)}
                                </h3>
                                <span className={`krt-CurrentPub__data-content`}>
                                    {key === 'website'
                                        ? (
                                            <Link to={value}>
                                                {value}
                                            </Link>
                                        )
                                        : value
                                    }
                                </span>
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        )
    }

    private getTransformedKeyName = (key: string) => {
        switch (key) {
        case 'name':
            return 'Naam'
        case 'cuisine':
            return 'Keuken'
        case 'opening_hours':
            return 'Openeningstijden'
        case 'phone':
            return 'Telefoonnummer'
        case 'website':
            return 'Website'
        case 'smoking':
            return 'Roken toegestaan'
        case 'description':
            return 'Beschrijving'
        case 'wheelchair':
            return 'Rolstoelvriendelijk'
        case 'darkroom':
            return 'Heeft een darkroom'
        case 'atm':
            return 'Heeft een geldautomaat'
        case 'karaoke':
            return 'Doet aan karaoke'
        case 'payment:cash':
            return 'Betalen met cash'
        case 'brewery':
            return 'Heeft een brouwerij'
        default:
            return key
        }
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-CurrentPub', {}, className)
    }
}
