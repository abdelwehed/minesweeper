import React, { Component } from 'react';
//components
import Header from './header';
import Footer from './footer';


class Layout extends Component {
  state = {
  };

  render() {
    return (
      <div className={this.props.class}>
        <Header title="Démineur" />
        <main>{this.props.children}</main>
        <Footer text="Developped By Abdelwahed Batnini"/>
      </div>
    );
  }
}

export default Layout;
