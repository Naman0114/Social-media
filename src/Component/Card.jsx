import { useContext } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { PostList } from "../store/Context";
let Card = ({ post }) => {
    const{deletePost}=useContext(PostList);

    return <div className="card Card" style={{ width: "18rem" }}>
        <div className="title">{post.title}
            <span  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={()=>deletePost(post.id)}>
                <RiDeleteBack2Fill/>
            </span>
        </div>
        <div className="card-body">
            <p className="card-text body">{post.body}</p>
        </div>
        <div>
        {post.tags.map(tag=><span className="badge text-bg-primary tag">{tag}</span>)}
        </div>
        <div className="alert alert-primary reaction" role="alert">
            People {post.reactions} reactions on this post.
        </div>
    </div >
} 
export default Card;