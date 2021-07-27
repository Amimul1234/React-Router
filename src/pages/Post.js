import React from 'react';

import {useParams} from "react-router-dom"

const Post = ({match}) => {
    const {id} = useParams();
    return <h2>Id is = {id}</h2>;
};

export default Post;