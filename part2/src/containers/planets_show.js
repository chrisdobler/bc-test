import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanet, fetchImage } from '../actions';
import { Link } from 'react-router-dom';
import Panel from '../components/panel';
import SearchBar from './search_bar';

class PlanetsShow extends Component {
  componentDidMount() {
    if (!this.props.planet) {
      const { id } = this.props.match.params;
      this.props.fetchPlanet(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const name = this.props.planet.name;
    if (prevProps.planet.name !== name)
      this.props.fetchImage(name);
  }

  render() {
    const p = this.props.planet;
    console.log(p);
    return (
      <div>
        <SearchBar />
        <Panel>
          <div className="panel-heading">
            <h3 className="panel-title">{p.name}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-3 col-lg-3 " align="center">
                <img alt="User Pic" src={this.props.image} className="profile-img img-responsive" />
              </div>

              <div className=" col-md-9 col-lg-9 ">
                <table className="table table-user-information">
                  <tbody>
                    <tr>
                      <td>Rotation Period</td>
                      <td>{p.rotation_period}</td>
                    </tr>
                    <tr>
                      <td>Orbital Period</td>
                      <td>{p.orbital_period}</td>
                    </tr>
                    <tr>
                      <td>Diameter</td>
                      <td>{p.diameter}</td>
                    </tr>
                    <tr>
                      <td>Climate</td>
                      <td>{p.climate}</td>
                    </tr>
                    <tr>
                      <td>Gravity</td>
                      <td>{p.gravity}</td>
                    </tr>
                    <tr>
                      <td>Terrain</td>
                      <td>{p.terrain}</td>
                    </tr>
                    <tr>
                      <td>Skin Color</td>
                      <td>{p.surface_water}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    planet: state.planet,
    image: state.image,
  };
}

export default connect(mapStateToProps, { fetchPlanet, fetchImage })(PlanetsShow);
