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
                  buildHookId: '5e67cc55c1958910dff21bf8',
                  title: 'Sanity Studio',
                  name: 'geta-gatsby-blog-studio',
                  apiId: 'a8d0ae99-4c53-488f-bb36-1bb55b0c5f71'
                },
                {
                  buildHookId: '5e67cc55023b840190866caf',
                  title: 'Blog Website',
                  name: 'geta-gatsby-blog',
                  apiId: '6c68ffeb-4939-4e86-bf3f-0c70dfc42262'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Wekios/geta-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://geta-gatsby-blog.netlify.com', category: 'apps' }
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
