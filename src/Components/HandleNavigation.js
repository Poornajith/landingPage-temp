import {startTransition} from "react";

export default function HandleNavigation(navigate, path) {
    startTransition(()=>{
        navigate(path)
    })
}