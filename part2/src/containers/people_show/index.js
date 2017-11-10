import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPerson, fetchImage } from '../../actions';
import { Link } from 'react-router-dom';
import './styles.css';
import Panel from '../../components/panel';
import SearchBar from '../search_bar';

class PeopleShow extends Component {
  componentDidMount() {
    if (!this.props.selection) {
      const { id } = this.props.match.params;
      this.props.fetchPerson(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const name = this.props.selection.name;
    if (prevProps.selection.name !== name)
      this.props.fetchImage(name);
  }

  render() {
    const p = this.props.selection;
    let homeworld_url = '#';
    if (p.homeworld !== undefined) {
      const planet_id = p.homeworld.replace(/[^0-9\\]+/g, '');
      homeworld_url = `/planets/${planet_id}`;
    }

    return (
      <div>
        <SearchBar />
        <Panel>
          <div className="panel-heading">
            <h3 className="panel-title">{p.name}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src={this.props.image} className="profile-img img-responsive" /> </div>

              <div className=" col-md-9 col-lg-9 ">
                <table className="table table-user-information">
                  <tbody>
                    <tr>
                      <td>Date of Birth</td>
                      <td>{p.birth_year}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>{p.gender}</td>
                    </tr>
                    <tr>
                      <td>Hair Color</td>
                      <td>{p.hair_color}</td>
                    </tr>
                    <tr>
                      <td>Eye Color</td>
                      <td>{p.eye_color}</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>{p.height}</td>
                    </tr>
                    <tr>
                      <td>Mass</td>
                      <td>{p.mass}</td>
                    </tr>
                    <tr>
                      <td>Skin Color</td>
                      <td>{p.skin_color}</td>
                    </tr>
                  </tbody>
                </table>
                <Link to={homeworld_url} className="btn btn-primary">Home Planet Information</Link>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <a data-original-title="Broadcast Message" data-toggle="tooltip" type="button" className="btn btn-sm btn-primary"><i className="glyphicon glyphicon-envelope" /></a>
            <span className="pull-right">
              <a href="#" data-original-title="Edit this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-edit" /></a>
              &nbsp;
              <a data-original-title="Remove this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-danger"><i className="glyphicon glyphicon-remove" /></a>
            </span>
          </div>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selection: state.selection,
    image: state.image,
  };
}

export default connect(mapStateToProps, { fetchPerson, fetchImage })(PeopleShow);
