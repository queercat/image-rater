import {ImageWithRating} from "./components/ImageWithRating/ImageWithRating.tsx";
import {MockedImageData} from "./mocked/Mocked.ts";
import {useGetImages} from "./hooks/useGetImages.tsx";
import {LoadingScreen} from "./components/LoadingScreen/LoadingScreen.tsx";

export const App = () => {
    const {imagesData, loading} = useGetImages()

    return <>
        <LoadingScreen show={loading} />
        <ImageWithRating data={`data:text/plain;base64,${MockedImageData}`} rating={4} />
    </>
}