import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>Blog Page</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
            <h3>{ post.node.frontmatter.title }</h3>
            <h6>{ post.node.frontmatter.date} | { post.node.frontmatter.author}</h6>
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <hr />

        </div>
    ))}
  </div>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }
`

export default BlogPage
