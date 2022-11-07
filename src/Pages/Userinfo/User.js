import React, { Component } from 'react'

export default class User extends Component {
  constructor() {
    super()
    this.state = {
      userData: [],
      search:"",

     
    }
  }
  
 
  handleSubmit = (e) => {
    e.preventDefault();
    let userData = this.state.userData;
    let name = this.refs.txtName.value;
    let email = this.refs.txtEmail.value;
    let number = this.refs.txtNumber.value;
    let city = this.refs.txtCity.value;

    let newUser = {
      "name": name,
      "email": email,
      "number": number,
      "city": city
    }
    userData.push(newUser);
    this.setState({
      userData: userData
    })
    this.refs.myForm.reset();
  }

  //search user

  updateSearch(event){
    this.setState({search:event.target.value})
  }

aseuser(){
  const ase=[...this.state.userData].sort((a, b) => a.name > b.name ? 1 : -1);
   this.setState({userData:ase}) 
}


  render() {
    let userData = this.state.userData.filter(
      (res)=>{
        return res.name.indexOf(this.state.search) !== -1;
      } 
    );
    console.log(userData)
    return (
      <>
      <div className='container'>
        <div className='formuser'>
       <h5>Add User</h5>
        <form ref="myForm">
          <div className="mb-3">
            <input type="text" className="form-control"  ref="txtName" placeholder='Enter User Name ' required/>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" ref="txtEmail" placeholder='Enter User Email' required/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control"  ref="txtNumber" placeholder='Enter User Number' required/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control"  ref="txtCity"  placeholder='Enter User City' required/>
          </div>
          <button className='btn btn-primary' onClick={e => this.handleSubmit(e)}>Save</button>
          {/* search input */}
          <div className="mb-3">
            <input type="text" className="form-control mt-2"  placeholder='Search User' 
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            required/>
          </div>
        </form>
        </div>
      
      </div>
   
      <div className='container'>
   
      <div className="table-responsive">
      
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">
                   <div style={{ display: "flex", justifyContent: "space-between",alignItems: "center" }}><span> User Name</span> <button onClick={( this.aseuser.bind(this) )} className="btn btn-success ms-auto">^</button></div>
                </th>
                <th scope="col">User Email</th>
                <th scope="col">User Number</th>
                <th scope="col">User City</th>
              </tr>
            </thead>
           
            <tbody>
           
             {userData.map((res,i)=>
              <tr key={i}>
              <th scope="row">{i+1}</th>
              <td>{res.name}</td>
              <td>{res.email}</td>
              <td>{res.number}</td>
              <td>{res.city}</td>
            </tr>)}
            </tbody>
           
          </table>
        </div>
        </div>
      </>
    )
  }
}
