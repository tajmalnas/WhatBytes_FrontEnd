import React from 'react'
import SkillTestInformation from './skill-test-information'
import QuickStatistics from './quick-statistics'
import ComparisonGraph from './comparision-graph'

const LeftSection = () => {
  return (
    <div className='flex flex-col gap-8'>
        <SkillTestInformation/>
        <QuickStatistics/>
        <ComparisonGraph/>
    </div>
  )
}

export default LeftSection