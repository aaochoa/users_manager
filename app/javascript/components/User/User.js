import React, { useEffect, useState } from 'react'

const User = (props) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const id = props.match.params.id
    console.log(props)
  }, [])
  return <div>Individual User</div>
}

export default User