import React from 'react'

function input({value, onChange}) {


  return (
    <div>
        <input
            value={value}
            onChange={onChange}
          />
    </div>
  )
}

export default input
