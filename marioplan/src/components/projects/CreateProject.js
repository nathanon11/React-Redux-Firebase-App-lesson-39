import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    age :'',
    specificgravity :'',
    ph:'',
    osmolarity:'',
    conductivity:'',
    calciuminurine:'',
    ureainurine:''

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/Dashboard');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">เพิ่มข้อมูลผู้ป่วย</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">ชื่อ-สกุล</label>
          </div>

          <div className="input-field">
            <input type="Number"  id='age' onChange={this.handleChange} />
            <label htmlFor="content">อายุ</label>
          </div>

          <div className="input-field">
            <input type="Number" step="any" id='specific gravity' onChange={this.handleChange} />
            <label htmlFor="content">specific gravity of urine</label>
          </div>

          <div className="input-field">
            <input type="Number" step="any" id='ph' onChange={this.handleChange} />
            <label htmlFor="content">ph of urine</label>
          </div>
          
          <div className="input-field">
            <input type="Number" step="any" id='osmolarity' onChange={this.handleChange} />
            <label htmlFor="content">osmolarity of urine</label>
          </div>

          <div className="input-field">
            <input type="Number" step="any" id='conductivity' onChange={this.handleChange} />
            <label htmlFor="content">conductivity of urine</label>
          </div>

          <div className="input-field">
            <input type="Number" step="any" id='calcium in urine' onChange={this.handleChange} />
            <label htmlFor="content">concentration of calcium in urine</label>
          </div>

          <div className="input-field">
            <input type="Number" step="any" id='urea in urine' onChange={this.handleChange} />
            <label htmlFor="content">concentration of urea in urine</label>
          </div>

          <div className="input-field">
            <button className="btn green lighten-1">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
