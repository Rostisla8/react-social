import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import GlobalFeed from '../pages/GlobalFeed';
import Login from '../pages/Login';
import Navbar from './Navbar';
import CreateArticle from '../pages/CreateArticle'
import UserProfile from '../pages/userProfile';
import Settings from '../pages/Settings';
import Article from '../pages/Article';

const Routing = () => {
    return (
<BrowserRouter>
<Navbar/>
    <Switch>
        <Route path="/" component={GlobalFeed} exact />
        <Route path="/login" component={Login} />
        <Route path="/articles/new" component = {CreateArticle} />
        <Route path='/external' component={() => { window.location = 'https://mail.google.com'; return null;} }/>
        <Route path="/profiles/:slug" component={UserProfile} />
        <Route path="/profile/:slug" component={UserProfile} />
        <Route path="/settings" component={Settings} />
        <Route path="/articles/:slug" component={Article} />
    </Switch>
</BrowserRouter>

    );
};

export default Routing