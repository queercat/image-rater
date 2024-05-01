import {useCallback, useEffect, useState} from "react";

export const useGetImages = () => {
    const api = "http://localhost:3000/api/images/"

    const [imagesData, setImagesData] = useState<{
       data: string,
       name: string,
       rating: number[]
    }[]>()
    const [loading, setLoading] = useState(true)

    const getImages = useCallback(async () => {
        try {
            const response = await fetch(api)
            const data = await response.json()

            setImagesData(data)
        } catch (error) {} finally {
            setLoading(false)
        }
    }, [api])

    useEffect(() => {
        void getImages()
    }, [getImages]);

    return {imagesData, loading}
}