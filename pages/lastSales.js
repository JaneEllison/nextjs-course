import { useEffect, useState } from 'react';
const fetchUrl = 'https://nextjs-course-aa8ab-default-rtdb.firebaseio.com/sales.json';

function LastSalesPage() {
    const [ sales, setSales ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                const transformedData = [];

                for(const key in data) {
                    transformedData.push({
                        id: key,
                        userName: data[key].username,
                        volume: data[key].volume,
                    })
                }

                setSales(transformedData);
                setIsLoading(false);
            });
    }, []);

    if(isLoading) {
        return (
            <p>Loading</p>
        )
    }

    if(!sales) {
        return (
            <p>No data</p>
        )
    }

    return (
        <ul>
            {sales.map(sale => (
                <li key={sale.id}>
                    {sale.userName} - ${sale.volume}
                </li>
            ))}
        </ul>
    )
}

export default LastSalesPage;
