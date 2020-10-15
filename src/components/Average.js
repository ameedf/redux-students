import React, { Component } from 'react';
import { connect } from 'react-redux';

class Average extends Component {

  calculateAverage() {
    const grades = this.props.studentsList.map(s => s.grade); // [100, 90]
    let sum = 0;
    grades.forEach(g => sum += g);
    return sum / grades.length;
  }

  render() {
    return (
      <div>
        <h2>Average: {this.calculateAverage()}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // props    <-> state in store
    studentsList: state.students,
  }
}

export default connect(mapStateToProps, null)   (Average);