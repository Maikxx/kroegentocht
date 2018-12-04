import * as React from 'react'
import { View } from '../components/Layout/View/View'
import { Section } from '../components/Layout/Section/Section'
import { Column } from '../components/Layout/Column/Column'

import json from '../../assets/data/barsAndPubs.json'

interface Props {}

export class RootView extends React.Component<Props> {
    public render() {
        console.log(json)

        return (
            <View>
                <h1>
                   Kroegentocht
                </h1>
                <Section>
                    <Column title={`Huidige kroeg`}>
                        <div>Data</div>
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
