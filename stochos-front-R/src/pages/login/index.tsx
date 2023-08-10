


import { Component } from 'react';
import './Login.module.scss'


//export default function Login(){

    class App extends Component {
  
        render() {
          return (
        <div className="container">
        <div className="logo">
          <div className="logo-content mt-2 ms-2">
            <div className="logo-top">
              <h1 className="fs-2 text-white logo-title">STOCHOS</h1>
            </div>
      
            <div className="logo-center text-white text-start">
              <p className="fs-2">Welcome to the Website!</p>
              <p className="logo-center-text text-break">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
                est, blandit et interdum non, gravida ut dui. Quisque id neque tellus.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Nam vel dui id lorem tincidunt lacinia. In
                sollicitudin erat ligula, sit amet commodo lacus egestas in.
              </p>
              <div className="readme">
                <span className="readme-span">
                  <a href="#" className="readme-ancor">Read More</a>
                </span>
              </div>
            </div>
      
            <div></div>
          </div>
        </div>
      
        <div className="forms-page">
          <div className="forms">
            <div className="form-title">
              <p className="form-title-login fs-1">Login</p>
            </div>
      
            <div className="form-inputs">
              <input type="email" className="form-control form-input" placeholder="Email" />
              <input type="password" className="form-control form-input" placeholder="Password" />
            </div>
      
            <div className="form-buttons">
              <button className="sign-in">Sign In</button>
              <p>forgot password?</p>
            </div>
      
            <div className="form-forgot">doesn't have a accont? click here!</div>
          </div>
        </div>
      </div>
      


    )
}
    }
 //       }

        export default App;
