export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eabd81f9311a770c203e56b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oa6w8afu',
                  apiId: '73200388-0a35-4abb-b69d-d5209d05e2ed'
                },
                {
                  buildHookId: '5eabd8209311a76e7f03e53b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p96ybea4',
                  apiId: '674a64c8-57fa-4660-b9d8-e7c5f0bfc982'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrseek/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p96ybea4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
