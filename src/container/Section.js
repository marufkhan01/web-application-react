// Packages
import React, { Component } from "react";
import { connect } from "react-redux"
import Content from '../components/Content';
class Section extends Component {
  render() {
    return (
      <section id={this.props.data.title_slug} className={this.props.data.title_slug+' row'}>
      <h3><strong>{this.props.data.title}</strong> </h3><Content content={this.props.data.content}/>
      <hr/>
      </section>
    );
  }
}
const mapStateToProps = (state, props) => {
  //const sectionData = state.kmit.entries[props.id];
  const sectionData = state.kmit;
  console.log(sectionData);
  return {
    content: sectionData.content,
    sectionData: sectionData
  };
};
export default connect(mapStateToProps)(Section);
