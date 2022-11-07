import React from 'react' 

class Counterchlid extends React.Component{
    
    render() {
      return  (
      <div className='container'>
         <div className='d-flex'>
         <button className='btn btn-success' onClick={(e) => this.props.onClick('increment')}>Increment</button>
          <button className='btn btn-success ms-auto' onClick={(e) => this.props.onClick('decrement')}>Decrement</button>
         </div>
      </div>
      )
    }
    
  }
  export default Counterchlid;