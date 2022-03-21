import { useEffect, useState } from "react"

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect( () => {

        setLoading(true)
        
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setData(data)
        })
        .finally(() => setLoading(false))

    }, [url])

    return [loading, data, setData]
}