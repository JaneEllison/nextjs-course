import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetchUrl = 'https://nextjs-course-aa8ab-default-rtdb.firebaseio.com/sales.json';

function LastSalesPage(props) {
    const [ sales, setSales ] = useState(props.sales);
    // const [ isLoading, setIsLoading ] = useState(false);

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(
        fetchUrl,
        fetcher
    );

    useEffect(() => {
        if(data) {
            const transformedData = [];

            for(const key in data) {
                transformedData.push({
                    id: key,
                    userName: data[key].username,
                    volume: data[key].volume,
                })
            }

            setSales(transformedData);
        }
    }, [data])

    // useEffect(() => {
    //     setIsLoading(true);
    //
    //     fetch(fetchUrl)
    //         .then(response => response.json())
    //         .then(data => {
    //             const transformedData = [];
    //
    //             for(const key in data) {
    //                 transformedData.push({
    //                     id: key,
    //                     userName: data[key].username,
    //                     volume: data[key].volume,
    //                 })
    //             }
    //
    //             setSales(transformedData);
    //             setIsLoading(false);
    //         });
    // }, []);

    if(error) {
        return (
            <p>Failed to load</p>
        )
    }

    if(!sales && !data) {
        return (
            <p>Loading</p>
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

export async function getStaticProps() {
    const response = await fetch(fetchUrl);
    const data = await response.json();

   const transformedData = [];

   for(const key in data) {
       transformedData.push({
           id: key,
           userName: data[key].username,
           volume: data[key].volume,
       })
   }
   return {
       props: {
           sales: transformedData,
       },
       revalidate: 10,
   }
}

export default LastSalesPage;
