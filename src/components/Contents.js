import React from "react";
import { Switch, Route } from "react-router-dom";

import Courses from "./Courses";
import Login from "./Login";
import Join from "./Join";
import NotFound from "./NotFound";
import LandingPage from "../components/LandingPage";

import ReactPage from "./ReactPage";
import ReactVideo from "./ReactVideo";
import ReactRouterPage from "./ReactRouterPage";
import ReactRouterVideo from "./ReactRouterVideo";
import MaterialUIPage from "./MaterialUIPage";
import MaterialUIVideo from "./MaterialUIVideo";
import AllVideos from "./AllVideos";

const Contents = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/courses/react" component={ReactPage} />
        <Route exact path="/courses/react-router" component={ReactRouterPage} />
        <Route exact path="/courses/material" component={MaterialUIPage} />
        <Route path="/courses/react/:id" component={ReactVideo} />
        <Route path="/courses/react-router/:id" component={ReactRouterVideo} />
        <Route path="/courses/material/:id" component={MaterialUIVideo} />
        <Route path="/all" component={AllVideos} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Contents;
