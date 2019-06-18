import React from "react";

// var user = {
//   name:"John Doe",
//   about:"Nice guy",
//   hobby:"Likes drinking wine",
//   skills:["html", "javascript", "redux"]
// }

const detailsRecords = [{
  id:1,
  name:"John Doe",
  about:"Nice guy",
  hobby:"Likes drinking wine",
  skills:["html", "javascript", "redux"]
},{
  id:2,
  name:"Mary Moe",
  about:"Cute girl",
  hobby:"Likes playing xbox whole days long",
  skills:["Fortran", "Lua", "R#"]
}];

class UserDetail extends React.Component {
  render() {
    let {user} = this.props;
    console.log(user.name);
    return <div className="col-sm-12">
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
  }
}

export default class UserDetails extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            <div className="well profile">
              {detailsRecords.map((record, index) => {
                console.log(index);
                return <UserDetail user={record} key={index}/>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}