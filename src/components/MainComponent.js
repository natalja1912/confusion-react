import React, { useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

function Main(props) {
    const [selectedDish, setSelectedDish] = useState('');

    const HomePage = () => {
        return (
            <Home
                dish={props.dishes.filter((dish) => dish.id === parseInt(selectedDish))[0]}
                promotion={props.promotions.filter((promo) => promo.featured)[0]}
                leader={props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

    const AboutPage = () => {
        return (
            <About leaders={props.leaders}
            />
        );
    }

    const DishWithId = ({ match }) => {
        return (
            <DishDetail addComment={props.addComment} dish={props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
        );
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/aboutus' component={AboutPage} />
                <Route exact path='/menu' component={() => <Menu dishes={props.dishes} onClick={(dishId) => setSelectedDish(dishId)} />} />
                <Route path='/contactus' component={Contact} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));