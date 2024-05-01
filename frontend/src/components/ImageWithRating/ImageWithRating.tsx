import {Card} from "../Card/Card.tsx";
import {Rating} from "react-simple-star-rating";

interface ImageWithRating {
    data: string,
    rating: number
}

export const ImageWithRating = ({data, rating}: ImageWithRating) => {
    return <Card>
        <div className={"flex flex-col gap-2 justify-center items-center w-full h-full"}>
            <img src={data} alt={"Image to be rated."}></img>
            <Rating initialValue={rating} SVGstyle={{ display: 'inline-block' }} readonly />
        </div>
    </Card>
}