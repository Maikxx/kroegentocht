import * as React from 'react'
import { View } from '../components/Layout/View/View'
import { Section } from '../components/Layout/Section/Section'
import { Column } from '../components/Layout/Column/Column'
import { PageTitle } from '../components/Chrome/PageTitle/PageTitle'
import { CurrentPub } from '../components/Pubs/CurrentPub/CurrentPub'

import pubs from '../../assets/data/barsAndPubs.json'

interface Props {}

export class RootView extends React.Component<Props> {
    public render() {
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
                            <div>Data</div>
                        </Column>
                        <Column title={`Volgende kroeg`}>
                            <div>Data</div>
                        </Column>
                    </Column>
                </Section>
                <Section>
                    Here goes the map
                </Section>
            </View>
        )
    }
}
