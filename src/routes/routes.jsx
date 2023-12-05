import React from 'react'
import {Routes, Route, useRoutes} from 'react-router-dom'

import Home from '../pages/home/home'
import NotFound from '../pages/error/not-found-page'
import Dashnoard from '../pages/home/dashboard/dashnoard'
import MyTasks from '../pages/home/myTask/myTasks'
import Profile from '../pages/home/profile/profile'

export default function RoutesComponent() {
    const routes = useRoutes(
        [
            { path: '/', element: <Home />,
             children: [
            { index: true , element: <Dashnoard /> },
            { path: 'myTasks', element: <MyTasks /> },
            { path: 'profile', element: <Profile /> },
        ]},
            {path:'/*', element:(<NotFound/>)}
        ]
    )
    return routes; 
}
