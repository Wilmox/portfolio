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

/*export const notes = [
    {
      title: 'A Brief History Of Time',
      author: 'Stephen hawking',
      date: "Aug 11, 2021",
      abstract: 'Hawking writes in non-technical terms about the structure, origin, development and eventual fate of the Universe. He talks about basic concepts like space and time, basic building blocks that make up the Universe (such as quarks) and the fundamental forces that govern it (such as gravity).',
      readTime: '45 minutes',
      rating: 5,
      amazonLink: 'https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168',
      slug: 'a-brief-hisory-of-time',
    },
    {
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      date: "Aug 11, 2021",
      abstract: "This book advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence. Rich Dad Poor Dad is written in the style of a set of parables, based on Kiyosaki's life.",
      readTime: '20 minutes',
      rating: 5,
      amazonLink: 'https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194',
      slug: 'rich-dad-poor-dad',
    },
    {
      title: 'Thirds is the best',
      author: 'Plop',
      date: "Aug 11, 2021",
      abstract: '33333  Lorem ipsum dolor sit amet, ',
      readTime: '20 minutes',
      rating: 1.5,
      amazonLink: 'https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168',
      slug: 'third',
    },
  ];*/