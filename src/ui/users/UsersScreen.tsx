import {Text} from '@react-md/typography'
import React from 'react'
import {Presentable} from '../components/Presentable'
import {UsersPresenter, UsersView} from './UsersPresenter'

export class UsersScreen extends Presentable<UsersPresenter, State> implements UsersView {
    state: State = {
        name: '',
    }

    async componentDidMount() { await this.presenter.start() }

    render() {
        return (
            <Text type="headline-4" align="center">
                Users Class
            </Text>
        )
    }

    hideLoading(): void {
        // tslint:disable-next-line:no-console
        console.log('Debug hideloadgin')
    }

    showLoading(): void {
        // tslint:disable-next-line:no-console
        console.log('Debug showloading')
    }
}

interface State {
    name: string
}
