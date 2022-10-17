import { Location } from 'react-router-dom';
import projectsObjectList, { ProjectsObject } from '../projectsList';

/**
 * A function for resolving projects' properties
 * @param location - a react-router Location object
 */
function getProperties(location: Location) {
  const locationState: ProjectsObject = location.state;
  if (locationState) {
    return locationState;
  }
  // If the state object is empty, it is needed to define properties in a different way
  console.log('Project defining fallback mode');
  const mayBeProject = location.pathname.replace('/projects/', '');
  const project = projectsObjectList.find((item) => item.kebabedProjectName === mayBeProject);
  // If there is no project with a provided name (mistake?)
  if (!project) {
    return null;
  }
  return {
    id: project.id,
    projectName: project.projectName,
    kebabedProjectName: project.kebabedProjectName,
  };
}

export default getProperties;
