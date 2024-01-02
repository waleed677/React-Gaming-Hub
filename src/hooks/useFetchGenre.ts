import React, { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { CanceledError } from 'axios'


interface Genre {
    id: number,
    name: string,
    image_background: string
}

interface FetchGenreResponse {
    count : number,
    results : Genre[]
}

const useFetchGenre = () => {
    
    const[genre, setGenre] = useState<Genre[]>([])
    const[errors, setErrors] = useState('')
    const[isLoading, setLoading] = useState(false)


    useEffect(() => {

        const controller = new AbortController()

        setLoading(true)
        apiClient.get<FetchGenreResponse>('/genres', { signal: controller.signal})
        .then(res => {
            console.log(res)
            setGenre(res.data.results);
            setLoading(false)
        })
        .catch(err => {
            if(err instanceof CanceledError) return ;
            setErrors(err.message);
            setLoading(false)
        })

        return () => controller.abort();

    }, [])


    return {genre, errors, isLoading}

}

export default useFetchGenre