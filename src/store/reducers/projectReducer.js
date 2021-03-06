const initState = {
  projects: [
    {id: 1, title: 'Apply to jobs', content: "Backdoor recruiting and hitting up for referrals"},
    {id: 2, title: 'Errands', content: "Do laundry and take out the trash"},
    {id: 3, title: 'Exercise', content: "Run and ab workouts"},
  ]
}

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log("Create project error", action.error);
      return state;
    default:
      return state;
  }
}

export default projectReducer;
