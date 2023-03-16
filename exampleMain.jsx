import React from 'react'
import App from './App'

import { CounterContext } from './store/stores'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CounterContext>
        <App />
    </CounterContext>
)