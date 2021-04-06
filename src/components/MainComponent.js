import React, { useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import { MENU_DISHES_LIST, COMMENTS, PROMOTIONS, LEADERS } from '../utils/constants';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

function Main() {
    const [selectedDish, setSelectedDish] = useState('');

    const HomePage = () => {
        return (
            <Home
                dish={MENU_DISHES_LIST.filter((dish) => dish.id === parseInt(selectedDish))[0]}
                promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
                leader={LEADERS.filter((leader) => leader.featured)[0]}
            />
        );
    }

    const AboutPage = () => {
        return (
            <About leaders={LEADERS}
            />
        );
    }

    const DishWithId = ({ match }) => {
        return (
            <DishDetail dish={MENU_DISHES_LIST.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={COMMENTS.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
        );
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/aboutus' component={AboutPage} />
                <Route exact path='/menu' component={() => <Menu dishes={MENU_DISHES_LIST} onClick={(dishId) => setSelectedDish(dishId)} />} />
                <Route path='/contactus' component={Contact} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
}

export default withRouter(Main);