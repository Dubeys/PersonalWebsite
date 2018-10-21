import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./scss/index.scss";

import { Home } from "./js/pages/Home.page";
import { Visual } from "./js/pages/Visual.page";
import { Code } from "./js/pages/Code.page";
import { Sound } from "./js/pages/Sound.page";
import { PageLink } from "./js/components/PageLink.component";

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

        if(this.state.pageName != pageName) {

            this.setState({pageClicked: true})
            
            setTimeout(() => {
                this.setState({pageName: pageName, pageClicked: false});
                setPageTitle(this.title, this.state.pageName.toUpperCase());
            },delay * 1000)

            return
        }

        this.setState({ pageName: pageName, pageClicked: false });
        setPageTitle(this.title, this.state.pageName.toUpperCase());

    }

    render(){

        const pages = {
            home: <Home onPageLinkClick={this.onPageChange} pageTransition={this.state.pageClicked} />,
            visuals: <Visual onPageLinkClick={this.onPageChange} />,
            code: <Code onPageLinkClick={this.onPageChange} />,
            sound: <Sound onPageLinkClick={this.onPageChange} />
        };

        const page = pages[this.state.pageName];

        return (
            <div id="app">
                <div className="app__page app__page--full">
                    <header className="app__header">
                        <PageLink onClick={this.onPageChange} page="home">
                            <h1>igor</h1>
                        </PageLink>
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

