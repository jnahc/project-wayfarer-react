import React from 'react';
import PostDeleteContainer from "../containers/PostDeleteContainer/PostDeleteContainer"

import './PostDetail.css';

// reference https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object
let dateObj = new Date();
let month = dateObj.getMonth() + 1; //months from 1-12
let day = dateObj.getDate();
let year = dateObj.getFullYear();
let today = year + "-" + month + "-" + day;

function parseDate(mgDate) {
    let postDay = mgDate.split('-');
    return new Date(postDay[0], postDay[1], postDay[2]);
}

function datediff(postDate, today) {
    return Math.round((today-postDate)/(1000*60*60*24));
}

const PostDetail = (props) => {

    let thisPost = `${props.post.dateCreated}`.toLocaleString().substring(0, 10);
    let daysAgo = datediff(parseDate(thisPost), parseDate(today));

    if (!props.editPost) {
        return (
            <div className="post-detail"> 
            <h2 className="post-title" id="posts-deets1">{props.title}</h2>
            <h4><span id="posts-deets">Author:</span> {props.postAuthor.firstName} {props.postAuthor.lastName}</h4>
            <p><span id="posts-deets">Created:</span> <span id="cont1"> {daysAgo} days ago</span></p>
            <p><span id="posts-deets">City:</span><span id="cont1"> {props.city.name}</span></p>
            <p><span id="posts-deets">Country:</span><span id="cont1">  {props.city.country}</span></p>
            <p><span id="cont2"> {props.body}</span></p>
            <button className="btn-warning1" id="edit-button" onClick={() => props.onEdit()}>Edit</button>
            <PostDeleteContainer />
        </div>
        )
    } else {
        return (
            <div className="post-detail">
            <h1 className="mb-3" id="words-edit-post">Edit Post</h1>
                <form onSubmit={props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="title" name="title" value={props.title}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="photoUrl">Post Photo URL</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="photoUrl" name="photoUrl" value={props.photoUrl} />
                    </div>
                    <div className="form-group text-fit">
                            <label htmlFor="body">Post:</label>
                            <textarea onChange={props.handleChange} className="form-control form-control-lg" type="text" id="body" name="body" value={props.body} />
                        </div>
                        <div className="form-group text-fit">

                        </div>
                    <button className="btn btn-primary" id="save-button1" type="submit">Save</button>
                </form>     
            </div>  
        );
    };
};

export default PostDetail;