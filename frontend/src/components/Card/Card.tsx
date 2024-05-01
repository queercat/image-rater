import {PropsWithChildren} from "react";

export const Card = ({children, ...props}: PropsWithChildren) => {
    return <div className={"p-4 rounded flex"} {...props}>{children}</div>
}
