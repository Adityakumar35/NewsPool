import React from 'react'
import loading from './loading.gif'

// export class spinner extends Component {
    const spinner = ()=>{
//   render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
//   }
}

export default spinner