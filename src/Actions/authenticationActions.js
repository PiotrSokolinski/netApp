import * as types from './index';

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user
  }
};

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};

export const resetEmailPasswordAction = (user) => {
  return {
    type: types.EMAIL_PASSWORD_RESET,
    user
  }
}

export const resetUsername = (user) => {
  return {
    type: types.USERNAME_RESET,
    user
  }
}

export const getProjects = () => {
  return {
    type: types.GET_PROJECTS,
  }
}


export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task
  }
}

export const deleteTask = (taskId) => {
  return {
    type: types.DELETE_TASK,
    taskId
  }
}

export const editTask = (task) => {
  return {
    type: types.EDIT_TASK,
    task
  }
}

export const getMe = () => {
  return {
    type: types.GET_ME
  }
}



export const addProject = (project) => {
  return {
    type: types.ADD_PROJECT,
    project
  }
}

export const deleteProject = (projectId) => {
  return {
    type: types.DELETE_PROJECT,
    projectId
  }
}

export const editProject = (project) => {
  return {
    type: types.EDIT_PROJECT,
    project
  }
}

export const assignProject = (projectId) => {
  return {
    type: types.ASSIGN_PROJECT,
    projectId
  }
}