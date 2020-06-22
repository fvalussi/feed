import Layout from './Layout'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

function Router() {
    return(
        <BrowserRouter basename="/">
            <Layout/>
        </BrowserRouter>
    )
}

export default Router
