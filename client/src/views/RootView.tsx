import * as React from 'react'
import { View } from '../components/Layout/View/View'
import { Section } from '../components/Layout/Section/Section'
import { Column } from '../components/Layout/Column/Column'
import { PageTitle } from '../components/Chrome/PageTitle/PageTitle'
import { CurrentPub } from '../components/Pubs/CurrentPub/CurrentPub'
import { BeerProgress } from '../components/Pubs/BeerProgress/BeerProgress'
import { NextPubsList } from '../components/Pubs/NextPubsList/NextPubsList'
import { PubsMap } from '../components/Pubs/PubsMap/PubsMap'
import pubs from '../../assets/data/barsAndPubs.json'

interface Props {}

interface State {
    beerProgress: number
}

export class RootView extends React.Component<Props, State> {
    public state: State = {
        beerProgress: 0,
    }

    public componentDidMount() {
        window.addEventListener('click', () => {
            this.setState({ beerProgress: this.state.beerProgress + 1 })
        })
    }

    public render() {
        const { beerProgress } = this.state
        const pub = pubs[5]

        return (
            <View>
                <PageTitle />
                <Section>
                    <Column title={`Huidige kroeg`}>
                        <CurrentPub pub={pub} />
                    </Column>
                    <Column>
                        <Column title={`Voortgang`}>
                            <BeerProgress progress={beerProgress} />
                        </Column>
                        <Column title={`Volgende kroeg`}>
                            <NextPubsList />
                        </Column>
                    </Column>
                </Section>
                <Section>
                    <PubsMap />
                </Section>
            </View>
        )
    }
}
