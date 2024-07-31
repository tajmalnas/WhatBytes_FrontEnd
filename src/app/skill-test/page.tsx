'use client'
import LeftSection from '@/components/skill-test/left-section'
import RightSection from '@/components/skill-test/right-section'
import React from 'react'
import { Provider } from 'react-redux'
import {store} from '@/store/store'

const Skill_Test = () => {
  return (
    <Provider store={store}>
    <div className='h-fit w-full lg:p-8 p-4'>
        <h1 className='text-xl'>Skill Test</h1>
        <div className='mt-4 md:mt-8 w-full flex flex-col gap-8 lg:gap-0 lg:flex-row'>
            <div className='w-full lg:w-7/12 '>
                <LeftSection/>
            </div>
            <div className='w-full lg:w-5/12'>
                <RightSection/>
            </div>
        </div>
    </div>
    </Provider>
  )
}

export default Skill_Test