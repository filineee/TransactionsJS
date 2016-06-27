/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

            
var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'http://www.youshouldshare.me/wp-content/uploads/2015/03/14264215682890-anigif_enhanced-buzz-13518-1367608452-4.gif'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
    }, {
        id: 5,
        name: 'Chewbacca1',
        phoneNumber: '+251234456784935',
        image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
    }
];




var React = require('react');
var ReactDOM = require('react-dom');

import { createStore } from 'redux' 

require('../sass_files/auth/style.scss');

const login = (state = {'login': false}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state = {'login': true};
        case 'LOGOUT':
            return state.login = {'login': false};
        default:
            return state;
    }
}

const store = createStore (login);
//console.log(store.dispatch({type:'INC'}));
//console.log(store.getState());

//const render = () => {
//    document.body.innerText = store.getState();
//}

//store.subscribe(render);
//render();

//document.addEventListener('click', () => store.dispatch( {type: 'INC'} ))


export function authRender () {
    
//    class LoginPage extends React.Component {
//        
//        constructor(props) {
//          super(props);
//          //this.doit = this.doit.bind(this);
//        }
//          
//        static propTypes = {
//            myFunc: React.PropTypes.func
//        }
//        
//        render() {
//        
//            return (
//                    <section className="container">
//                      <div className="login">
//                        <h1>Обработка транзакций</h1>
//                        <form method="post" onSubmit={this.props.myFunc}>
//                          <p><input type="text" name="login" placeholder="Username or Email" /></p>
//                          <p><input type="password" name="password"  placeholder={this.props.text} /></p>
//                          <p className="submit"><input type="submit" value="Post" name="commit" value="Login" /></p>
//                        </form>
//                      </div>
//                    </section>
//                );
//      }
//    }
    
//    class LoginPage2 extends React.Component {
//        
//        constructor(props) {
//          super(props);
//        }
//        
//        
//        
//        render() {
//        
//            return (
//                    <section className="container">
//                      <div className="login">
//                        <h1>Обработка транзакций</h1>
//                        <form method="post">
//                          <p><input type="text" name="login" placeholder="Username or Email" /></p>
//                          <p><input type="password" name="password"  placeholder="Uau" /></p>
//                          <p className="submit"><input type="submit" value="Post" name="commit" value="Login" /></p>
//                        </form>
//                      </div>
//                    </section>
//                );
//      }
//    }
//    
//    
//    class HelloMessage extends React.Component {
//     
//        static propTypes = {
//            showLogin: React.PropTypes.bool 
//        }
//        
//        static defaultProps = {
//            showLogin: true
//        }
// 
//        constructor(props) {
//          super(props);
//          this.state = {showLogin: this.props.showLogin};
//          this.showSecPAge = this.showSecPAge.bind(this);
//        }
//        
//        showSecPAge (e) {
//            e.preventDefault();
//            this.setState({
//              showLogin: false
//            });
//         window.console.debug(this);
//        }
//      
//      
//      
//      render() {
//            return this.state.showLogin === true ? <LoginPage text="Password" myFunc={this.showSecPAge.bind(this)} /> : <LoginPage2 />
//      }
//    }
    
    //HelloMessage.propTypes = { showLogin: React.PropTypes.bool };
    //HelloMessage.defaultProps = { showLogin: false };
    
//    const Counter = ( {value, onInc, onDec} ) => {
//        return (
//            <div>
//                <h1>{value}</h1>
//                <button onClick={onInc}>+</button>
//                <button onClick={onDec}>-</button>
//            </div>
//            );
//        
//    }
    const LoginPage = ({onLogin}, e) => {
        
        function x(e) {
            window.console.debug(e);
            e.preventDefault();
            onLogin();
        }
        
        
        
        return (
            
                    <section className="container">
                      <div className="login">
                        <h1>Обработка транзакций</h1>
                        <form method="post" onClick= {x}>
                          <p><input type="text" name="login" placeholder="Username or Email" /></p>
                          <p><input type="password" name="password" /></p>
                          <p className="submit"><input type="submit" value="Post" name="commit" value="Login" /></p>
                        </form>
                      </div>
                    </section>
            );
        
    }
    
    const FirstPage = ({onLogin}) => {
        return (
            
                    <section className="container">
                      <div className="login">
                        <h1>Обработка транзакций</h1>
                        <form method="post"  onSubmit= {(e)=>{e.preventDefault(); onLogin()}}>
                          <p><input type="text" name="login" placeholder="Username or Email" /></p>
                          <p><input type="password" name="password" placeholder="bla bla bla"/></p>
                          <p className="submit"><input type="submit" value="Post" name="commit" value="Login" /></p>
                        </form>
                      </div>
                    </section>
            );
        
    }
    
    const render = () => {
        
//         ReactDOM.render(
//            <Counter value={store.getState()} 
//                     onInc={ ()=>{ store.dispatch({type: 'INC'}) } } 
//                     onDec={ ()=>{ store.dispatch({type: 'DEC'}) } } />, 
//                     document.getElementById('react_content')
//        );

        window.console.debug(store.getState());
        if ( store.getState().login === false ) {
            ReactDOM.render(<LoginPage onLogin={ ()=>{ store.dispatch({type: 'LOGIN'}) } }/>, document.getElementById('react_content'));
        } else {
            ReactDOM.render(<FirstPage onLogin={ ()=>{ store.dispatch({type: 'LOGOUT'}) } }/>, document.getElementById('react_content'));
        }
         
    };
    //ReactDOM.render(<HelloMessage name="Sebastian" />, document.getElementById('react_content'));
    //ReactDOM.render(<ContactList />, document.getElementById('react_content'));
    
    store.subscribe (render)
    render();
}

