import React from "react";

export default class UserDetail extends React.Component {
  render() {
    let {user} = this.props;
    return (
      <div className="col-md-offset-2 col-md-8 col-lg-4">
        <div className="well profile">
          <div className="col-sm-12">
            <div className="col-xs-12 col-sm-8">
              <h2>{user.name}</h2>
              <p><strong>About: </strong> {user.about} </p>
              <p><strong>Hobbies: </strong> {user.hobby} </p>
              <p><strong>Skills: </strong>
                {
                  user.skills.map(skill => {
                    return <span>{skill} </span>
                  })
                }
              </p>
            </div>
            <div className="col-xs-12 col-sm-4 text-center">
              <figure>
                <img
                  src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
                  alt="" className="img-circle img-responsive"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    )
  }
}