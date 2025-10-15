import React from 'react'

const questions =[
  'What skills  do I need for a data anylitics role ?',
  'How to become backend developer ?'
]
const EmptyState = ({selectedQuestion}:any) => {
  return (
    <div>
      <h2 className='text-xl text-center'>Ask Anything to AI Career Agent</h2>
      {questions.map((questions,index)=>(
        <h2 className='py-2 border rounded-lg my-3  hover:border-primary cursor-pointer text-center'key={index}
        onClick={()=>selectedQuestion(questions)}>{questions}</h2>
      ))}
    </div>
  )
}

export default EmptyState
