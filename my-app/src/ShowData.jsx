import React from 'react'

const ShowData = (props) => {
  return (
    <>
      <ul>
        {
            props?.data?.map((items) => {
                return  <li onClick={() => props.handler(items)} key={items} >{items}</li>
                
            })
        }
      </ul>
    </>
  )
}

export default ShowData