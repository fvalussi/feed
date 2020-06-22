import React from 'react'

export function routeComponent(Component: any, createPresenter: any) {
    return (props: any) => <Component {...props} createPresenter={createPresenter} />
}
