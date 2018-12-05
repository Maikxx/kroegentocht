import * as React from 'react'
import { View } from '../../components/Layout/View/View'
import { Section } from '../../components/Layout/Section/Section'
import { Column } from '../../components/Layout/Column/Column'
import { CurrentPub } from '../../components/Pubs/CurrentPub/CurrentPub'
import { Paragraph } from '../../components/Core/Text/Paragraph/Paragraph'
import { BeerProgress } from '../../components/Pubs/BeerProgress/BeerProgress'
import { NextPubsList } from '../../components/Pubs/NextPubsList/NextPubsList'
import { Link } from '../../components/Core/Text/Link/Link'
import { PubsMap } from '../../components/Pubs/PubsMap/PubsMap'
import { Pub } from '../../types/Pub'
import pubs from '../../../assets/data/barsAndPubs.json'

interface Props {}

interface State {
    beerProgress: number
    selectedPub?: Pub
    currentImageIdentifier: string
}

export class PubsView extends React.Component<Props, State> {
    public state: State = {
        beerProgress: 0,
        selectedPub: undefined,
        currentImageIdentifier: '1s',
    }

    private filteredPubs: Pub[]
    private selectedPubIds = [ 'n2725878434', 'n1724352586', 'n1741897815', 'n1083668064', 'n1221258124' ]

    public render() {
        const { beerProgress, selectedPub, currentImageIdentifier } = this.state
        const nextPubs = this.getNextPubs()
        this.filteredPubs = this.selectedPubIds.map(pubId => pubs.find(pub => pub.full_id === pubId))

        return (
            <View hiddenPageTitle={`Pub Crawl`}>
                <Section>
                    <Column title={`Current pub`}>
                        {selectedPub && (
                            <CurrentPub pub={selectedPub} />
                        )}
                        {!selectedPub && (
                            <Paragraph>
                                Select a pub to start!
                            </Paragraph>
                        )}
                    </Column>
                    <Column>
                        <Column title={`Beer progress`}>
                            <BeerProgress progress={beerProgress} />
                        </Column>
                        <Column title={`Next pubs`}>
                            {beerProgress !== 20 && (
                                <NextPubsList nextPubs={nextPubs}/>
                            )}
                            {beerProgress === 20 && (
                                <Paragraph>
                                    You have come to the end of the pub crawl!
                                    <Link
                                        onClick={() => window.location.reload()}
                                        target={`_self`}
                                    >
                                        Click here to start over.
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
                        currentImageIdentifier={currentImageIdentifier}
                        nextPubId={this.getNextPubId()}
                    />
                </Section>
            </View>
        )
    }

    private getNextPubId = () => {
        const { selectedPub } = this.state

        const nextPub = this.filteredPubs[this.filteredPubs.indexOf(selectedPub) + 1] || undefined
        return nextPub && nextPub.full_id
    }

    private getNextImageState = () => {
        const { currentImageIdentifier } = this.state

        switch (currentImageIdentifier) {
        case '1s':
            return '1'
        case '1':
            return '2'
        case '2':
            return '3'
        case '3':
            return '4'
        case '4':
            return '5'
        default:
            return '5s'
        }
    }

    private onSelectPub = (event: React.MouseEvent<HTMLButtonElement>, pubId: string) => {
        const { beerProgress } = this.state

        const newlySelectedPub = this.filteredPubs.find(pub => pub.full_id === pubId)
        const nextcurrentImageIdentifier = this.getNextImageState()
        const newBeerProgress = nextcurrentImageIdentifier !== '5s'
            ? (beerProgress + Number(newlySelectedPub.beerAmount))
            : beerProgress

        this.setState({
            selectedPub: newlySelectedPub,
            beerProgress: newBeerProgress,
            currentImageIdentifier: nextcurrentImageIdentifier,
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
