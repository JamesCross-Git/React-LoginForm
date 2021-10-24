import React from "react";


export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <h4 className="navbar-text">Welcome to My React App</h4>
                        <div className="navbar-nav ">
                            <a className="nav-link active" aria-current="page" href="../public/index.html">Home</a>
                            <a className="nav-link" href="#">Content</a>
                            <a className="nav-link" href="#">Links</a>
                        </div>
                </div>
            </nav>
        );
    }
}