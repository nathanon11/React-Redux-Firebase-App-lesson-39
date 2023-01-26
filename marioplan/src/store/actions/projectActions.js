export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      // age: profile.age,
      // specificgravity :profile.specificgravity,
      // ph:profile.ph,
      // osmolarity:profile.osmolarity,
      // conductivity:profile.conductivity,
      // calciuminurine:profile.calciuminurine,
      // ureainurine:profile.ureainurine,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};  