import React from "react";
import { BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";


function home(){
    return(
        <h2>Home page</h2>
    )
}

function contact(){
    return(
        <h2>contact us</h2>
    )
}

function about(){
    return(
        <h2>about</h2>
    )
}

function routing(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <link to="/">home</link>
                        </li>
                        <li>
                            <link to="/about">about</link>
                        </li>
                        <li>
                            <link to="/contact">contact</link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                <Route path="/" element ={<home></home>}></Route>
                </Routes>
                <Routes>
                <Route path="/" element ={<about></about>}></Route>
                </Routes>
                <Routes>
                <Route path="/" element ={<contact></contact>}></Route>
                </Routes>
            </div>
        </Router>
    )
}

