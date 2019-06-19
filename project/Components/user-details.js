import React from "react";
import { connect } from 'react-redux'
import UserDetail from './user-detail';
import PropTypes from 'prop-types';
import {filterDetails} from '../Actions'

class UserDetails extends React.Component {
  componentWillMount() {
    let {dispatch} = this.props;
    dispatch(filterDetails(this.props.match.params.id));
  }

  render() {
    let record = this.props.details;
    return (
      <div className="container">
        <div className="row">
          {record.map((record, index) => {
            return <UserDetail user={record} key={index}/>
          })}
        </div>
      </div>
    )
  }
}

UserDetails.propTypes = {
  details: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

export default connect(
  mapStateToProps
)(UserDetails)
