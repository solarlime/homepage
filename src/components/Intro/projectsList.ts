import uniqid from 'uniqid';

import projectsList from '../../content/projects.json';

export type ProjectsObject = {
  id: string,
  projectName: string,
  kebabedProjectName: string,
};

// A polyfill for iOS 12
if (!String.prototype.replaceAll) {
  // @ts-ignore
  // eslint-disable-next-line no-extend-native
  String.prototype.replaceAll = function (findValue: string | RegExp, replaceValue: string) {
    const analyzedString = this;
    return analyzedString.replace(new RegExp(findValue, 'g'), replaceValue);
  };
}

function kebabaizer(projectName: string) {
  return projectName.replaceAll(' ', '-').toLowerCase();
}

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
