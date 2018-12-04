import 'babel-polyfill'
import * as React from 'react'
import ReactDOM from 'react-dom'

const App: React.SFC = () => (
    <div>Hoi</div>
)

const rootElement = document.getElementById('app')

ReactDOM.render(<App />, rootElement)
