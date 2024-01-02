import useFetchData from './useFetchData'

export interface Genre {
    id: number,
    name: string,
    image_background: string
}



const useFetchGenre = () => useFetchData<Genre>('/genres')

export default useFetchGenre