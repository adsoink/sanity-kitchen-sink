export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '603702a5739b116b544683f2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yohjihj9',
                  apiId: '3fe00563-b080-4851-a48b-6bd248d9868a'
                },
                {
                  buildHookId: '603702a58cb60c721c7cbd91',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ektf8keu',
                  apiId: '2abb1f1b-7d3e-480a-8ab7-460cb1784efb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adsoink/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ektf8keu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
