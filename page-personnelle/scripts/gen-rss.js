const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Jérémie Letonnelier',
    site_url: 'https://jeremie-letonnelier.com',
    feed_url: 'https://jeremie-letonnelier.com/feed.xml',
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages'))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', name)
      )
      const frontmatter = matter(content)

    })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
