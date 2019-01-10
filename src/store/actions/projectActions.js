export const createProject = (project) => {
  //thunk allows me to do this below. instead of returning an object I can now return a function. coooool stop forgetting this.
  //thunk.withExtraArguments allows me to add inputs. in this case its {getFirebase, getFirestore }
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call here
      //gives me a reference to my firestore database.
    const firestore = getFirestore();
    firestore.collection('projects').add({ //what I called my cloud firestore collection.
      ...project, //same as doing project.title and project.content. This is coming in from the state from CreateProject.js
      authorFirstName: "William",
      authorLastName: "Lee",
      authorId: 12345,
      createdAt: new Date(),
    }).then(() => {// this returns a promise.
      dispatch({
        type: "CREATE_PROJECT",
        project: project,
      })
    }).catch(error => {
      dispatch({
        type: "CREATE_PROJECT_ERROR",
        error: error,
      })
    })
  }
}
