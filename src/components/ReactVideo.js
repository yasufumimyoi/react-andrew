import React, { useContext } from "react";
import ReactPlayer from "react-player";
import Checkbox from "@material-ui/core/Checkbox";
import VideoContext from "../context/video-context";

const ReactVideo = (props) => {
  const { RVideo, setRVideo } = useContext(VideoContext);
  const { id } = props.match.params;
  const matchedVideo = RVideo.filter((video) => video.id == id);

  const handelToggle = (id) => {
    const newItems = RVideo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setRVideo(newItems);
  };
  return (
    <div>
      <ReactPlayer
        controls
        onEnded={() => handelToggle(matchedVideo[0].id)}
        url={matchedVideo[0].url}
        width="1200px"
        height="700px"
      />
      <p>{matchedVideo[0].title}</p>
      <span>Completed:</span>
      <Checkbox
        checked={matchedVideo[0].completed}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};

export default ReactVideo;
