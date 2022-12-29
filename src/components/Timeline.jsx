import React from 'react'
import timeline from './data/timeline'
import TimelineItem from './TimelineItem';
import Title from './Title';
console.log(timeline);
const Timeline = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20 '>
     <div className='w-full md:w-7/12 '>
      <Title className="dark:text-white">Timeline</Title>
       {timeline.map(item => (
        <TimelineItem 
        title={item.title}
        year={item.year}
        duration={item.duration}
        detail={item.detail}
        />
       ))}
      </div>
    </div>
  )
}

export default Timeline
