import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import firebase from "../firebase/firebase.util";
import { VideoContext } from "../context/video-context";
import { Box } from "@material-ui/core";

export const HeaderMenu = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setCurrentUser, guestUser, setGuestUser } = useContext(VideoContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //コース一覧ページに移動する
  const handelCoursesRoute = () => {
    history.push("/courses");
    setAnchorEl(null);
  };

  //新規登録ページに移動する
  const handelSignUpRoute = () => {
    history.push("/sign");
    setAnchorEl(null);
  };

  //ログインページに移動する
  const handelAllVideoRoute = () => {
    history.push("/all");
    setAnchorEl(null);
  };

  //ログアウト機能
  //セッションも終わる
  const handleLogout = () => {
    try {
      firebase
        .auth()
        .signOut()
        .then(() => {
          setCurrentUser(null);
          setGuestUser(null);
          sessionStorage.clear();
          history.push("/");
        });
      setAnchorEl(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {guestUser ? (
        <Box>
          <MenuIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          ></MenuIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handelCoursesRoute}>トップ</MenuItem>
            <MenuItem onClick={handelAllVideoRoute}>動画一覧</MenuItem>
            <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
            <MenuItem onClick={handelSignUpRoute}>新規登録</MenuItem>
          </Menu>
        </Box>
      ) : (
        <Box>
          <MenuIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          ></MenuIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handelCoursesRoute}>トップ</MenuItem>
            <MenuItem onClick={handelAllVideoRoute}>動画一覧</MenuItem>
            <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
          </Menu>
        </Box>
      )}
    </div>
  );
};
