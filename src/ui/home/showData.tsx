import axios from 'axios'
import React, {useEffect, useState} from 'react'

export const ShowData: React.FC<Props> = (props) => {
    const [data, setData] = useState({email: ''})
    const [status, setStatus] = useState('')

    useEffect(() => {
        if (props.url) {
            setStatus('loading')
            setData({email: ''})
            const loadData = async () => {
                await axios.get(props.url)
                    .then((response) => {
                        setStatus('loaded')
                        setData(response.data)
                    })
                    .catch(() => setStatus('Error'))
            }
            setTimeout(() => { loadData() }, 3000)
        } else {
            setStatus('')
            setData({email: ''})
        }
    }, [props.url])

    return(
        <>
            <br/>
            <span>{status}</span>
            <br/>
            <span>data:{data.email}</span>
        </>
    )
}

interface Props {
    url: any
}
