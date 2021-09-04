import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), '_content');

export function getAllNotes() {
  const allNotes = fs.readdirSync(contentDirectory);

  return allNotes.map(fileName => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
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