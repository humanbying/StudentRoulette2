import React from 'react'

const StudentList = React.createClass({
  getInitialState: function() {
    return{
      chooseStudent: ''
    }
  },
  pickStudent: function(){
    var chosenStudent = this.props.students[Math.floor(Math.random()*this.props.students.length)];
    this.setState({chooseStudent: chosenStudent.text});
  },
  render: function() {
    return(
      <ul className="list-group">
      <button className="btn btn-danger btn-sm" onClick = {this.pickStudent}>BANG</button>
      <h1><span>{this.state.chooseStudent}</span></h1>
      {
        this.props.students.map(student => {
          return <li className = "list-group-item" key = {student.id}><b>{student.text}</b></li>
        })
      }
      </ul>
    )
  }
});

export default StudentList;
