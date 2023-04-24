import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function followers() {
  const [followers, setFollowers] = useState();
  const router = useRouter();
  const defaultFunction = async () => {
    const res = await axios.post('/api/getfollowers', { userid: router.query.followers });
    setFollowers(res.data);
  }

  const handleFollow = async (userid_, fanid_) => {
    const resp = await axios.post('/api/follow', { userid: userid_, fanid: fanid_ });
        defaultFunction();
  }

  useEffect(() => {
    defaultFunction();
  }, [])
  return (
    <div className='d-flex justify-content-center m-5'>
      <div className='followers'>
        {followers &&
          followers.map((items) => {
            return (
              <>
                <div className='text-center followers1 mb-1'>
                  <div>
                    {items.fanid}
                  </div>
                  <div className='text-right'>
                    <button className='btn btn-primary btn-sm' onClick={() => { handleFollow(items.userid, items.fanid) }}>
                      following
                    </button>
                  </div>
                </div>
              </>
            )
          })}
      </div>
    </div>
  )
}
