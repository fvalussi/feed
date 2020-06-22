import {Layout, useLayoutNavigation} from '@react-md/layout'
import React, { FC } from 'react'
import {Link, Route, Switch, useLocation} from 'react-router-dom'
import HomeScreen from './ui/home/HomeScreen'
import navItems from './ui/layout/navItems'
import {UsersScreen} from './ui/users/UsersScreen'
import {AppPresenterFactory} from './ui/app/AppPresenterFactory'
import {routeComponent} from './ui/lib/routeComponent'

const appPresenterFactory = new AppPresenterFactory()

const AppLayout: FC = ()  => {
    const { pathname } = useLocation()

    return (
        <Layout
            title="My Title"
            navHeaderTitle="Menu"
            treeProps={useLayoutNavigation(navItems, pathname, Link)}
            desktopLayout={'temporary'}
        >
            <Switch>
                <Route path="/" exact={true} component={HomeScreen} />
                <Route path="/users" component={routeComponent(UsersScreen, appPresenterFactory.users)}/>
            </Switch>
        </Layout>
    )
}

export default AppLayout
