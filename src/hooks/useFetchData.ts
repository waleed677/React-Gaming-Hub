import React, { useEffect, useState } from 'react'
import apiClient from '../services/apiClient';
import { AxiosRequestConfig, CanceledError } from 'axios';


interface FetchResponse<T> {
    count : number,
    results: T[]
}

const useFetchData =  <T>(apiEndPoint: string, requestConfig?: AxiosRequestConfig, deps? : any[]) => {
 
    const[data, setData] = useState<T[]>([]);
    const[errors, setErrors] = useState('')
    const[isLoading, setLoading] = useState(false)


    useEffect(() => {

        const controller = new AbortController()

        setLoading(true)
        apiClient.get<FetchResponse<T>>(apiEndPoint ,{signal: controller.signal, ...requestConfig})
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

    },  deps ? [...deps] : [])

    return { data, errors, isLoading}

}

export default useFetchData