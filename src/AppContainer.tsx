import {Configuration} from '@react-md/layout'
import React from 'react'
import Router from './Router'

const AppContainer: React.FC = () => {
    return(
        <Configuration>
            <Router />
        </Configuration>
    )
}

export default AppContainer
