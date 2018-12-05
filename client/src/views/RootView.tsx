import * as React from 'react'
import { View } from '../components/Layout/View/View'
import { Section } from '../components/Layout/Section/Section'
import { Column } from '../components/Layout/Column/Column'
import { CurrentPub } from '../components/Pubs/CurrentPub/CurrentPub'
import { BeerProgress } from '../components/Pubs/BeerProgress/BeerProgress'
import { NextPubsList } from '../components/Pubs/NextPubsList/NextPubsList'
import { PubsMap } from '../components/Pubs/PubsMap/PubsMap'
import pubs from '../../assets/data/barsAndPubs.json'
import { Pub } from '../types/Pub'

interface Props {}

interface State {
    beerProgress: number
    selectedPub?: Pub
}

export class RootView extends React.Component<Props, State> {
    public state: State = {
        beerProgress: 0,
        selectedPub: undefined,
    }

    private filteredPubs: Pub[]

    public componentDidMount() {
        const selectedPubIds = [ 'n2725878434', 'n1724352586', 'n1741897815', 'n1083668064', 'n1221258124' ]
        this.filteredPubs = pubs.filter(pub => selectedPubIds.includes(pub.full_id))

        this.setState({ selectedPub: this.filteredPubs[0] })

        window.addEventListener('click', () => {
            this.setState({
                beerProgress: this.state.beerProgress + 1,
                selectedPub: this.filteredPubs[this.state.beerProgress + 1],
            })
        })
    }

    public render() {
        const { beerProgress, selectedPub } = this.state
        const nextPubs = this.getNextPubs()

        return (
            <View>
                <Section>
                    <Column title={`Huidige kroeg`}>
                        {selectedPub && (
                            <CurrentPub pub={selectedPub} />
                        )}
                    </Column>
                    <Column>
                        <Column title={`Voortgang`}>
                            <BeerProgress progress={beerProgress} />
                        </Column>
                        <Column title={`Volgende kroegen`}>
                            <NextPubsList nextPubs={nextPubs}/>
                        </Column>
                    </Column>
                </Section>
                <Section>
                    <PubsMap
                        pubs={this.filteredPubs}
                        onSelectPub={this.onSelectPub}
                    />
                </Section>
            </View>
        )
    }

    private onSelectPub = (event: React.MouseEvent<HTMLButtonElement>, pubId: string) => {
        this.setState({ selectedPub: this.filteredPubs.find(pub => pub.full_id === pubId) })
    }

    private getNextPubs = () => {
        const { selectedPub } = this.state
        const { filteredPubs } = this

        if (!filteredPubs || !selectedPub) {
            return null
        }

        const currentPubIndex = filteredPubs.indexOf(selectedPub)
        return filteredPubs.slice(currentPubIndex + 1)
    }
}
