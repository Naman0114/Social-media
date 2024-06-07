import { useContext, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { PostList } from '../store/Context';

let Content = () => {
  const { addPost } = useContext(PostList)
  const navigate=useNavigate();
  const userIdEL = useRef();
  const titleEL = useRef();
  const bodyEL = useRef();
  const reactionEL = useRef();
  const tagsEL = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userID = userIdEL.current.value;
    const title = titleEL.current.value;
    const body = bodyEL.current.value;
    const reaction = reactionEL.current.value;
    const tag = tagsEL.current.value.split('');

    userIdEL.current.value = "";
    titleEL.current.value = "";
    bodyEL.current.value = "";
    reactionEL.current.value = "";
    tagsEL.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          title: title,
          body: body,
          reactions: reaction,
          userId: userID,
          tags: tag,
        })
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate('create-post');
      });
  }

  return <form className="Content" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label"> UserID</label>
      <input type="text" ref={userIdEL} className="form-control" id="title" placeholder='Enter your ID' />
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label"> Post Title</label>
      <input type="text" ref={titleEL} className="form-control" id="title" />
    </div>
    <div className="mb-3">
      <label htmlFor="Message" className="form-label">Post Content</label>
      <textarea type="text" ref={bodyEL} rows="3" className="form-control" id="body" placeholder="what are you thiking?" />
    </div>
    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Post Content</label>
      <input type="text" ref={reactionEL} className="form-control" id="reactions" placeholder="Reactions on your post." />
    </div>
    <div className="mb-3">
      <label htmlFor="hashtags" className="form-label">Tags</label>
      <input type="text" ref={tagsEL} className="form-control" id="postTag" placeholder="tags for your post." />
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
}
export default Content;