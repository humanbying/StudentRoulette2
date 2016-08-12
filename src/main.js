import React from 'react'
import ReactDOM from 'react-dom';
import StudentList from './studentlist.js'
import TeamList from './teamlist.js'

const App = React.createClass({
  getInitialState: function(){
    return{
      text: '',
      students: []
    }
  },
  handleStudentAdd: function(text){
    var newStudent = {
      id: this.state.students.length + 1,
      text: text
    }
    this.setState({students: this.state.students.concat(newStudent)});
  },

  render: function() {
    return(
      <div className='row'>
        <div className="col-md-6">
          <StudentForm onStudentAdd={this.handleStudentAdd}/>
          <StudentList students ={this.state.students} />
        </div>
        <div className="col-md-6">
          <TeamList students ={this.state.students} />
        </div>
      </div>
    )
  }
});

const StudentForm = React.createClass({
  render: function() {
    return(
      <div>
      <form onSubmit={this.onSubmit}>
      <div className="form-group">
      <h1>Student Roulette</h1>
      <input size="40" type="text" ref="text" onChange={this.onChange} className="form-inline" />
      <button className="btn btn-success btn-sm" type="submit">submit</button>
      </div>
      </form>
      </div>
    )
  },
  onChange: function(){
    console.log('Changing Text...');
  },
  onSubmit: function(e){
    e.preventDefault();
    var text = this.refs.text.value.trim();

    if(!text){
      alert('Please enter a student');
      return;
    }
    this.props.onStudentAdd(text);
    this.refs.text.value = '';
  }
});



ReactDOM.render(<App />, document.getElementById('inputArea'));
