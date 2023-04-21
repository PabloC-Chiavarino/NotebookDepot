import { useEffect, useState } from "react"

const useDelayFetch = (URL) => {
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);
    
    console.log('Loading:',loading, 'Data Recieved:' ,data, 'Error:', error)

    useEffect( () => {
        setLoading(true)
        setTimeout(() => {
            
            let request = async () => {
                try {
                    let response = await fetch(URL)
                    console.log('Request: ', response)
                    let data = await response.json()
                    setData(data)
                    setLoading(false)
                    setError('no error')
                } catch (err) {
                    setError(err)
                    console.log(error)
                }
            }
            request()
        }, 1200)
    
    }, [URL]);
    
    return { loading, data }
}

export default useDelayFetch