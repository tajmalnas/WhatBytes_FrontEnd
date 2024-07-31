import React from 'react'
import SyllabusAnalysis from './syllabus-analysis'
import QuestionAnalysis from './question-analysis'

const RightSection = () => {
  return (
    <div className='flex flex-col gap-8'>
        <SyllabusAnalysis/>
        <QuestionAnalysis/>
    </div>
  )
}

export default RightSection