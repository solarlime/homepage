import { Location } from 'react-router-dom';
import projectsObjectList, { ProjectsObject } from '../projectsList';

function getProperties(location: Location) {
  const locationState: ProjectsObject = location.state;
  if (locationState) {
    return locationState;
  }
  console.log('fallback');
  const mayBeProject = location.pathname.replace('/projects/', '');
  const project = projectsObjectList.find((item) => item.kebabedProjectName === mayBeProject);
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
