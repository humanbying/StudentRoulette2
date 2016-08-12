import React from 'react'
const shuffle = require('lodash.shuffle');
const chunk = require('lodash.chunk');

const TeamList = React.createClass({
  getInitialState: function(){
    return{
      teams: '',
      groups: []

    }
  },
  listMaker: function() {
    let something = this.state.teams;
    let shuffled = shuffle(this.props.students);
    let chunky = chunk(shuffled, something);
    console.log(chunky);

    let listedTeams = chunky.map(team => {
      let memberNames = team.map(members => {
        return <li>{members.text}</li>
      });
      return <ul>{memberNames}</ul>
    })
    this.setState({
      groups: listedTeams
    })
  },
  changing: function(e) {
    this.setState({
      teams: e.target.value
    })
    console.log(e.target.value);
  },
  render: function (){

    return(
      <div>
      <button onClick = {this.listMaker} className="btn btn-danger btn-sm" type="submit">shuffle teams</button>
      <input type= "number" onChange = {this.changing} />
      <h4>{this.state.groups}</h4>
      </div>
    )
  }
})


export default TeamList
