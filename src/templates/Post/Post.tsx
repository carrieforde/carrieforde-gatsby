import '@alcatraz-components/accordion';
import 'cf-components-alert';
import { graphql } from 'gatsby';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PageHeader from '../../components/PageHeader';
import Pagination from '../../components/Pagination';
import SEO from '../../components/SEO';
import Site from '../../components/Site';
import { PostProps } from './Post.interface';
import TableOfContents from '../../components/TableOfContents';

const Post: React.FC<PostProps> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { frontmatter, html, tableOfContents } = post;
  const { title, date, updated, category, description } = frontmatter;
  const { next, previous } = pageContext;

  return (
    <Site>
      <SEO title={title} description={description} />
      <PageHeader
        title={title}
        description={description}
        category={category}
        date={date}
        updated={updated}
      />
      <TableOfContents tableOfContents={tableOfContents} />
      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Pagination next={next} previous={previous} />
    </Site>
  );
};

export default Post;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        category
        description
      }
      html
      tableOfContents
    }
  }
`;
