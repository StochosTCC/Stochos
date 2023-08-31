import estilos from './Login.module.scss';
import { Component } from 'react';
import './Login.module.scss'


    class App extends Component {
  
        render() {
          return (
        <div>
        <div className={estilos.blocoA} >
          <div>
            <div >
              <h1 className={estilos.titulo}>STOCHOS</h1>
            </div>
      
            <div className={estilos.boasVindas}>
              <p className={estilos.boasVindas}>Welcome to the Website!</p>

              <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
                est, blandit et interdum non, gravida ut dui. Quisque id neque tellus.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Nam vel dui id lorem tincidunt lacinia. In
                sollicitudin erat ligula, sit amet commodo lacus egestas in.
              </p>
              <div >
                <span >
                  <a href="#" >Read More</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      
        <div>
          <div>
            <div >
              <p >Login</p>
            </div>
      
            <div >
              <input type="email"  placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
      
            <div >
              <button >Sign In</button>
              <p>forgot password?</p>
            </div>
      
            <div >doesn't have a accont? click here!</div>
          </div>
        </div>
      </div>
    
    )
}
    }
        export default App;
