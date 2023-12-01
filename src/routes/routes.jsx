import React from 'react'
import {Routes, Route, useRoutes} from 'react-router-dom'

import DashboardPage from '../pages/dashboard/dashboardPage'
import NotFound from '../pages/error/not-found-page'

export default function RoutesComponent() {
    const routes = useRoutes(
        [
            {path:'/', element:<DashboardPage/>},
            {path:'/*', element:<NotFound/>},
        ]
    )
    return routes; 
}
