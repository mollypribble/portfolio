import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import MainDisplay from './components/mainDisplay';

function App() {

  useEffect(() => {
    if (typeof window === "undefined") return false;

    const handleBackButton = () => {
      window.history.go(0);
    }

    window.addEventListener("popstate", handleBackButton)
    return () => {
      window.removeEventListener("popstate", handleBackButton)
    }
  }, [])

  const projsArrayURLs = [
    "mindyoga", "active-view-data", "a11y", "hold-the-code"
  ];

  const numProjs = projsArrayURLs.length;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <MainDisplay vhs={true} page={0} projURLs={projsArrayURLs}/>
        </Route>
        <Route exact path="/portfolio">
          <MainDisplay vhs={true} page={0} projURLs={projsArrayURLs}/>
        </Route>
        <Route path="/portfolio/home">
          <MainDisplay vhs={false} page={0} projURLs={projsArrayURLs}/>
        </Route>
        <Route exact path="/portfolio/projects">
          <MainDisplay vhs={false} page={1} projURLs={projsArrayURLs}/>
        </Route>
        <Route path="/portfolio/about">
          <MainDisplay vhs={false} page={2} projURLs={projsArrayURLs}/>
        </Route>
        <Route path={"/portfolio/projects/"+projsArrayURLs[0]}>
          <MainDisplay vhs={false} page={3} numProjs={numProjs} projURLs={projsArrayURLs}/>
        </Route>
        <Route path={"/portfolio/projects/"+projsArrayURLs[1]}>
          <MainDisplay vhs={false} page={4} numProjs={numProjs} projURLs={projsArrayURLs}/>
        </Route>
        {/* <Route path="/portfolio/projects/recruit-right">
          <MainDisplay vhs={false} page={4}/>
        </Route> */}
        {/* <Route path="/portfolio/projects/universal-filtering">
          <MainDisplay vhs={false} page={4}/>
        </Route> */}
        <Route path={"/portfolio/projects/"+projsArrayURLs[2]}>
          <MainDisplay vhs={false} page={5} numProjs={numProjs} projURLs={projsArrayURLs}/>
        </Route>
        <Route path={"/portfolio/projects/"+projsArrayURLs[3]}>
          <MainDisplay vhs={false} page={6} numProjs={numProjs} projURLs={projsArrayURLs}/>
        </Route>

      </Switch>
    </BrowserRouter>
);
}

export default App;
