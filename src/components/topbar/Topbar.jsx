import "./topbar.css"
import React, { Component } from 'react'

export default class Topbar extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnMount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop
    })
  }



render() {

  return (
    <div className="topbarContainer" id={`${this.state.scrollTop < 300 ? "nav-colored" : "nav-transparent"}`}>
      <div id="topbarid" className="topbarLeft">
        <div className="logo">
          <img className="logoImg" src="/assets/topbarlogo1.png" alt="" />
        </div>
      </div>
      <ul className="topbarRight">
        <a href="#topbarid" className="menumover">
          <li className="menu" id="home">Home</li>
        </a>
        <a href="#approachid" className="menumover">
          <li className="menu">Approach</li>
        </a>
        <a href="#ecosystemTopbarPos" className="menumover">
          <li className="menu">Business</li>
        </a>
        <a href="#insightTopbarPos" className="menumover">
          <li className="menu">Insights</li>
        </a>
        <a href="#" className="menumover">
          <li className="menu">Careers</li>
        </a>
        <a href="#contactusTopbarPos" className="menumover">
          <li className="menu" id="contactus">Contact Us</li>
        </a>
      </ul>
    </div>
  )
}
}
