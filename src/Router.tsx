import AppLayout from './AppLayout'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

function Router() {
    return(
        <BrowserRouter basename="/">
            <AppLayout/>
        </BrowserRouter>
    )
}

export default Router
