// Packages
import React, { Component } from "react";
import { connect } from "react-redux";
// StyleSheet
import "./App.css";
//Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section from "./container/Section";
// Action Creators
import { getData } from "./actionCreator/actionCreator.js";

class App extends Component {
  static defaultProps = {
    data: [],
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading ? (
            <div className="text-mid"> <h2 className="text-loading">Loading...</h2> </div>
        ) : (
          <div>
            <Header />
            <HeroSection />
            <div>
              {this.props.data.map((data,index) => {;
                return (<Section data={data} key={data._id} />);
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const data = state.kmit.content;
  return {
    isLoading: state.kmit.isLoading || !Array.isArray(data),
    data: data
  };
};
export default connect(mapStateToProps, { getData })(App);
