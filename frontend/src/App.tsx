import {ImageWithRating} from "./components/ImageWithRating/ImageWithRating.tsx";
import {useGetImages} from "./hooks/useGetImages.tsx";
import {LoadingScreen} from "./components/LoadingScreen/LoadingScreen.tsx";

export const App = () => {
    const {imagesData, loading} = useGetImages()

    return <>
        <LoadingScreen show={loading} />
        <ImageWithRating data={`data:text/plain;base64,${imagesData?.data}`} rating={imagesData?.rating.reduce((a, b) => a + b, 0) ?? 0} />
    </>
}