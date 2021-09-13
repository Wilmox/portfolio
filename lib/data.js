import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const noteDirectory = path.join(process.cwd(), '_content/notes');
const projectDirectory = path.join(process.cwd(), '_content/projects');

export function getAllNotes() {
  const allNotes = fs.readdirSync(noteDirectory);

  return allNotes.map(fileName => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(
      path.join(noteDirectory, fileName),
      'utf-8'
    )
    const {content, data} = matter(fileContents);
    return {
      data,
      content,
      slug,
    };  
  })
}

export function getAllProjects() {
  const allProjects = fs.readdirSync(projectDirectory);

  return allProjects.map(fileName => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(
      path.join(projectDirectory, fileName),
      'utf-8'
    )
    const {content, data} = matter(fileContents);
    return {
      data,
      content,
      slug,
    };  
  })
}