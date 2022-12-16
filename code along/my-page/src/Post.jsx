import React, { useState, useEffect } from 'react';

function Post() {

    const [data, setData] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
            const json = await response.json();
            setData(json);
        }

        fetchData();
    }, []);
    
    return (
        <div>
            {data && data.map(item => (
                <div className='border mb-3 mt-3 p-4'>
                    <h5 key={item.id}>{item.title.charAt(0).toUpperCase()+item.title.slice(1)}</h5>
                    <small key={item.id}>{item.body.charAt(0).toUpperCase()+item.body.slice(1)}</small>
                </div>
            ))}
        </div>
    );
}
export default Post;