import './styles/index.scss'
import 'babel-polyfill'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { RootView } from './views/RootView'

const App: React.SFC = () => (
    <RootView />
)

const rootElement = document.getElementById('app')

ReactDOM.render(<App />, rootElement)
