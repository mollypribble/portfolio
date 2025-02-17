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

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <MainDisplay vhs={true} page={0}/>
        </Route>
        <Route exact path="/portfolio">
          <MainDisplay vhs={true} page={0}/>
        </Route>
        <Route path="/portfolio/home">
          <MainDisplay vhs={false} page={0}/>
        </Route>
        <Route exact path="/portfolio/projects">
          <MainDisplay vhs={false} page={1}/>
        </Route>
        <Route path="/portfolio/projects/mindyoga">
          <MainDisplay vhs={false} page={2}/>
        </Route>
        <Route path="/portfolio/projects/active-view-data">
          <MainDisplay vhs={false} page={3}/>
        </Route>
        {/* <Route path="/portfolio/projects/recruit-right">
          <MainDisplay vhs={false} page={4}/>
        </Route> */}
        <Route path="/portfolio/projects/universal-filtering">
          <MainDisplay vhs={false} page={4}/>
        </Route>
        <Route path="/portfolio/projects/a11y">
          <MainDisplay vhs={false} page={5}/>
        </Route>
        <Route path="/portfolio/projects/hold-the-code">
          <MainDisplay vhs={false} page={6}/>
        </Route>
        <Route path="/portfolio/about">
          <MainDisplay vhs={false} page={7}/>
        </Route>

      </Switch>
    </BrowserRouter>
);
}

export default App;
