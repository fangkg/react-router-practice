import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Prompt } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import _404Page from "./pages/_404Page";


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123">商品</Link>

        <Switch>
          <Route exact 
            path="/" 
            // children={children} 
            component={HomePage}
            // render={render}
            />
          <Route path="/user" component={UserPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/product/:id" component={Product}/>
          <Route render={() => _404Page}/>
        </Switch>
      </Router>
    </div>
  );
}

function children(props) {
  return <div>children</div>
}

function render(props) {
  return <div>render</div>
}

// function Info() {
//   const match = useRouteMatch();
//   const history = useHistory();
//   const location = useLocation();
//   const _params = useParams();
//   const { params, url} = match;
//   const { id } = params;

//   return (
//     <div>
//       <h3>Search-{id}</h3>
//       <Link to={url + "/detail"}>详情</Link>
//       <Route path={url + "/detail"} component={Detail}/>
//     </div>
//   )
// }


// @withRouter
// class InfoClass extends React.Component {
//   render() {
//     const { params, url } = this.props.match;
//     const { id } = params;

//     return (
//       <div>
//         <h3>Search-{id}</h3>
//         <Link to={url + "/detail"}>详情</Link>
//         <Route path={url + "/detail"} component={Detail}/>
//       </div>
//     )
//   }
// }

// @withRouter
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirm: true}
  }
  render() {
    const { params } = this.props.match;
    const { id } = params;
    return (
      <Prompt when={this.state.confirm} message="Are you sure you want to leave?"/>
    )
  }
}


function Detail({match}) {
  return (
    <div>
      <h3>detail</h3>
    </div>
  )
}

export default App;
