import  { useState, useEffect } from 'react'

export default function FetchData (url) {
    const [dataLog, setDataLog] = useState(null)
    const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        async function fetchDataLogement() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setDataLog(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchDataLogement()
    }, [url])
    return { 
        isLoading, 
        dataLog, 
        error
    }
}