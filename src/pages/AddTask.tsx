import React from 'react'

function AddTask({editID}:any) {
  return (
    <div>
      <button type="submit" className='btn1'>{editID !== null ? 'Update Todo' : 'Add Todo'}</button>
    </div>
  )
}

export default AddTask