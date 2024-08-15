//58 59 60
import React, { useContext } from 'react'
import CompF from './CompF'
import { ChannelContext, UserContext } from '../App'

function CompE() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      <CompF />
      {user}-{channel}
    </div>
  )
}

export default CompE
