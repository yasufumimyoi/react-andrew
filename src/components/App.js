import React, { useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Header from "./Header";
import Contents from "./Contents";
import VideoContext from "../context/video-context";
import firebase from "../firebase/firebase.util";

const App = () => {
  const [MVideo, setMVideo] = useState([]);
  const [RVideo, setRVideo] = useState([]);
  const [RRVideo, setRRVideo] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid);
      }
    });
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection("videos")
      .get()
      .then((video) => {
        let temp = [];
        video.forEach((info) => {
          let data = info.data();
          temp.push({ ...data });
        });
        setMVideo(temp[0].material);
        setRVideo(temp[1].react);
        setRRVideo(temp[2].router);
      });
  }, []);

  console.log(user);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc("iTlKBpsYWoekOrTGbc2krmbASak2")
      .set({
        MVideo,
        RVideo,
        RRVideo,
      });
  });

  return (
    <VideoContext.Provider
      value={{
        MVideo,
        setMVideo,
        RVideo,
        setRVideo,
        RRVideo,
        setRRVideo,
        user,
        setUser,
      }}
    >
      <Router>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid container>
            <Grid item sm={1} />
            <Grid item xs={12} sm={10}>
              <Grid container>
                <Contents />
              </Grid>
              <Grid item sm={1} />
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </VideoContext.Provider>
  );
};

export default App;
