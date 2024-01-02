import React, { useEffect, useState } from 'react'
import apiClient from '../services/apiClient';
import { CanceledError } from 'axios';


interface FetchResponse<T> {
    count : number,
    results: T[]
}

const useFetchData =  <T>(apiEndPoint: string) => {
 
    const[data, setData] = useState<T[]>([]);
    const[errors, setErrors] = useState('')
    const[isLoading, setLoading] = useState(false)


    useEffect(() => {

        const controller = new AbortController()

        setLoading(true)
        apiClient.get<FetchResponse<T>>(apiEndPoint, {signal: controller.signal})
        .then(res => {
            setData(res.data.results);
            setLoading(false)
        })
        .catch(err => {
            if(err instanceof CanceledError) return
            setLoading(false)
            setErrors(err.message)
        })


        //cleanup function
        return () => controller.abort()

    }, [])

    return { data, errors, isLoading}

}

export default useFetchData