import React from 'react'

const TextArea = () => {
  return (
    <>
      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Comments</label>
      {/* <i className="fas fa-xmark cross" onClick={()=>{deleteEle(index)}} ></i> */}
      </div>
    </>
  )
}

export default TextArea
