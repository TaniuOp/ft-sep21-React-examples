import React, { useState } from 'react'
import Button from './Button'

const Rating = () => {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }
  return (
    <div>
      <br />
      <br />
      <Button increment={1} onClickFunction={incrementCount} />
      <br />  <br />
      <Button increment={10} onClickFunction={incrementCount} />
      <br /> <br />
      <Button increment={100} onClickFunction={incrementCount} />
      <br /> <br />
      <Button increment={1000} onClickFunction={incrementCount} />
      <br /> <br />
      <br /> <br />
      <span>{count}</span>
    </div>
  )
};

export default Rating;
