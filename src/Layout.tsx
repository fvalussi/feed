import {Layout, useLayoutNavigation} from '@react-md/layout'
import React, { FC } from 'react'
import {Link, Route, Switch, useLocation} from 'react-router-dom'
import Home from './ui/app/Home'
import navItems from './ui/app/navItems'
import {UsersScreen} from './ui/Users/UsersScreen'

const AppLayout: FC = ()  => {
    const { pathname } = useLocation()

    return (
        <Layout
            title="My Title"
            navHeaderTitle="Menu"
            treeProps={useLayoutNavigation(navItems, pathname, Link)}
            desktopLayout={'toggleable'}
        >
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/users" component={UsersScreen} />
            </Switch>
        </Layout>
    )
}

export default AppLayout
