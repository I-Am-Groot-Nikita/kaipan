import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function following() {
  const [following,setFollowing] = useState();
  const router = useRouter();
  const defaultFunction = async()=>{
    const res = await axios.post('/api/getfollowing',{userid : router.query.following});
    setFollowing(res.data);
  }

  const handleFollow = async (userid_, fanid_) => {
    const resp = await axios.post('/api/follow', { userid: userid_, fanid: fanid_ });
        defaultFunction();
  }

  useEffect(()=>{
    defaultFunction();
  },[])

  return (
    <div className='d-flex justify-content-center m-5'>
    <div className='following'>
          {following &&
            following.map((items) => {
              return (
                <>
                <div className='text-center following1 mb-1'>
                  <div>
                      {items.userid}
                  </div>
                    <div className='text-right'>
                      <button className='btn btn-primary btn-sm' onClick={() => { handleFollow(items.userid, items.fanid) }}>
                        unfollow
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