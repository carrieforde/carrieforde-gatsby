import '@alcatraz-components/accordion';
import { MDXProvider } from '@mdx-js/react';
import 'cf-components-alert';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import CallOut from 'components/CallOut/CallOut';
import MergeFieldProvider from 'components/MergeField/MergeField.context';
import PageHeader from 'components/PageHeader/PageHeader';
import Pagination from 'components/Pagination/Pagination';
import Seo from 'components/Seo/Seo';
import Site from 'components/Site';
import TableOfContents from 'components/TableOfContents/TableOfContents';
import { KeyValue } from 'interfaces/KeyValue.type';
import { PostProps } from './Post.interface';

const shortcodes = { CallOut };

const Post: React.FC<PostProps> = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const { frontmatter, body, tableOfContents } = post;
  const { title, date, updated, category, description, showToc } = frontmatter;
  const { next, previous } = pageContext;
  const { search } = location;
  const [queryData, updateQueryData] = useState<KeyValue>(undefined);

  useEffect(() => {
    updateQueryData(qs.parse(search, { ignoreQueryPrefix: true }));
  }, [search]);

  return (
    <Site>
      <Seo title={title} description={description} />
      <PageHeader
        title={title}
        description={description}
        category={category}
        date={date}
        updated={updated}
      />
      {showToc && <TableOfContents {...tableOfContents} />}
      <MergeFieldProvider data={queryData}>
        <div className="post__content">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </MergeFieldProvider>
      <Pagination next={next} previous={previous} />
    </Site>
  );
};

export default Post;

export const query = graphql`
  query ($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        category
        description
        showToc
      }
      body
      tableOfContents
    }
  }
`;
