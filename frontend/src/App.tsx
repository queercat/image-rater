import {ImageWithRating} from "./components/ImageWithRating/ImageWithRating.tsx";
import {useGetImages} from "./hooks/useGetImages.tsx";
import {LoadingScreen} from "./components/LoadingScreen/LoadingScreen.tsx";

export const App = () => {
    const {imagesData, loading} = useGetImages()

    const averageValues = (values: number[]) => {
        if (values.length <= 0) return 0

        let sum = 0;

        for (const value of values) {
            sum += value;
        }

        return sum / values.length
    }

    return <>
        <LoadingScreen show={loading} />
        <div className={"grid grid-cols-3 grid-rows-3 gap-4 p-4"}>
            {imagesData?.map((image) => (
                <ImageWithRating key={image.name} data={`data:text/plain;base64,${image.data}`} rating={averageValues(image.rating)} />
            ))}
        </div>
    </>
}