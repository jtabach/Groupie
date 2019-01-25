import React, { Component } from 'react';

class ScoreWeekSelect extends Component {
  render() {
    const { numWeeks, onHandleChange } = this.props;
    const weeksArray = Array.apply(null, { length: numWeeks }).map(
      Number.call,
      Number
    );

    return (
      <div>
        <select onChange={onHandleChange}>
          {weeksArray.map((week, i) => {
            return (
              <option key={i} value={i + 1}>
                Week {i + 1}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default ScoreWeekSelect;
