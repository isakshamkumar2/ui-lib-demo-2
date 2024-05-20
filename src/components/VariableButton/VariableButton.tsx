import React from 'react'
import styled from '@emotion/styled'
type Props = {}

const VariableButton = (props: Props) => {
    const EmotionButton= styled.button`
    color: red;
    background-color: blue;

    `;
  return (
    <EmotionButton>
        Button with Emotion React
    </EmotionButton>
  )
}

export default VariableButton