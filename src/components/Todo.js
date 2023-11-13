import React from 'react';
import '../App.js';
import CustomButton from './CustomButton.js';
 
function Todo(props) {
  const { title, contents, todo, firstButton, secondButton, color } = props;
  //두번째 버튼이 취소하기면 버튼 색상 변경하기
  if (secondButton === '취소하기')
    return (
      <div style={{ borderColor: color }} className='Box'>
        <p>{title}</p>
        <p>{contents}</p>
        <p>
          <CustomButton
            buttonColor='#c1e8d4'
            onClick={() => props.firstHandler(todo.id)}
          >
            {firstButton}
          </CustomButton>
          <CustomButton
            buttonColor='#c1e8d4'
            onClick={() => props.secondHandler(todo)}
          >
            {secondButton}
          </CustomButton>
        </p>
      </div>
    );
  return (
    <div style={{ borderColor: color }} className='Box'>
      <p>{title}</p>
      <p>{contents}</p>
      <p>
        <CustomButton
          buttonColor='#eb948a'
          onClick={() => props.firstHandler(todo.id)}
        >
          {firstButton}
        </CustomButton>
        <CustomButton
          buttonColor='#eb948a'
          onClick={() => props.secondHandler(todo)}
        >
          {secondButton}
        </CustomButton>
      </p>
    </div>
  );
}
 
export default Todo;