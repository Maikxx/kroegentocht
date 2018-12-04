import * as React from 'react'
import { View } from '../components/Layout/View/View'
import { Section } from '../components/Layout/Section/Section'
import { Column } from '../components/Layout/Column/Column'

interface Props {}

export class RootView extends React.Component<Props> {
    public render() {
        return (
            <View>
                <Section>
                    <Column>
                        <div>Hoi</div>
                    </Column>
                    <Column>
                        <Column>
                            <div>Hoi</div>
                        </Column>
                        <Column>
                            <div>Hoi</div>
                        </Column>
                    </Column>
                </Section>
            </View>
        )
    }
}
