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
import { Paragraph } from '../components/Core/Text/Paragraph/Paragraph'
import { Link } from '../components/Core/Text/Link/Link'

interface Props {}

interface State {
    beerProgress: number
    selectedPub?: Pub
    clickState: string
}

export class RootView extends React.Component<Props, State> {
    public state: State = {
        beerProgress: 0,
        selectedPub: undefined,
        clickState: '1s',
    }

    private filteredPubs: Pub[]

    public render() {
        const { beerProgress, selectedPub, clickState } = this.state
        const selectedPubIds = [ 'n2725878434', 'n1724352586', 'n1741897815', 'n1083668064', 'n1221258124' ]
        const nextPubs = this.getNextPubs()
        this.filteredPubs = selectedPubIds.map(pubId => pubs.find(pub => pub.full_id === pubId))

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
                            {beerProgress !== 20 && <NextPubsList nextPubs={nextPubs}/>}
                            {beerProgress === 20 && (
                                <Paragraph>
                                    Je bent aan het eind gekomen van de kroegentocht!
                                    <Link
                                        onClick={() => window.location.reload()}
                                        target={`_self`}
                                    >
                                        Klik hier om opnieuw te beginnen.
                                    </Link>
                                </Paragraph>
                            )}
                        </Column>
                    </Column>
                </Section>
                <Section>
                    <PubsMap
                        pubs={this.filteredPubs}
                        onSelectPub={this.onSelectPub}
                        clickState={clickState}
                        nextPubId={this.getNextPubId()}
                    />
                </Section>
            </View>
        )
    }

    private getNextPubId = () => {
        const { selectedPub } = this.state
        const { filteredPubs } = this
        const currentPubIndex = filteredPubs.indexOf(selectedPub)
        const nextPub = filteredPubs[currentPubIndex + 1] || undefined
        return nextPub && nextPub.full_id
    }

    private getNextImageState = () => {
        const { clickState } = this.state

        if (clickState === '1s') {
            return '1'
        } else if (clickState === '1') {
            return '2'
        } else if (clickState === '2') {
            return '3'
        } else if (clickState === '3') {
            return '4'
        } else if (clickState === '4') {
            return '5'
        } else {
            return '5s'
        }
    }

    private onSelectPub = (event: React.MouseEvent<HTMLButtonElement>, pubId: string) => {
        const { beerProgress } = this.state
        const newlySelectedPub = this.filteredPubs.find(pub => pub.full_id === pubId)
        const nextClickState = this.getNextImageState()
        const newBeerProgress = nextClickState !== '5s'
            ? (beerProgress + Number(newlySelectedPub.beerAmount))
            : beerProgress

        this.setState({
            selectedPub: newlySelectedPub,
            beerProgress: newBeerProgress,
            clickState: nextClickState,
        })
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
