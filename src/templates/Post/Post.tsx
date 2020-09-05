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

const Post: React.FC<PostProps> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { frontmatter, html } = post;
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
      <div className="post__content">{ReactHtmlParser(html)}</div>
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
    }
  }
`;
