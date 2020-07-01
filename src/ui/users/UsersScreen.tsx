import {Text} from '@react-md/typography'
import React from 'react'
import {UserVM} from '../../core/domain/users/UserVM'
import {Presentable} from '../components/Presentable'
import {Table} from '../components/Table'
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

    render() {
        return (
            <>
                <Text type="headline-4" align="center">
                    Users Class
                </Text>
                <div className="table-container">
                    <Table
                        data={this.state.users}
                        columns={usersColumns}
                    />
                </div>
            </>
        )
    }
}

interface State {
    users: UserVM[]
}

const usersColumns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        cell: (row: any) => <CustomMaterialMenu row={row} onDeleteRow={deleteHandler}/>,
        allowOverflow: true,
        button: true,
        width: '56px',
    },
]

const CustomMaterialMenu: React.FC<Props> = (props) => {
    const deleted = () => { props.onDeleteRow(props.row) }

    return(
        <div onClick={deleted}>
            ...
        </div>
    )
}

const deleteHandler = (test: any) => {
    // tslint:disable-next-line:no-console
    console.log('Debug user', test)
}

interface Props {
    row: any
    onDeleteRow: (ar: any) => void
}
