import useFetchData from './useFetchData'

interface Genre {
    id: number,
    name: string,
    image_background: string
}



const useFetchGenre = () => useFetchData<Genre>('/genres')

export default useFetchGenre