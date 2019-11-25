import React from 'react';

import './PostDetail.css';

// reference https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object
let dateObj = new Date();
let month = dateObj.getMonth() + 1; //months from 1-12
let day = dateObj.getDate();
let year = dateObj.getFullYear();
let today = year + "-" + month + "-" + day;
console.log(today)

function parseDate(mgDate) {
    let postDay = mgDate.split('-');
    return new Date(postDay[0], postDay[1], postDay[2]);
}

function datediff(postDate, today) {
    return Math.round((today-postDate)/(1000*60*60*24));
}

const PostDetail = (props) => {
    console.log(`${props.post.dateCreated}`)

    let thisPost = `${props.post.dateCreated}`.toLocaleString().substring(0, 10);
    let daysAgo = datediff(parseDate(thisPost), parseDate(today));

    return (
        <div className="post-detail"> 
        <h2 className="post-title">{props.post.title}</h2>
        <h4>Author: {props.postAuthor.firstName} {props.postAuthor.lastName}</h4>
        <p>Created: {daysAgo} days ago</p>
        <p>City: {props.city.name}</p>
        <p>Country: {props.city.country}</p>
        <p>{props.post.body}</p>
        </div>
    )

};

export default PostDetail;