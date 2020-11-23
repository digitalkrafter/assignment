import React, {Component} from 'react';
//import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

//import profileData from "./components/data/player_profile_data";
import Profilecard from "./components/Profilecard";
import ProfileDetail from "./components/ProfileDetail";
//import Routes from "./components/Router";

class App extends Component {

  // state = {
  //   users: [
  //               {"id": "1",
  //               "name": "Ashk"
  //               },
  //               {"id": "2",
  //               "name": "Shyam"
  //               }
  //           ]
  // }
  
  render() {
    
      return (
      
        <div className="container mt-5 d-flex justify-content-center">
        
          {/* <Profilecard /> */}
          {/* <ProfileDetail /> */}
          
          <Router >
              
                    <Route exact path="/"  component={Profilecard} />
                    <Route exact path="/profile_detail" component={ProfileDetail} />
                 
               
            </Router>
      </div>
      

      );
    }
}

export default App;
