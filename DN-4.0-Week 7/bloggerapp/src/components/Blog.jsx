import React from 'react'

export const Blog = () => {
    const blogPosts = [
        {'title': 'React Learning','author':'Stephen Biz','message':'Welcome to Learning React!'},
        {'title': 'Installation','author':'Schewzdenier','message':'You can install React from npm.'},
    ];
    return (
        <div>
           {blogPosts.map((postMessage,index)=>
                <div key={index}>
                    <h3>{postMessage.title}</h3>
                    <p>Author: {postMessage.author}</p>
                    <p>{postMessage.message}</p>
                </div>
           )}
        </div>
    )
}
