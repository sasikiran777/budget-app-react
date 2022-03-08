import {useEffect, useState} from "react";

export default function useLocalStorage (key, defaultValue) {
    const [value, setValue] = useState(() => {
        let jsonValue = localStorage.getItem(key)
        if (jsonValue)
            return JSON.parse(jsonValue)
        if (typeof defaultValue == 'function') {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
}