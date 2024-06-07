import { useLoaderData } from "react-router-dom";
import Card from './Card';
import Message from './Message';

const Item = () => {
    const postList = useLoaderData();
    return <>
        {postList.length === 0 && <Message />}
        {postList.map((post) => <Card key={post.id} post={post} />)}
    </>
}


export const postLoader = () => {
    return fetch('https://dummyjson.com/posts')
        .then((res) => res.json())
        .then((data) => {
            return data.posts
        })
}

export default Item;