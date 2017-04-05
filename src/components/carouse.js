import React from 'react'
import { Carousel } from 'antd'

const style = {
  textAlign: 'center',
  height: '160px',
  lineHeight: '160px',
  background: '#364d79',
  color: '#fff',
  overflow: 'hidden'
}

const onChange = () => {
  console.log('1')
}
const CarouseExample = () => (
  <div>
    <Carousel style={style} afterChange={onChange}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  </div>
)

export default CarouseExample
