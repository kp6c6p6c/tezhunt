
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/','8a5'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/','38a'),
    exact: true
  },
  {
    path: '/blog/first-blog-post/',
    component: ComponentCreator('/blog/first-blog-post/','43b'),
    exact: true
  },
  {
    path: '/blog/long-blog-post/',
    component: ComponentCreator('/blog/long-blog-post/','70a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/','f0a'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/','0ff'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus/',
    component: ComponentCreator('/blog/tags/docusaurus/','5f0'),
    exact: true
  },
  {
    path: '/blog/tags/facebook/',
    component: ComponentCreator('/blog/tags/facebook/','be8'),
    exact: true
  },
  {
    path: '/blog/tags/hello/',
    component: ComponentCreator('/blog/tags/hello/','eb5'),
    exact: true
  },
  {
    path: '/blog/tags/hola/',
    component: ComponentCreator('/blog/tags/hola/','a5d'),
    exact: true
  },
  {
    path: '/blog/welcome/',
    component: ComponentCreator('/blog/welcome/','87e'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/','9d9'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','935'),
    routes: [
      {
        path: '/docs/intro/',
        component: ComponentCreator('/docs/intro/','688'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations/',
        component: ComponentCreator('/docs/tutorial-basics/congratulations/','cb6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post/',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post/','927'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document/',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document/','304'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page/',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page/','cd5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site/',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site/','fa7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features/',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features/','920'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions/',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions/','bc2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site/',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site/','dad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
