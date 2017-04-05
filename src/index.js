import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
// import Antd from './components/antd'
// import LayoutExample from './components/layout'
// import CarouseExample from './components/carouse'
import enUS from 'antd/lib/locale-provider/en_US'
import { LocaleProvider, Pagination } from 'antd'
import './index.css'

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </LocaleProvider>,
  document.getElementById('root')
)
