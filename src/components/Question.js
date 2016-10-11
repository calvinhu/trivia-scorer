import React, { PropTypes } from 'react';
import './Question.css';

import { FormGroup, FormControl } from 'react-bootstrap';

const handleClick = (e) => {
  e.preventDefault();
  e.currentTarget.blur();
}

const Question = ({scores}) => (
  <FormGroup className="Question">
    <FormControl
      className="noSelect"
      componentClass="select"
      placeholder="#"
      defaultValue="0"
      onChange={handleClick}>
      <option value="0" ></option>
     {
      scores.map(item =>
        <option key={item} value={item}>{item === 0 ? '' : item}</option>
      )
     }
    </FormControl>
  </FormGroup>
)

Question.propTypes = {
  scores: PropTypes.array.isRequired
}

export default Question;
