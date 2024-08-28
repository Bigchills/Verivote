import React, { useState, useEffect } from 'react'

const useLoading = (loadingDuration=1500) => {
    const[loading, setLoading]=useState(false)

    const startLoading=(callback)=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            if(callback){
            callback()
            }
        }, loadingDuration)
    }
  return {
    loading,startLoading
  }
}

export default useLoading;
