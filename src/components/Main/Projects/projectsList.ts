import uniqid from 'uniqid';

export type ProjectsObject = {
  id: string,
  projectName: string,
  kebabedProjectName: string,
};

function kebabaizer(projectName: string) {
  return projectName.replaceAll(' ', '-').toLowerCase();
}

const projectsList = [
  'Like a Trello',
  'Dogs and facts',
  'Simple chat',
  'Chest of notes',
  'Help desk',
  'Retro game',
];

export const kebabedList: Array<string> = [];

const projectsObjectList: Array<ProjectsObject> = projectsList.map((item) => {
  const kebabed = kebabaizer(item);
  kebabedList.push(kebabed);
  return {
    id: uniqid(),
    projectName: item,
    kebabedProjectName: kebabaizer(item),
  };
});

export default projectsObjectList;
