import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <div>
        <div>
            Followers: {data.followers}
        </div>
    </div>
  )
}

export default Github