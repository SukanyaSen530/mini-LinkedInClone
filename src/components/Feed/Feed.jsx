import React, { useState, useEffect } from "react";

import "./Feed.css";

import CreateIcon from "@material-ui/icons/Create";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventIcon from "@material-ui/icons/Event";
import SubjectIcon from "@material-ui/icons/Subject";

import FlipMove from "react-flip-move";

import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

import { db, firebase } from "../../config/firebase";

import InputOption from "../common/InputOption";
import Post from "../Post/Post";

function Feed() {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <section className="feed">
      <div className="feed_inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            title="Photo"
            Icon={AddPhotoAlternateIcon}
            color="#70B5F9"
          />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOption title="Event" Icon={EventIcon} color="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={SubjectIcon}
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts?.map(
          ({
            id,
            data: { name, description, message, photoURL, timestamp },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoURL}
              time={timestamp}
            />
          )
        )}
      </FlipMove>
    </section>
  );
}

export default Feed;
