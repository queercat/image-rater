import {useCallback, useEffect, useState} from "react";

export const useGetImages = () => {
    const api = "localhost:5431"

    const [imagesData, setImagesData] = useState([])
    const [loading, setLoading] = useState(true)

    const getImages = useCallback(async () => {
        try {
            const response = await fetch("api/images")
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