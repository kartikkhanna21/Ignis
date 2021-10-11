import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddEvent=()=>{

    let history = useHistory();
    const [post, setPost] = useState({
      title: "",
      body: "",
      datetime:"",
      location:"",
      like:false

    });
    var currentdate = new Date(); 
    var dt = "Last Sync: " + currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds();
    
    console.log(dt);

    const onInputChange = e => {
        
        setPost({ ...post, [e.target.name]: e.target.value,datetime: dt });
    };
  
    const onSubmit = async e => {
        e.preventDefault();
   
        await axios.post("http://localhost:3003/posts", post);
        history.push("/");
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A post</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Title"
                name="title"
                value={post.title}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Description"
                name="body"
                value={post.body}
                onChange={e => onInputChange(e)}
              />
      
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Location"
                    name="location"
                    value={post.location}
                    onChange={e => onInputChange(e)}
                />
            </div>
        
            <button className="btn btn-primary btn-block">Add Post</button>
          </form>
        </div>
      </div>
    );
}

export default AddEvent;