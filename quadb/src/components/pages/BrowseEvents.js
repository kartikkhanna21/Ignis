import React, { useEffect, useState } from "react";
import axios from "axios";
import Heart from "react-animated-heart";

const BrowseEvents = () => {
    const [posts, setpost] = useState([]);
    const [isClick, setClick] = useState(false);
    useEffect(() => {
        loadposts();
    }, [])//[] empty array means function runs only once else it will run infinite times

    const loadposts = async () => {
        const result = await axios.get('http://localhost:3003/posts'); //await is written so that this line of code runs until it is completed
        setpost(result.data);
    }

    const heart=(id)=>{
        const elementsIndex = posts.findIndex(element => element.id == id );
        let newArray = [...posts];
        newArray[elementsIndex] = {...newArray[elementsIndex], like: !newArray[elementsIndex].like};
        setpost(newArray);
    }
    return (
        <div className="container">
            <h1>Events</h1>
            {posts.map((posts,index)=>(
                <div className="card mb-4" key={posts.id}>
               {/*  <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title">{posts.title}</h5>
                    <p className="card-text">{posts.body}</p>
                    <p className="card-text">{posts.datetime}</p>
                    <p className="card-text">{posts.location}</p>
                    <Heart isClick={posts.like} onClick={() => heart(posts.id) }/>
           
                    
                   
                </div>
            </div>
            ))}
            

        </div>
    )
}

export default BrowseEvents;