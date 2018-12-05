import * as React from 'react'
import { View } from '../components/Layout/View/View'
import { PubsView } from './Pubs/PubsView'

interface Props {}

export class RootView extends React.Component<Props> {
    public render() {
        return (
            <View>
                <PubsView />
            </View>
        )
    }
}
