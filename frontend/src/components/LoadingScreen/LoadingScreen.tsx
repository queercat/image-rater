import {memo} from "react";

interface LoadingScreenProps {
    show: boolean
}

export const LoadingScreen = memo(({show}: LoadingScreenProps) => {
    if (!show) {return <></>}

    return <div className={"min-w-[100dvw] min-h-[100dvh] absolute bg-black z-[999]"}>
        <div className={"flex justify-center items-center h-min-[100dvh]"}>
            <img src={"https://j.gifs.com/k81zB6.gif"} alt={"loading-gif"}/>
        </div>
    </div>
})