import React from 'react';
import {Link} from 'react-router-dom';

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

const ProfilePost = (props) => {

    let thisPost = props.dateCreated.toLocaleString().substring(0, 10)
    let daysAgo = datediff(parseDate(thisPost), parseDate(today));

    return (
        <> 
            <ul><strong><Link to={`/postdetail/${props.postId}`}>{props.title}</Link></strong>
            <li>
                {props.body}
            </li>
            <li>
                Created: {daysAgo} days ago
               
            </li>
            </ul>
            <br></br>
        </>
    )

};

export default ProfilePost;