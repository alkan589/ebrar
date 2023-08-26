import React from 'react'
import "./Feed.css"

function Feed() {

    const feed=[
        {
            id:1,
            title:"ahmet",
            description:"frontend developer"
        },
        {
            id:2,
            title:"ebrar",
            description:"ingilizce öğretmeni"
        },
        {
            id:3,
            title:"no name",
            description:"random"
        }
    ]
  return (
    <div className='container'>
        {
        feed.map(feed=>
        <>
            <div className="card">
                <div className='cont'>
                    <div className='title'>
                        {feed.title}
                    </div>
                    <div className='id'>
                        {feed.id}
                    </div>
                </div>
                <div>
                    <p className='description'>{feed.description}</p>
                </div>
            </div>        
        </>
                
            )
        }

    </div>
  )
}

export default Feed