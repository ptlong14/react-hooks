//58 59 60
import React from 'react'
import { ChannelContext, UserContext } from '../App'

function CompF() {
  return (
    <div>
      <UserContext.Consumer>
        {
            user=>{
                return (
                    <ChannelContext.Consumer>
                        {channel=>{
                            return (
                                <div>
                                    useContext {user}, ChannelContext {channel}
                                </div>
                            )
                        }
                        }
                    </ChannelContext.Consumer>
                )
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default CompF
