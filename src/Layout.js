import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Layout(){
    return(
        <div>
            <Header></Header>
            <div>
                <Sidebar></Sidebar>
                <MainContent></MainContent>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout;