import React from 'react'
import Counterchlid from './Counterchlid';

class Counter extends React.Component {
  constructor(props) {
   super(props);
   //inintialize the varible counter for storing the state 
   this.state = {
     counter: 0
   }
   this.updateCounter = this.updateCounter.bind(this);
   
 }

 //it is a function 
 updateCounter(type){
   var count = this.state.counter;
   type==='increment'? count++: count--;
   this.setState({counter: count});
 }
 
 render() {
   return  (
   <div className='container text-center'>
      <div className='mt-5 counterapp'>
        <h2>Counter App</h2>
     <h1> {this.state.counter}</h1>
     {/* pass it as a property to the child component */}
       <Counterchlid onClick={this.updateCounter}/>  
      </div>
   </div>
   )
 }
}
export default Counter;