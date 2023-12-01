import React from 'react'
import {Routes, Route, useRoutes} from 'react-router-dom'

import Home from '../pages/home/home'
import NotFound from '../pages/error/not-found-page'

export default function RoutesComponent() {
    const routes = useRoutes(
        [
            {path:'/', element:<Home />},
            {path:'/*', element:<NotFound/>},
        ]
    )
    return routes; 
}
