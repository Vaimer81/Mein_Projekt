import React from 'react'
import s from './index.module.css'
import GoogleMap from './GoogleMap'

export default function Footer() {
  return (
    <div className={s.footer}>
     <GoogleMap/>
    </div>
  )
}
