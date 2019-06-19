import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import {filterGrid, toggleActive, lastName} from '../Actions'

class GridRecord extends React.Component {
  showUserDetails(e){
    e.preventDefault();
    this.props.history.push(`/details/${this.props.record.id}`);
  }

  render(){
    let {record} = this.props;
    return <tr>
      <th onClick={this.showUserDetails.bind(this)}><a href="#">{record.id}</a></th>
      <th>{record.firstName}</th>
      <th><input type="text" onChange={this.props.changeLastName} value={record.lastName}/></th>
      <th><input type="checkbox" checked={record.active} onChange={this.props.toggleActive}/></th>
    </tr>
  }
}

GridRecord.defaultProps = {
  record: {firstName: "N/A", lastName: "N/A", active: false}
};

GridRecord.propTypes = {
  record: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  })
};

class GridComponent extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.refs.filterInput && this.refs.filterInput.focus();
    // this.setState({
    //   records:dataSource
    // })
  }

  toggleActive(index){
    let {dispatch} = this.props;
    dispatch(toggleActive(index));
  }

  changeLastName(index, e){
    let {dispatch} = this.props;
    dispatch(lastName(e.target.value, index));
  }

  handleFilterChange(e){
    let {dispatch} = this.props;
    dispatch(filterGrid(e.target.value));
  }

  render(){
    return (
      <div className="m-5">
        <input type="text" ref="filterInput" placeholder="Filter by first name" className="mb-3" onChange={this.handleFilterChange.bind(this)} />
        <table className="table table-condensed">
          <thead>
          <tr>
            <th>id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.records.map((record, index)=>{
              return <GridRecord record={record} key={index} history={this.props.history} toggleActive={this.toggleActive.bind(this, index)} changeLastName={this.changeLastName.bind(this, index)}/>
            })
          }
          </tbody>
        </table>
        <div>{this.props.children &&
        React.cloneElement(this.props.children, { records: this.state.records })}</div>
      </div>
    )
  }
}

GridComponent.propTypes = {
  records: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    records: state.grid
  }
}

export default connect(
  mapStateToProps
)(GridComponent)
