import React from 'react'
// import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/yonko-ishan')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className='flex justify-center content-center flex-col bg-gray-600 text-white text-3xl m-4 p-4 text-center'>Github Follower:{data.followers}
    <img className='flex self-center m-2 w-80 h-80' src={data.avatar_url} alt="Github picture" />
    </div>
  )
}

export default Github
