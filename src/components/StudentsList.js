import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentsList extends Component {
  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {this.props.studentsList.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // props    <-> state
    studentsList: state.students,
  }
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);