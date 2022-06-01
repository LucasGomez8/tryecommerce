import React from 'react'
import Foot from '../../../components/footer/foot'
import Nafbar from '../../../components/navbar/navbar'

export default function Layout(props) {
  const {children} = props;

  const style= {
    backgroundColor: "#EFF1F0",
  }

    return (
    <div className='min-vh-100'>
    <Nafbar></Nafbar>
    <div className='min-vh-100 mt-5 p-4' style={style}>
        {children}
    </div>
    <Foot></Foot>
    </div>
  )
}
