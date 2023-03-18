import React from 'react'
import App from './App'

import { CounterContext, FormContext } from './store/stores'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CounterContext>
        <FormContext>
            <App />
        </FormContext>
    </CounterContext>
)