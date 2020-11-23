import React, {Component} from 'react';
import profileData from "./data/player_profile_data";


class ProfileDetail extends Component {
  
 
    render() {
    
        return (
            <div class="z-depth-5 main">
            <div className="row">
        <div className="col-sm-4 picture">
            <center><img className="circle responsive-img" src="https://data.mothership.tools/mothershiptools-ukprod/wp-content/uploads/2019/01/PressShot.jpg" /></center>
        </div>
        <div className="col-sm-8 details">
            <p className="name"><b>Mark Ronson</b> <i className="material-icons tick">check_circle</i></p>
                <h6>Rye Golf Club(old),UK</h6>
                <div className="row mb-0">
                    <div className="col-4 pl-0 line">
                        <p className="mb-0">Quality</p>
                        <p><b>80</b>
                        </p>
                    </div>
                    <div className="col-4 line">
                        <p className="mb-0">Handicap</p>
                        <p><b>PRO</b></p>
                    </div>
                    <div className="col-4">
                        <p className="mb-0">SG Total</p>
                        <p><b>4.14</b></p>
                    </div>

                </div>
                
          
                
              
        </div>
        <div className="col-12 white-border" >
            <ul>
                <li>
                    <div className="row mb-0">
                        <div className="col-md-2">
                          <h6 className="progress_title">Python</h6>
                        </div>
                        <div className="col-md-10">
                          <div className="progress mt-4">
                            <div className="progress-width progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                  </li>
                    <li>
                        <div className="row mb-0">
                            <div className="col-md-2">
                              <h6 className="progress_title">Python</h6>
                            </div>
                            <div className="col-md-10">
                              <div className="progress mt-4">
                                <div className="progress-width progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                      </li>
                        <li> 
                            <div className="row mb-0">
                                <div className="col-md-2">
                                  <h6 className="progress_title">Python</h6>
                                </div>
                                <div className="col-md-10">
                                  <div className="progress mt-4">
                                    <div className="progress-width progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </div>
                              </div>
                        </li>
            </ul>
           
              </div>
              <div className="col-12 thin-border" >
                Chart II
            </div>
           
        </div>


        </div>

            );
        }
}
 
export default ProfileDetail;