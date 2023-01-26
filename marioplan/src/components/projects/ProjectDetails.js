import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import adduser from '../projects/add-user.png'

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
          <div className='left'>
          <img src={adduser} style={{display:'relative' ,width:'200px'}}/>
          <span className="card-title">{project.title}</span>
          <p> Age : {project.age}</p>  
          </div>
          <div  className='right'   >
            <p style={{fontSize:'150px'}}>89.5%</p>

           
            <p>Specificgravity :{project.specificgravity}</p> 
            <p>Ph : {project.ph} </p>
            <p>Osmolarity:{project.osmolarity} </p>
            <p>Conductivity:{project.conductivity} </p>
            <p>Calciuminurine :{project.calciuminurine} </p>
            <p>Ureainurine:{project.ureainurine} </p>
         
          </div>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
