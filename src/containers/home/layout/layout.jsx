import React from 'react'
import Foot from '../../../components/footer/foot'
import Nafbar from '../../../components/navbar/navbar'

export default function Layout(props) {
  const {children} = props;
    return (
    <div className='min-vh-100'>
    <Nafbar></Nafbar>
    <div className='min-vh-100 m-5 p-4'>
        {children}
    </div>
    <Foot></Foot>
    </div>
  )
}
