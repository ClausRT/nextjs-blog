import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; //Lê os metadados que estão nos .md
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {id, ...matterResult.data};
  })

  return allPostsData.sort((a, b) => a.date - b.date);
};

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')  //RegEx eu só aceito por enquanto hahaha
      }
    };
  })
};

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`); //achei que era algo de JQuery, mas descobri o que é template string. Ainda acho feio.
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents)
  /*  //Por algum motivo talvez óbvio o toString não funciona muito bem dessa forma, então fiz igual ao tutorial
  const contentHtml = await remark()
                            .use(html)
                            .process(matterResult.content)
                            .toString();*/
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {id, contentHtml, ...matterResult.data};
};