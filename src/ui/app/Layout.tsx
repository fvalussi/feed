import React, { ReactElement, FC } from 'react'
import { Layout, useLayoutNavigation } from '@react-md/layout'
import { Text } from '@react-md/typography'
import { Route, Switch, useLocation, Link } from 'react-router-dom'
import {UsersScreen} from '../Users/UsersScreen'
import navItems from './navItems'

const Home: FC = () => (
    <Text type="headline-4" align="center">
        Home Page!
    </Text>
)

export default (): ReactElement => {
    const { pathname } = useLocation()

    return (
        <Layout
            title="My Title"
            navHeaderTitle="My Nav Title"
            treeProps={useLayoutNavigation(navItems, pathname, Link)}
        >
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/users" component={UsersScreen} />
            </Switch>
        </Layout>
    )
}
