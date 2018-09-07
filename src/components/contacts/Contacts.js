import React, { Component } from "react";
import Contact from "./Contact";
import {getContacts} from "../../actions/contactActions"
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Contacts extends Component {
  componentDidMount(){
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props.conts;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
Contacts.propTypes = {
  getContacts : PropTypes.func.isRequired,
  conts : PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  conts: state.Statecontacts
});

export default connect(
  mapStateToProps,{getContacts}
)(Contacts);
