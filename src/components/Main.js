import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { login, logout, signup, deleteUser, postUser, getDrinks, postDrink } from '../redux/ActionCreators';
import Header from './Header';
import ManageUsers from './ManageUsers'
import ContactUs from './ContactUs';
import Home from './Home';
import Menu from './Menu';



const mapStateToProps = state => {
  return {
    drinks: state.drinks,
    comments: state.comments,
    members: state.members,
    user: state.user,
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user)),
    deleteUser: (user) => dispatch(deleteUser(user)),
    postUser: (userInfo) => dispatch(postUser(userInfo)),
    getDrinks: (user) => dispatch(getDrinks(user)),
    postDrink: (drink) => dispatch(postDrink(drink)),
});

class Main extends Component {
	 componentDidMount() {
	 	this.props.getDrinks();
	 }

	render() {
	return (
	  <div>
	    <Header login = {this.props.login}
	            user = {this.props.user}
	            logout = {this.props.logout}
	            signup = {this.props.signup}
	    />
	    <Switch>
	      <Route path="/home" component = {Home}/>
	      <Route path="/menu" component = {() => <Menu user = {this.props.user}
	                                                   drinks = {this.props.drinks}
	                                                   postDrink = {this.props.postDrink}/>}/>
	      <Route exact path="/manageusers" component={() => <ManageUsers users = {this.props.users} 
	                                                                     deleteUser = {this.props.deleteUser}
	                                                                     postUser = {this.props.postUser}/>} />
	      <Route exact path="/contactus" component={() => <ContactUs postFeedback={this.props.postFeedback} />} />
	      <Redirect to="/home" />
	    </Switch>
	  </div>
	);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
