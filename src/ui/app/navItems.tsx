import { LayoutNavigationItem, LayoutNavigationTree } from '@react-md/layout'
import { HomeSVGIcon, TvSVGIcon } from '@react-md/material-icons'
import React, {ReactNode} from 'react'

function createRoute(
    pathname: string,
    children: string,
    leftAddon: ReactNode | undefined,
    parentId: string | null = null,
): LayoutNavigationItem {
    return {
        itemId: pathname,
        parentId,
        to: pathname,
        children,
        leftAddon,
    }
}

const navItems: LayoutNavigationTree = {
    '/': createRoute('/', 'Home', <HomeSVGIcon />),
    '/users': createRoute('/users', 'Users', <TvSVGIcon />),
}

export default navItems
