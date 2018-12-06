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
    selectedRootId?: string
}

export class PubsView extends React.Component<Props, State> {
    public state: State = {
        beerProgress: 0,
        selectedPub: undefined,
        currentImageIdentifier: '1s',
        selectedRootId: undefined,
    }

    private filteredPubs: Pub[]
    private selectedPubIds = [ 'n2725878434', 'n1724352586', 'n1741897815', 'n1083668064', 'n1221258124' ]
    private routeTwoIds = [ 'n1083668064', 'n1221258124', 'n1724352586', 'n1741897815', 'n2725878434' ]
    private startingPoints = [ 'n2725878434', 'n1083668064' ]

    public render() {
        const { beerProgress, selectedPub, currentImageIdentifier, selectedRootId } = this.state
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
                        <Column title={`Amount of beers`}>
                            <BeerProgress progress={beerProgress} />
                        </Column>
                        <Column title={`Next pubs ${this.getRemainingDistance()}`}>
                            {beerProgress !== 20 && (
                                <NextPubsList
                                    nextPubs={nextPubs}
                                    selectedRootId={selectedRootId}
                                />
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
                        defaultSelected={this.startingPoints}
                        onSelectPub={this.onSelectPub}
                        currentImageIdentifier={currentImageIdentifier}
                        nextPubId={this.getNextPubId()}
                    />
                </Section>
            </View>
        )
    }

    private getRemainingDistance = (): string | void => {
        const { selectedRootId } = this.state
        const nextPubs = this.getNextPubs()

        if (!nextPubs || !nextPubs.length || !selectedRootId || !selectedRootId.length) {
            return ''
        }

        const isAlternateRoute = selectedRootId !== this.startingPoints[0]

        if (nextPubs.length === 4) {
            return isAlternateRoute
                ? '(2200 meter)'
                : '(1550 meter)'
        } else if (nextPubs.length === 3) {
            return isAlternateRoute
                ? '(2000 meter)'
                : '(1300 meter)'
        } else if (nextPubs.length === 2) {
            return isAlternateRoute
                ? '(1300 meter)'
                : '(700 meter)'
        } else if (nextPubs.length === 1) {
            return isAlternateRoute
                ? '(500 meter)'
                : '(200 meter)'
        }
    }

    private getNextPubId = (): string | null => {
        const { selectedPub, selectedRootId } = this.state

        if (!selectedRootId || !selectedRootId.length) {
            return null
        }

        if (selectedRootId === this.startingPoints[0]) {
            const nextPub = this.filteredPubs[this.filteredPubs.indexOf(selectedPub) + 1]
            return nextPub && nextPub.full_id
        } else {
            const id = selectedPub && selectedPub.full_id

            if (!id) {
                return null
            }

            const nextPub = this.routeTwoIds[this.routeTwoIds.indexOf(id) + 1]
            return nextPub
        }
    }

    private onSelectPub = (event: React.MouseEvent<HTMLButtonElement>, pubId: string): void | null => {
        const { selectedRootId } = this.state

        const newlySelectedPub = this.filteredPubs.find(pub => pub.full_id === pubId)

        if (!selectedRootId || !selectedRootId.length) {
            this.setState({ selectedRootId: newlySelectedPub.full_id }, () => this.setNewState(newlySelectedPub))
            return null
        }

        this.setNewState(newlySelectedPub)
    }

    private setNewState = (newlySelectedPub: Pub): void => {
        const { beerProgress } = this.state

        const nextImageIdentifier = this.getNextImageState()
        const newBeerProgress = nextImageIdentifier !== '5s'
            ? (beerProgress + Number(newlySelectedPub.beerAmount))
            : beerProgress

        this.setState({
            selectedPub: newlySelectedPub,
            beerProgress: newBeerProgress,
            currentImageIdentifier: nextImageIdentifier,
        })
    }

    private getNextImageState = (): string => {
        const { currentImageIdentifier } = this.state

        const getNextImageIdentifier = (state: string): string => {
            const { selectedRootId } = this.state
            const isAlternateRoute = selectedRootId !== this.startingPoints[0]

            return isAlternateRoute
                ? `r${state}`
                : state
        }

        switch (currentImageIdentifier) {
        case '1s':
            return getNextImageIdentifier('1')
        case getNextImageIdentifier('1'):
            return getNextImageIdentifier('2')
        case getNextImageIdentifier('2'):
            return getNextImageIdentifier('3')
        case getNextImageIdentifier('3'):
            return getNextImageIdentifier('4')
        case getNextImageIdentifier('4'):
            return getNextImageIdentifier('5')
        default:
            return null
        }
    }

    private getNextPubs = (): Pub[] => {
        const { selectedPub, selectedRootId } = this.state

        if (!this.filteredPubs || !selectedPub) {
            return null
        }

        if (selectedRootId === this.startingPoints[0]) {
            return this.filteredPubs
                .slice(this.filteredPubs.indexOf(selectedPub) + 1)
        } else {
            return this.routeTwoIds
                .slice(this.routeTwoIds.indexOf(selectedPub.full_id) + 1)
                .map(pubId => this.filteredPubs.find(pub => pub.full_id === pubId))
        }
    }
}
