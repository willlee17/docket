export const createProject = (project) => {
  return (dispatch, getState) =>{
    // async call here
    // then 
    dispatch({
      type: "CREATE_PROJECT",
      project: project,
    })
  }
}
