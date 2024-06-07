import { createContext, useReducer } from "react";
export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});
const postReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "Delete_post") {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    } else if (action.type === "Add_InitialPosts") {
        newPostList = action.payload.posts;
    } else if (action.type === "Add_Post") {
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
}
const PostListProvider = ({ children }) => {
    const [postList, dispatchPost] = useReducer(postReducer, []);

    const deletePost = (postId) => {
        dispatchPost({
            type: "Delete_post",
            payload: {
                postId,

            }
        }
        )
    }
    const addInitialPosts = (posts) => {
        dispatchPost({
            type: "Add_InitialPosts",
            payload: {
                posts
            },
        })
    }
    const addPost = (post) => {
        dispatchPost({
            type: "Add_Post",
            payload: post,
        },
        )
    }
    
    return <PostList.Provider
        value={{ postList, addPost,deletePost }}>
        {children}
    </PostList.Provider>
};
export default PostListProvider;