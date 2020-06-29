import {Text} from '@react-md/typography'
import React from 'react'
import {UserVM} from '../../core/domain/users/UserVM'
import {Presentable} from '../components/Presentable'
import {Counter} from './Counter'
import {UsersPresenter, UsersView} from './UsersPresenter'

export class UsersScreen extends Presentable<UsersPresenter, State> implements UsersView {
    state: State = {
        users: [],
    }

    async componentDidMount() { await this.presenter.start() }

    hideLoading(): void {
        // tslint:disable-next-line:no-console
        console.log('Debug hideloadgin')
    }

    showLoading(): void {
        // tslint:disable-next-line:no-console
        console.log('Debug showloading')
    }

    showUser(users: UserVM[]): void {
        this.setState({users})
    }

    createUsersList() {
        return this.state.users.map((user) =>
            <div key={user.id}>
                {user.name}
            </div>,
        )
    }

    render() {
        return (
            <>
                <Text type="headline-4" align="center">
                    Users Class
                </Text>
                {this.createUsersList()}
                <Counter
                    initial={0}
                />
            </>
        )
    }
}

interface State {
    users: UserVM[]
}
