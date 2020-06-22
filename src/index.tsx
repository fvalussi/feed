import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Configuration } from 'react-md'
import './index.css'

import App from './ui/app/App'

ReactDOM.render(
   <Configuration>
    <App />
   </Configuration>,
    document.getElementById('root'))
