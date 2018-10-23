import HomePage from "./pages/HomePage/HomePage";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import React from 'react';
import DashboardPage from './pages/DashboardPage/DashboardPage';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/login',
        exact: false,
        main: ({match, history}) => <LoginPage match={match} history={history} />
    },
    {
        path: '/sign-up',
        exact: false,
        main: ({match, history}) => <SignUpPage match={match} history={history} />
    },
    {
        path: '/dashboard',
        exact: false,
        main: ({match, history}) => <DashboardPage match={match} history={history}/>
    } 
];

export default routes;