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
      <div className="topbarLeft">
        <div className="logo">
          <img className="logoImg" src="/assets/topbarlogo1.png" alt="" />
        </div>
      </div>
      <ul className="topbarRight">
        <li className="menu" id="home">Home</li>
        <li className="menu">Approach</li>
        <li className="menu">Business</li>
        <li className="menu">Insights</li>
        <li className="menu">Careers</li>
        <li className="menu">Contact Us</li>
      </ul>
    </div>
    )
  }
}
