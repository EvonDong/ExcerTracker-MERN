import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import RecommendExercise from "./components/recommend-exercise.component";
import Cycle from "./components/cycle.component";
import Plank from "./components/planks.component";
import DumbbellCurl from "./components/dumbbellCurl.component";
import Timer from './components/timer.component';

import Home from './pages/home';

//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/cycling" component={Cycle} />
        <Route path="/dumbbell" component={DumbbellCurl} />
        <Route path="/planks" component={Plank} />
        <div className="wrapper">
          <Route path="/timer" component={Timer} />
          <div className="container">
            <div className="card-body">
            <Route path="/exerciselist" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
            <Route path="/recommendation" component={RecommendExercise} />
            </div>
          </div>
          
        </div>
        
      </Router>

  );
}
//
//</div>
//<Route path="/" exact component={ExercisesList} />
//<Route path="/" exact component={Home} />
export default App;

        //   <Router>
        //   <Switch>
            
        //     <Route path="/user" component={CreateUser} />
        //   </Switch>
        // </Router>
//<Route exact path="/" component={home} />


    