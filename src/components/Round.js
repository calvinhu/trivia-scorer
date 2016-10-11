import React, { PropTypes } from 'react';
import './Round.css';
import _bind from '../utils/bind';

import Question from './Question';

const Round = ({questions, scores}) => (
  <div className="Round">
    {
      [...Array(questions)].map((item,index) =>
        <Question key={index} scores={scores} />
      )
    }
  </div>
)

Round.propTypes = {
  questions: PropTypes.number.isRequired,
  scores: PropTypes.array.isRequired
}

export default Round;
