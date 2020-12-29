import React from 'react';
import { useHistory } from 'react-router-dom';
import { coursesStyles } from '../style/style';
import { coursesDescriptions } from '../utils/descriptions';
import { Grid, Typography } from '@material-ui/core';
import { CourseCard } from '../components/CourseCard';
//import { firebase } from '../firebase/firebase.util';

const CoursePage = () => {
  const classes = coursesStyles();
  const history = useHistory();

  //動画一覧ページに移動する
  const handleAll = () => {
    history.push('/all');
  };

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection('videoData')
  //     .doc('videos')
  //     .set({
  //       videos: [
  //         {
  //           id: 1,
  //           url: 'https://www.youtube.com/watch?v=HvrIPQ77xRY',
  //           image: 'http://img.youtube.com/vi/HvrIPQ77xRY/mqdefault.jpg',
  //           title: '【AWS 入門】EC2とDockerでHello Worldしよう',
  //           path: '/courses/aws/1',
  //           completed: false,
  //           category: 'aws',
  //         },
  //         {
  //           id: 2,
  //           url: 'https://www.youtube.com/watch?v=Bq-DT30hesA',
  //           image: 'http://img.youtube.com/vi/Bq-DT30hesA/mqdefault.jpg',
  //           title: '【AWS 入門】20分でFARGATEの基本を解説する',
  //           path: '/courses/aws/2',
  //           completed: false,
  //           category: 'aws',
  //         },
  //         {
  //           id: 3,
  //           url: 'https://www.youtube.com/watch?v=2_FxLp9xgmo&t=1531s',
  //           image: 'http://img.youtube.com/vi/2_FxLp9xgmo/mqdefault.jpg',
  //           title:
  //             '【AWS 入門】ECS(Fargate)とECRで楽々コンテナからHelloWorldしよう！',
  //           path: '/courses/aws/3',
  //           completed: false,
  //           category: 'aws',
  //         },
  //         {
  //           id: 4,
  //           url: 'https://www.youtube.com/watch?v=28C3Djjx6ew',
  //           image: 'http://img.youtube.com/vi/28C3Djjx6ew/mqdefault.jpg',
  //           title:
  //             'サブネットマスクとCIDRを超ざっくり解説！【何となく理解するIT】',
  //           path: '/courses/aws/4',
  //           completed: false,
  //           category: 'aws',
  //         },
  //         {
  //           id: 5,
  //           url: 'https://www.youtube.com/watch?v=ecCuyq-Wprc',
  //           image: 'http://img.youtube.com/vi/ecCuyq-Wprc/mqdefault.jpg',
  //           title: 'subnetting is simple',
  //           path: '/courses/aws/5',
  //           completed: false,
  //           category: 'aws',
  //         },
  //         {
  //           id: 6,
  //           url: 'https://www.youtube.com/watch?v=-yz3FV8WliU',
  //           image: 'http://img.youtube.com/vi/-yz3FV8WliU/mqdefault.jpg',
  //           title: 'What is subnetting and why to subnet',
  //           path: '/courses/aws/6',
  //           completed: false,
  //           category: 'aws',
  //         },
  //         {
  //           id: 1,
  //           url: 'https://www.youtube.com/watch?v=gAkwW2tuIqE',
  //           image: 'http://img.youtube.com/vi/gAkwW2tuIqE/mqdefault.jpg',
  //           title: "Learn Docker in 7 Easy Steps - Full Beginner's Tutorial",
  //           path: '/courses/docker/1',
  //           completed: false,
  //           category: 'docker',
  //         },
  //         {
  //           id: 2,
  //           url: 'https://www.youtube.com/watch?v=Gjnup-PuquQ',
  //           image: 'http://img.youtube.com/vi/Gjnup-PuquQ/mqdefault.jpg',
  //           title: 'Docker in 100 Seconds',
  //           path: '/courses/docker/2',
  //           completed: false,
  //           category: 'docker',
  //         },
  //         {
  //           id: 3,
  //           url: 'https://www.youtube.com/watch?v=zJ6WbK9zFpI',
  //           image: 'http://img.youtube.com/vi/zJ6WbK9zFpI/mqdefault.jpg',
  //           title: 'Docker for Beginners: Full Free Course!',
  //           path: '/courses/docker/3',
  //           completed: false,
  //           category: 'docker',
  //         },
  //         {
  //           id: 1,
  //           url: 'https://www.youtube.com/watch?v=meofoNuK3vo&t=133s',
  //           image: 'http://img.youtube.com/vi/meofoNuK3vo/mqdefault.jpg',
  //           title: 'Firebase Hosting をウェブで始めよう！ - Firecasts',
  //           path: '/courses/firebase/1',
  //           completed: false,
  //           category: 'firebase',
  //         },
  //         {
  //           id: 2,
  //           url: 'https://www.youtube.com/watch?v=unr4s3jd9qA&t=329s',
  //           image: 'http://img.youtube.com/vi/unr4s3jd9qA/mqdefault.jpg',
  //           title:
  //             'Firebase React Authentication Tutorial For Beginners - Private Route With Hooks',
  //           path: '/courses/firebase/2',
  //           completed: false,
  //           category: 'firebase',
  //         },
  //         {
  //           id: 3,
  //           url: 'https://www.youtube.com/watch?v=zQyrwxMPm88',
  //           image: 'http://img.youtube.com/vi/zQyrwxMPm88/mqdefault.jpg',
  //           title: 'I built a chat app in 7 minutes with React & Firebase',
  //           path: '/courses/firebase/3',
  //           completed: false,
  //           category: 'firebase',
  //         },
  //         {
  //           id: 4,
  //           url: 'https://www.youtube.com/watch?v=mmmaeHBCTOw',
  //           image: 'http://img.youtube.com/vi/mmmaeHBCTOw/mqdefault.jpg',
  //           title: 'Firebase Hosting Tutorial #1 - Intro & Installation',
  //           path: '/courses/firebase/4',
  //           completed: false,
  //           category: 'firebase',
  //         },
  //         {
  //           id: 5,
  //           url: 'https://www.youtube.com/watch?v=ApG8L2RKrSI&t=350s',
  //           image: 'http://img.youtube.com/vi/ApG8L2RKrSI/mqdefault.jpg',
  //           title: 'Web の Firebase 匿名認証を開始するには- Firecasts',
  //           path: '/courses/firebase/5',
  //           completed: false,
  //           category: 'firebase',
  //         },
  //         {
  //           id: 6,
  //           url: 'https://www.youtube.com/watch?v=kX8by4eCyG4',
  //           image: 'http://img.youtube.com/vi/kX8by4eCyG4/mqdefault.jpg',
  //           title: 'Server-side Firebase Authentication Using Express JS',
  //           path: '/courses/firebase/6',
  //           completed: false,
  //           category: 'firebase',
  //         },
  //         {
  //           id: 7,
  //           url: 'https://www.youtube.com/watch?v=8cOlDAxFmxM&t=114s',
  //           image: 'http://img.youtube.com/vi/8cOlDAxFmxM/mqdefault.jpg',
  //           title: 'Firebase Authentication State Persistence',
  //           path: '/courses/firebase/7',
  //           completed: false,
  //           category: 'firebase',
  //         },
  //         {
  //           id: 1,
  //           url: 'https://www.youtube.com/watch?v=_ApRMRGI-6g',
  //           image: 'http://img.youtube.com/vi/_ApRMRGI-6g/mqdefault.jpg',
  //           title: "Heres how JavaScript's Nested Object Destructuring works",
  //           path: '/courses/javascript/1',
  //           completed: false,
  //           category: 'javascript',
  //         },
  //         {
  //           id: 2,
  //           url: 'https://www.youtube.com/watch?v=NIq3qLaHCIs&t=374s',
  //           image: 'http://img.youtube.com/vi/NIq3qLaHCIs/mqdefault.jpg',
  //           title:
  //             'Why Is Array/Object Destructuring So Useful And How To Use It',
  //           path: '/courses/javascript/2',
  //           completed: false,
  //           category: 'javascript',
  //         },
  //         {
  //           id: 3,
  //           url: 'https://www.youtube.com/watch?v=-vR3a11Wzt0',
  //           image: 'http://img.youtube.com/vi/-vR3a11Wzt0/mqdefault.jpg',
  //           title: 'Destructuring in ES6 - Beau teaches JavaScript',
  //           path: '/courses/javascript/3',
  //           completed: false,
  //           category: 'javascript',
  //         },
  //         {
  //           id: 4,
  //           url: 'https://www.youtube.com/watch?v=iLx4ma8ZqvQ&t=193s',
  //           image: 'http://img.youtube.com/vi/iLx4ma8ZqvQ/mqdefault.jpg',
  //           title:
  //             '...spread operator and rest operator - Beau teaches JavaScript',
  //           path: '/courses/javascript/4',
  //           completed: false,
  //           category: 'javascript',
  //         },
  //         {
  //           id: 5,
  //           url: 'https://www.youtube.com/watch?v=V_Kr9OSfDeU',
  //           image: 'http://img.youtube.com/vi/V_Kr9OSfDeU/mqdefault.jpg',
  //           title: 'JavaScript Async Await',
  //           path: '/courses/javascript/5',
  //           completed: false,
  //           category: 'javascript',
  //         },
  //         {
  //           id: 6,
  //           url: 'https://www.youtube.com/watch?v=Bv_5Zv5c-Ts',
  //           image: 'http://img.youtube.com/vi/Bv_5Zv5c-Ts/mqdefault.jpg',
  //           title:
  //             'JavaScript: Understanding the Weird Parts - The First 3.5 Hours',
  //           path: '/courses/javascript/6',
  //           completed: false,
  //           category: 'javascript',
  //         },
  //         {
  //           id: 1,
  //           url: 'https://www.youtube.com/watch?v=tKzSnjWPtEw',
  //           image: 'http://img.youtube.com/vi/tKzSnjWPtEw/mqdefault.jpg',
  //           title: 'React + Material UI #2: Actually coding a UX design',
  //           path: '/courses/material/1',
  //           completed: false,
  //           category: 'material',
  //         },
  //         {
  //           id: 2,
  //           url: 'https://www.youtube.com/watch?v=3HAARPCabUo',
  //           image: 'http://img.youtube.com/vi/3HAARPCabUo/mqdefault.jpg',
  //           title:
  //             'React & Material UI #26: Header (Appbar + Toolbar) & React Router',
  //           path: '/courses/material/2',
  //           completed: false,
  //           category: 'material',
  //         },
  //         {
  //           id: 3,
  //           url: 'https://www.youtube.com/watch?v=zT62eVxShsY',
  //           image: 'http://img.youtube.com/vi/zT62eVxShsY/mqdefault.jpg',
  //           title: 'Multi Step Form With React & Material UI',
  //           path: '/courses/material/3',
  //           completed: false,
  //           category: 'material',
  //         },
  //         {
  //           id: 4,
  //           url: 'https://www.youtube.com/watch?v=rK0Lz8x7npA',
  //           image: 'http://img.youtube.com/vi/rK0Lz8x7npA/mqdefault.jpg',
  //           title: 'Build landing page with React and Material UI.',
  //           path: '/courses/material/4',
  //           completed: false,
  //           category: 'material',
  //         },
  //         {
  //           id: 5,
  //           url: 'https://www.youtube.com/watch?v=Jkj_XP80h1k',
  //           image: 'http://img.youtube.com/vi/Jkj_XP80h1k/mqdefault.jpg',
  //           title: 'Material-UI + React Router - #7 Navigation Menu',
  //           path: '/courses/material/5',
  //           completed: false,
  //           category: 'material',
  //         },
  //         {
  //           id: 6,
  //           url: 'https://www.youtube.com/watch?v=DJ1_CKs_LPI',
  //           image: 'http://img.youtube.com/vi/DJ1_CKs_LPI/mqdefault.jpg',
  //           title: 'Material UI React - Build a Blog page',
  //           path: '/courses/material/6',
  //           completed: false,
  //           category: 'material',
  //         },
  //         {
  //           id: 7,
  //           url: 'https://www.youtube.com/watch?v=vyJU9efvUtQ',
  //           image: 'http://img.youtube.com/vi/vyJU9efvUtQ/mqdefault.jpg',
  //           title: 'Material UI React Tutorial',
  //           path: '/courses/material/7',
  //           completed: false,
  //           category: 'material',
  //         },
  //         {
  //           id: 8,
  //           url: 'https://www.youtube.com/watch?v=-XKaSCU0ZLM',
  //           image: 'http://img.youtube.com/vi/-XKaSCU0ZLM/mqdefault.jpg',
  //           title: 'How to Design a Perfect React Material UI Form',
  //           path: '/courses/material/8',
  //           completed: false,
  //           category: 'material',
  //         },
  //         {
  //           id: 9,
  //           url: 'https://www.youtube.com/watch?v=jnQ1-XW7KNY',
  //           image: 'http://img.youtube.com/vi/jnQ1-XW7KNY/mqdefault.jpg',
  //           title: 'React Material UI Table with Paging Sorting and Filtering',
  //           path: '/courses/material/9',
  //           completed: false,
  //           category: 'material',
  //         },
  //         {
  //           id: 1,
  //           url: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
  //           image: 'http://img.youtube.com/vi/L72fhGm1tfE/mqdefault.jpg',
  //           title: 'Express JS Crash Course',
  //           path: '/courses/node/1',
  //           completed: false,
  //           category: 'node',
  //         },
  //         {
  //           id: 2,
  //           url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
  //           image: 'http://img.youtube.com/vi/fBNz5xF-Kx4/mqdefault.jpg',
  //           title: 'Node.js Crash Course',
  //           path: '/courses/node/2',
  //           completed: false,
  //           category: 'node',
  //         },
  //         {
  //           id: 3,
  //           url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48',
  //           image: 'http://img.youtube.com/vi/pKd0Rpw7O48/mqdefault.jpg',
  //           title: 'How to build a REST API with Node js & Express',
  //           path: '/courses/node/3',
  //           completed: false,
  //           category: 'node',
  //         },
  //         {
  //           id: 4,
  //           url: 'https://www.youtube.com/watch?v=lY6icfhap2o',
  //           image: 'http://img.youtube.com/vi/lY6icfhap2o/mqdefault.jpg',
  //           title: 'Learn Express Middleware In 14 Minutes',
  //           path: '/courses/node/4',
  //           completed: false,
  //           category: 'node',
  //         },
  //         {
  //           id: 1,
  //           url: 'https://www.youtube.com/watch?v=Law7wfdg_ls&t=15s',
  //           image: 'http://img.youtube.com/vi/Law7wfdg_ls/mqdefault.jpg',
  //           title: 'React Router Tutorial | React For Beginners',
  //           path: '/courses/router/1',
  //           completed: false,
  //           category: 'router',
  //         },
  //         {
  //           id: 2,
  //           url: 'https://www.youtube.com/watch?v=Myq2ssDQoDw',
  //           image: 'http://img.youtube.com/vi/Myq2ssDQoDw/mqdefault.jpg',
  //           title: 'Learn React Router in 10 Minutes! | React Tutorials',
  //           path: '/courses/router/2',
  //           completed: false,
  //           category: 'router',
  //         },
  //         {
  //           id: 3,
  //           url: 'https://www.youtube.com/watch?v=CZeulkp1ClA',
  //           image: 'http://img.youtube.com/vi/CZeulkp1ClA/mqdefault.jpg',
  //           title:
  //             'React router with hooks ( useHistory useParam useLocation )',
  //           path: '/courses/router/3',
  //           completed: false,
  //           category: 'router',
  //         },
  //         {
  //           id: 4,
  //           url: 'https://www.youtube.com/watch?v=eofpZPRUnP8',
  //           image: 'http://img.youtube.com/vi/eofpZPRUnP8/mqdefault.jpg',
  //           title: 'ReactJS Basics - #15 React Router - Route Setup',
  //           path: '/courses/router/4',
  //           completed: false,
  //           category: 'router',
  //         },
  //         {
  //           id: 5,
  //           url: 'https://www.youtube.com/watch?v=hjR-ZveXBpQ',
  //           image: 'http://img.youtube.com/vi/hjR-ZveXBpQ/mqdefault.jpg',
  //           title:
  //             'ReactJS Basics - #16 React Router - Navigation & Parameters',
  //           path: '/courses/router/5',
  //           completed: false,
  //           category: 'router',
  //         },
  //         {
  //           id: 6,
  //           url: 'https://www.youtube.com/watch?v=lCbcB9AU-98',
  //           image: 'http://img.youtube.com/vi/lCbcB9AU-98/mqdefault.jpg',
  //           title: 'Intro to React Router for Beginners (Multi-Page Apps)',
  //           path: '/courses/router/6',
  //           completed: false,
  //           category: 'router',
  //         },
  //         {
  //           id: 7,
  //           url: 'https://www.youtube.com/watch?v=yQf1KbGiwiI',
  //           image: 'http://img.youtube.com/vi/yQf1KbGiwiI/mqdefault.jpg',
  //           title: 'React Router Tutorial - Setup in 5 Minutes',
  //           path: '/courses/router/7',
  //           completed: false,
  //           category: 'router',
  //         },
  //         {
  //           id: 8,
  //           url: 'https://www.youtube.com/watch?v=110dW3l5GQY',
  //           image: 'http://img.youtube.com/vi/110dW3l5GQY/mqdefault.jpg',
  //           title: 'React Router Tutorial',
  //           path: '/courses/router/8',
  //           completed: false,
  //           category: 'router',
  //         },
  //         {
  //           id: 9,
  //           url: 'https://www.youtube.com/watch?v=Y0-qdp-XBJg',
  //           image: 'http://img.youtube.com/vi/Y0-qdp-XBJg/mqdefault.jpg',
  //           title: 'Protected Routes in React using React Router',
  //           path: '/courses/router/9',
  //           completed: false,
  //           category: 'router',
  //         },
  //         {
  //           id: 1,
  //           url: 'https://www.youtube.com/watch?v=ufodJVcpmps&t=2068s',
  //           image: 'http://img.youtube.com/vi/ufodJVcpmps/mqdefault.jpg',
  //           title:
  //             'Build a Movie APP With React | React Tutorial for Beginners',
  //           path: '/courses/react/1',
  //           completed: false,
  //           category: 'react',
  //         },
  //         {
  //           id: 2,
  //           url: 'https://www.youtube.com/watch?v=GuA0_Z1llYU&t=1465s',
  //           image: 'http://img.youtube.com/vi/GuA0_Z1llYU/mqdefault.jpg',
  //           title:
  //             'Build a Weather App in React JS | React JS beginner Tutorial',
  //           path: '/courses/react/2',
  //           completed: false,
  //           category: 'react',
  //         },
  //         {
  //           id: 3,
  //           url: 'https://www.youtube.com/watch?v=U9T6YkEDkMo',
  //           image: 'http://img.youtube.com/vi/U9T6YkEDkMo/mqdefault.jpg',
  //           title:
  //             'Build a Recipe App With React | React Tutorial For Beginners',
  //           path: '/courses/react/3',
  //           completed: false,
  //           category: 'react',
  //         },
  //         {
  //           id: 4,
  //           url: 'https://www.youtube.com/watch?v=hQAHSlTtcmY',
  //           image: 'http://img.youtube.com/vi/hQAHSlTtcmY/mqdefault.jpg',
  //           title: 'Learn React In 30 Minutes',
  //           path: '/courses/react/4',
  //           completed: false,
  //           category: 'react',
  //         },
  //         {
  //           id: 5,
  //           url: 'https://www.youtube.com/watch?v=DLX62G4lc44',
  //           image: 'http://img.youtube.com/vi/DLX62G4lc44/mqdefault.jpg',
  //           title: 'Learn React JS - Full Course for Beginners - Tutorial 2019',
  //           path: '/courses/react/5',
  //           completed: false,
  //           category: 'react',
  //         },
  //         {
  //           id: 6,
  //           url: 'https://www.youtube.com/watch?v=khJlrj3Y6Ls&t=124s',
  //           image: 'http://img.youtube.com/vi/khJlrj3Y6Ls/mqdefault.jpg',
  //           title:
  //             'Build a COVID-19 Tracker Application - React JS Project (Hooks, Material UI, Charts js)',
  //           path: '/courses/react/6',
  //           completed: false,
  //           category: 'react',
  //         },
  //         {
  //           id: 7,
  //           url: 'https://www.youtube.com/watch?v=VPVzx1ZOVuw&t=1711s',
  //           image: 'http://img.youtube.com/vi/VPVzx1ZOVuw/mqdefault.jpg',
  //           title: 'Build a YouTube Clone Application Using React',
  //           path: '/courses/react/7',
  //           completed: false,
  //           category: 'react',
  //         },
  //         {
  //           id: 8,
  //           url: 'https://www.youtube.com/watch?v=o5CdCETh8cQ&t=1555s',
  //           image: 'http://img.youtube.com/vi/o5CdCETh8cQ/mqdefault.jpg',
  //           title:
  //             'React Fetch API Data | Build and Deploy a Real Advice App Project',
  //           path: '/courses/react/8',
  //           completed: false,
  //           category: 'react',
  //         },
  //         {
  //           id: 9,
  //           url: 'https://www.youtube.com/watch?v=YaioUnMw0mo',
  //           image: 'http://img.youtube.com/vi/YaioUnMw0mo/mqdefault.jpg',
  //           title: 'React App - Breaking Bad API',
  //           path: '/courses/react/9',
  //           completed: false,
  //           category: 'react',
  //         },
  //         {
  //           id: 1,
  //           url: 'https://www.youtube.com/watch?v=zQnBQ4tB3ZA',
  //           image: 'http://img.youtube.com/vi/zQnBQ4tB3ZA/mqdefault.jpg',
  //           title: 'TypeScript in 100 Seconds',
  //           path: '/courses/typescript/1',
  //           completed: false,
  //           category: 'typescript',
  //         },
  //         {
  //           id: 2,
  //           url: 'https://www.youtube.com/watch?v=BwuLxPH8IDs&t=3341s',
  //           image: 'http://img.youtube.com/vi/BwuLxPH8IDs/mqdefault.jpg',
  //           title:
  //             'TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!',
  //           path: '/courses/typescript/2',
  //           completed: false,
  //           category: 'typescript',
  //         },
  //         {
  //           id: 3,
  //           url: 'https://www.youtube.com/watch?v=WBPrJSw7yQA&t=1397s',
  //           image: 'http://img.youtube.com/vi/WBPrJSw7yQA/mqdefault.jpg',
  //           title: 'Learn TypeScript in 50 Minutes - Tutorial for Beginners',
  //           path: '/courses/typescript/3',
  //           completed: false,
  //           category: 'typescript',
  //         },
  //         {
  //           id: 4,
  //           url: 'https://www.youtube.com/watch?v=1UcLoOD1lRM&t=282s',
  //           image: 'http://img.youtube.com/vi/1UcLoOD1lRM/mqdefault.jpg',
  //           title: 'Using Typescript in Node.js',
  //           path: '/courses/typescript/4',
  //           completed: false,
  //           category: 'typescript',
  //         },
  //         {
  //           id: 5,
  //           url: 'https://www.youtube.com/watch?v=Z5iWr6Srsj8&t=1204s',
  //           image: 'http://img.youtube.com/vi/Z5iWr6Srsj8/mqdefault.jpg',
  //           title: 'React Typescript Tutorial',
  //           path: '/courses/typescript/5',
  //           completed: false,
  //           category: 'typescript',
  //         },
  //         {
  //           id: 6,
  //           url: 'https://www.youtube.com/watch?v=F2JCjVSZlG0&t=3204s',
  //           image: 'http://img.youtube.com/vi/F2JCjVSZlG0/mqdefault.jpg',
  //           title: 'React / Typescript Tutorial - Build a Quiz App',
  //           path: '/courses/typescript/6',
  //           completed: false,
  //           category: 'typescript',
  //         },
  //       ],
  //     });
  // }, []);

  // console.log('set');

  return (
    <Grid container className={classes.container}>
      <Typography className={classes.subTitle} variant="h6">
        教材をこなして進捗率を上げながら楽しく学んでいきましょう。
        <p> 現在50本以上の動画を用意しております。</p>
        <p>
          <span className={classes.all} onClick={handleAll}>
            全ての動画一覧
          </span>
        </p>
      </Typography>
      <Grid item sm={2} />
      <Grid item sm={8}>
        <Grid container justify="space-evenly">
          {coursesDescriptions.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              image={course.image}
              path={course.path}
            />
          ))}
        </Grid>
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
};

export { CoursePage };
