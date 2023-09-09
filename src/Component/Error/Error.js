import React, { useEffect } from 'react'
import Header from '../Layout/Navbar/Header'
import MetaData from '../MetaData/MetaData'
import { useHistory } from 'react-router-dom'

const Error = () => {

  const history = useHistory();

  useEffect(() => {
    history.push('/home');
  }, [history]);





  return (
    <div>
      <MetaData title={"ERROR"} />
      <div>ERROR</div>
    </div>
  )
}

export default Error