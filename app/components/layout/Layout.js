import React, { Component } from 'react';
import NavBar from './NavBar';
import InfoBar from './InfoBar';
import Footer from './Footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <header>
                    <InfoBar />
                    <NavBar />
                </header>
                <section>
                    {this.props.children}
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Layout;