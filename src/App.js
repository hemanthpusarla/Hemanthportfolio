import React from "react";
import  ReactDOM  from "react-dom";
import Header from "./components/header";
import {createBrowserRouter ,RouterProvider , Outlet} from 'react-router-dom'
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
const App = ()=>{
    return (
        <>
       <Header></Header>
       <Outlet></Outlet>
        </>
    )
}
const Router = createBrowserRouter(
    [
     {
        path : '' ,
        element:  <App></App> ,
        children : [
            {
                path : "" ,
                 element : <Home></Home>
            } ,
            {
                path : "/about" ,
                element : <About></About>
            },
            {
                path : "/contact" ,
                element : <Contact></Contact>
            },
            {
                path : "/projects" ,
                element : <Projects></Projects>
            },
        ]
     } 

    ]
)
const root = ReactDOM.createRoot(document.getElementById('root')) ;
root.render(<RouterProvider router={Router}/>)