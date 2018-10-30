import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./scss/index.scss";

import logo from "./assets/images/logo.svg";
import instagram from "./assets/images/instagram.svg";
import twitter from "./assets/images/twitter.svg";
import soundcloud from "./assets/images/soundcloud.svg";
import youtube from "./assets/images/youtube.svg";

import { Home } from "./js/pages/Home.page";
import { Visual } from "./js/pages/Visual.page";
import { Code } from "./js/pages/Code.page";
import { Sound } from "./js/pages/Sound.page";
import { Link } from "./js/components/Link.component";

function setPageTitle(base,...strings){
    
    let fullString = base ? base: "";

    strings.map((string)=> {

        fullString += " | " + string;

    })

    document.title = fullString;

}

class App extends Component {

    constructor(){

        super();

        this.onPageChange = this.onPageChange.bind(this);

        this.title = "igor"
        setPageTitle(this.title,"HOME");

        this.state = {
            pageClicked: false,
            pageName: "home"
        }

    }

    onPageChange(pageName,delay = 0) {


        // if the pageLink clicked redirects to a different page
        // set pageclicked to true but wait for delay to actually change the page
        if(this.state.pageName != pageName) {

            this.setState({pageClicked: true})
            
            setTimeout(() => {
                this.setState({pageName: pageName, pageClicked: false});
                setPageTitle(this.title, this.state.pageName.toUpperCase());
            },delay * 1000)

            return
        }

        // if the pageLink clicked redirects to the active page
        // update the current page by setting the state
        this.setState({ pageName: pageName, pageClicked: false });
        setPageTitle(this.title, this.state.pageName.toUpperCase());

    }

    render(){

        // pages
        const pages = {
            home: {
                page: <Home onPageLinkClick={this.onPageChange} pageTransition={this.state.pageClicked} />,
                fullPage: true
            },
            visuals: {
                page: <Visual onPageLinkClick={this.onPageChange} />,
                fullPage: false
            },
            code: {
                page: <Code onPageLinkClick={this.onPageChange} />,
                fullPage: false
            },
            sound: { 
                page: <Sound onPageLinkClick={this.onPageChange} />,
                fullPage: false
            }
        };

        // define current page
        const page = pages[this.state.pageName].page;
        // define if current page is 100vh or scolling
        // const fullPageClass = pages[this.state.pageName].fullPage ? " app__page--full" : "";
        const fullPageClass = true ? " app__page--full" : "";

        return (
            <div id="app">
                <div className={"app__page" + fullPageClass}>
                    <header className="app__header">
                        <Link onClick={this.onPageChange} className="logo" linkID="home">
                            {/* <h1>igor</h1> */}
                            <img src={logo} id="logo"/>
                        </Link>

                        <ul className="social">
                            <li><a href="https://twitter.com/DubeysBE" target="_blank"><img src={twitter} /></a></li>
                            <li><a href="https://www.instagram.com/dubeysbe/" target="_blank"><img src={instagram} /></a></li>
                            <li><a href="https://soundcloud.com/dubeystep/tracks" target="_blank"><img src={soundcloud} /></a></li>
                            <li><a href="https://www.youtube.com/user/Dubeystep" target="_blank"><img src={youtube} /></a></li>
                        </ul>
                    </header>
                    {page}
                    <footer className="app__footer">

                    </footer>
                </div>
            </div>
        )

    }

}

ReactDOM.render(<App />, document.getElementById("app--wrapper"))

