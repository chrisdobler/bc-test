import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateQuery, trimQuery } from '../actions/index';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    const newValue = event.target.value;
    // case to prevent overgeneralized search
    if (newValue.length < 2) {
      this.props.trimQuery(newValue);
    }
    // case for when user put in space
    else if (newValue.slice(-1) === ' ') {
      this.props.trimQuery(newValue);
    }
    // case for when user is backspacing
    else if (this.props.term > newValue) {
      this.props.trimQuery(newValue);
    } else {
      this.props.updateQuery(event.target.value);
    }
  }

  onFormSubmit(e) {
    const id = this.props.selection.url.replace(/[^0-9\\]+/g, '');
    e.preventDefault();
    this.props.history.push(`/person/${id}`);
  }

  // This area needs more work, but would eliminate the need for a submit button.

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.selection.name !== this.props.selection.name)
  //   {
  //     const id = this.props.selection.url.replace(/[^0-9\\]+/g, '');
  //     this.props.history.push(`/person/${id}`);
  //   }
  // }

  render() {
    return (
      <div>
        <h1>SWAPI Search</h1>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get instant information about Star Wars characters"
            className="form-control"
            value={this.props.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Investigate</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    term: state.query,
    selection: state.selection,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateQuery, trimQuery }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));
