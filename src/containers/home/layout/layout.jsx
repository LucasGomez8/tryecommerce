import React from 'react'
import Foot from '../../../components/footer/foot'
import Nafbar from '../../../components/navbar'

export default function Layout(props) {
  const {children} = props;
    return (
    <div className='min-vh-100'>
    <Nafbar></Nafbar>
    <div className='min-vh-100'>
        {children}
    </div>
    <Foot></Foot>
    </div>
  )
}
