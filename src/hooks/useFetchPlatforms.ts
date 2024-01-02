import React from 'react'
import useFetchData from './useFetchData'

interface Platform {
    id: number
    name : string
    slug: string
}

const useFetchPlatforms = () => useFetchData<Platform>('/platforms/lists/parents')

export default useFetchPlatforms