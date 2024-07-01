import React, { Component } from 'react'

export default class Random extends Component {

  constructor(props){
    super(props)

    console.log(props);

    this.state = {cname:'alto'}
  }

  change(data){

    this.setState({cname:data})

  }

  render() {
    return (
     <>
       
        <div>Random</div>
        <p>data shared is:{this.props.uname}</p>

        <p>car name is : {this.state.cname}</p>

        <button className='btn btn-primary' onClick={()=>this.change('swift')}>click</button>
        
     </>
    )
  }
}
