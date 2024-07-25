import React from 'react'

const Footer = ({taskListlength}) => {
  return (
    <div
    style={{    boxShadow:"0px -1px  rgba(255, 255, 255, 0.4)"
    }}>
      {taskListlength&& `no of tasks: ${taskListlength}`|| ''}
    </div>
  )
}

export default Footer