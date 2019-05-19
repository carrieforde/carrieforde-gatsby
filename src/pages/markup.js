import React from "react"
import Layout from "../components/layout"

const Markup = () => (
  <Layout>
    <header class="page-header">
      <h1 class="page-title">Category: Markup</h1>
      <div class="taxonomy-description">
        <p>Posts in this category test markup tags and styles.</p>
      </div>{" "}
    </header>

    <article
      id="post-919"
      class="post-919 post type-post status-publish format-standard hentry category-content category-formatting category-markup"
    >
      <header class="entry-header">
        <h2 class="entry-title">
          <a
            href="http://wptest.io/demo/2013/01/11/markup-and-formatting/"
            rel="bookmark"
          >
            Markup And Formatting
          </a>
        </h2>{" "}
      </header>

      <div class="entry-content">
        <h2>Headings</h2>
        <h1>Header one</h1>
        <h2>Header two</h2>
        <h3>Header three</h3>
        <h4>Header four</h4>
        <h5>Header five</h5>
        <h6>Header six</h6>
        <h2>Blockquotes</h2>
        <p>Single line blockquote:</p>
        <blockquote>
          <p>Stay hungry. Stay foolish.</p>
        </blockquote>
        <p>Multi line blockquote with a cite reference:</p>
        <blockquote>
          <p>
            People think focus means saying yes to the thing you&#8217;ve got to
            focus on. But that&#8217;s not what it means at all. It means saying
            no to the hundred other good ideas that there are. You have to pick
            carefully. I&#8217;m actually as proud of the things we
            haven&#8217;t done as the things I have done. Innovation is saying
            no to 1,000 things.{" "}
            <cite>
              Steve Jobs &#8211; Apple Worldwide Developers&#8217; Conference,
              1997
            </cite>
          </p>
        </blockquote>
        <h2>Tables</h2>
        <table>
          <tbody>
            <tr>
              <th>Employee</th>
              <th class="views">Salary</th>
              <th />
            </tr>
            <tr class="odd">
              <td>
                <a href="http://john.do/">John Saddington</a>
              </td>
              <td>$1</td>
              <td>
                Because that&#8217;s all Steve Job&#8217; needed for a salary.
              </td>
            </tr>
            <tr class="even">
              <td>
                <a href="http://tommcfarlin.com/">Tom McFarlin</a>
              </td>
              <td>$100K</td>
              <td>For all the blogging he does.</td>
            </tr>
            <tr class="odd">
              <td>
                <a href="http://jarederickson.com/">Jared Erickson</a>
              </td>
              <td>$100M</td>
              <td>
                Pictures are worth a thousand words, right? So Tom x 1,000.
              </td>
            </tr>
            <tr class="even">
              <td>
                <a href="http://chrisam.es/">Chris Ames</a>
              </td>
              <td>$100B</td>
              <td>With hair like that?! Enough said&#8230;</td>
            </tr>
          </tbody>
        </table>
        <h2>Definition Lists</h2>
        <dl>
          <dt>Definition List Title</dt>
          <dd>Definition list division.</dd>
          <dt>Startup</dt>
          <dd>
            A startup company or startup is a company or temporary organization
            designed to search for a repeatable and scalable business model.
          </dd>
          <dt>#dowork</dt>
          <dd>
            Coined by Rob Dyrdek and his personal body guard Christopher
            &#8220;Big Black&#8221; Boykins, &#8220;Do Work&#8221; works as a
            self motivator, to motivating your friends.
          </dd>
          <dt>Do It Live</dt>
          <dd>
            I&#8217;ll let Bill O&#8217;Reilly will{" "}
            <a
              title="We'll Do It Live"
              href="https://www.youtube.com/watch?v=O_HyZ5aW76c"
            >
              explain
            </a>{" "}
            this one.
          </dd>
        </dl>
        <h2>Unordered Lists (Nested)</h2>
        <ul>
          <li>
            List item one
            <ul>
              <li>
                List item one
                <ul>
                  <li>List item one</li>
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                </ul>
              </li>
              <li>List item two</li>
              <li>List item three</li>
              <li>List item four</li>
            </ul>
          </li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ul>
        <h2>Ordered List (Nested)</h2>
        <ol>
          <li>
            List item one
            <ol>
              <li>
                List item one
                <ol>
                  <li>List item one</li>
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                </ol>
              </li>
              <li>List item two</li>
              <li>List item three</li>
              <li>List item four</li>
            </ol>
          </li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ol>
        <h2>HTML Tags</h2>
        <p>
          These supported tags come from the WordPress.com code{" "}
          <a title="Code" href="http://en.support.wordpress.com/code/">
            FAQ
          </a>
          .
        </p>
        <p>
          <strong>Address Tag</strong>
        </p>
        <address>
          1 Infinite Loop
          <br />
          Cupertino, CA 95014
          <br />
          United States
        </address>
        <p>
          <strong>Anchor Tag (aka. Link)</strong>
        </p>
        <p>
          This is an example of a{" "}
          <a title="Apple" href="http://apple.com">
            link
          </a>
          .
        </p>
        <p>
          <strong>Abbreviation Tag</strong>
        </p>
        <p>
          The abbreviation <abbr title="Seriously">srsly</abbr> stands for
          &#8220;seriously&#8221;.
        </p>
        <p>
          <strong>Acronym Tag</strong>
        </p>
        <p>
          The acronym <acronym title="For The Win">ftw</acronym> stands for
          &#8220;for the win&#8221;.
        </p>
        <p>
          <strong>Big Tag</strong>
        </p>
        <p>
          These tests are a <big>big</big> deal, but this tag is no longer
          supported in HTML5.
        </p>
        <p>
          <strong>Cite Tag</strong>
        </p>
        <p>
          &#8220;Code is poetry.&#8221; &#8212;<cite>Automattic</cite>
        </p>
        <p>
          <strong>Code Tag</strong>
        </p>
        <p>
          You will learn later on in these tests that{" "}
          <code>word-wrap: break-word;</code> will be your best friend.
        </p>
        <p>
          <strong>Delete Tag</strong>
        </p>
        <p>
          This tag will let you <del>strikeout text</del>, but this tag is no
          longer supported in HTML5 (use the <code>&lt;strike&gt;</code>{" "}
          instead).
        </p>
        <p>
          <strong>Emphasize Tag</strong>
        </p>
        <p>
          The emphasize tag should <em>italicize</em> text.
        </p>
        <p>
          <strong>Insert Tag</strong>
        </p>
        <p>
          This tag should denote <ins>inserted</ins> text.
        </p>
        <p>
          <strong>Keyboard Tag</strong>
        </p>
        <p>
          This scarsly known tag emulates <kbd>keyboard text</kbd>, which is
          usually styled like the <code>&lt;code&gt;</code> tag.
        </p>
        <p>
          <strong>Preformatted Tag</strong>
        </p>
        <p>This tag styles large blocks of code.</p>

        <p>
          <strong>Quote Tag</strong>
        </p>
        <p>
          <q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer
        </p>
        <p>
          <strong>Strong Tag</strong>
        </p>
        <p>
          This tag shows{" "}
          <strong>
            bold<strong> text.</strong>
          </strong>
        </p>
        <p>
          <strong>Subscript Tag</strong>
        </p>
        <p>
          Getting our science styling on with H<sub>2</sub>O, which should push
          the &#8220;2&#8221; down.
        </p>
        <p>
          <strong>Superscript Tag</strong>
        </p>
        <p>
          Still sticking with science and Albert Einstein&#8217;s E = MC
          <sup>2</sup>, which should lift the &#8220;2&#8221; up.
        </p>
        <p>
          <strong>Teletype Tag</strong>
        </p>
        <p>
          This rarely used tag emulates <tt>teletype text</tt>, which is usually
          styled like the <code>&lt;code&gt;</code> tag.
        </p>
        <p>
          <strong>Variable Tag</strong>
        </p>
        <p>
          This allows you to denote <var>variables</var>.
        </p>
      </div>

      <footer class="entry-footer">
        <span class="byline">
          <span class="author vcard">
            <img
              alt=""
              src="http://1.gravatar.com/avatar/1f0b00b8853cf0311888bb3ed2a77ebc?s=49&#038;d=retro&#038;r=g"
              srcset="http://1.gravatar.com/avatar/1f0b00b8853cf0311888bb3ed2a77ebc?s=98&#038;d=retro&#038;r=g 2x"
              class="avatar avatar-49 photo"
              height="49"
              width="49"
            />
            <span class="screen-reader-text">Author </span>{" "}
            <a
              class="url fn n"
              href="http://wptest.io/demo/author/tommcfarlin/"
            >
              Tom McFarlin
            </a>
          </span>
        </span>
        <span class="posted-on">
          <span class="screen-reader-text">Posted on </span>
          <a
            href="http://wptest.io/demo/2013/01/11/markup-and-formatting/"
            rel="bookmark"
          >
            <time
              class="entry-date published updated"
              datetime="2013-01-11T20:22:19+00:00"
            >
              January 11, 2013
            </time>
          </a>
        </span>
        <span class="cat-links">
          <span class="screen-reader-text">Categories </span>
          <a href="http://wptest.io/demo/category/content/" rel="category tag">
            Content
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/formatting/"
            rel="category tag"
          >
            Formatting
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/markup/" rel="category tag">
            Markup
          </a>
        </span>
        <span class="comments-link">
          <a href="http://wptest.io/demo/2013/01/11/markup-and-formatting/#respond">
            Leave a comment
            <span class="screen-reader-text"> on Markup And Formatting</span>
          </a>
        </span>{" "}
      </footer>
    </article>

    <article
      id="post-168"
      class="post-168 post type-post status-publish format-standard hentry category-alignment category-post-format-aside category-post-format-audio category-captions category-post-format-chat category-child-category-01 category-child-category-02 category-child-category-03 category-child-category-04 category-child-category-05 category-codex category-comments category-content category-corner-case category-embeds category-excerpt category-featured-images category-formatting category-post-format-gallery category-grandchild-category category-images category-jetpack category-post-format-link category-lists category-markup category-more-tag category-parent-category category-password category-pingbacks category-post-formats category-post-format-quote category-shortcodes category-standard category-post-format-status category-titles category-trackbacks category-twitter category-uncategorized category-unpublished category-post-format-video category-videopress"
    >
      <header class="entry-header">
        <h2 class="entry-title">
          <a
            href="http://wptest.io/demo/2012/11/02/many-categories/"
            rel="bookmark"
          >
            Many Categories
          </a>
        </h2>{" "}
      </header>

      <div class="entry-content">
        <p>This post has many categories.</p>
      </div>

      <footer class="entry-footer">
        <span class="byline">
          <span class="author vcard">
            <img
              alt=""
              src="http://0.gravatar.com/avatar/60cb31e323d15f1c0fc1a59ac17ba484?s=49&#038;d=retro&#038;r=g"
              srcset="http://0.gravatar.com/avatar/60cb31e323d15f1c0fc1a59ac17ba484?s=98&#038;d=retro&#038;r=g 2x"
              class="avatar avatar-49 photo"
              height="49"
              width="49"
            />
            <span class="screen-reader-text">Author </span>{" "}
            <a class="url fn n" href="http://wptest.io/demo/author/manovotny/">
              Michael Novotny
            </a>
          </span>
        </span>
        <span class="posted-on">
          <span class="screen-reader-text">Posted on </span>
          <a
            href="http://wptest.io/demo/2012/11/02/many-categories/"
            rel="bookmark"
          >
            <time
              class="entry-date published updated"
              datetime="2012-11-02T02:00:03+00:00"
            >
              November 2, 2012
            </time>
          </a>
        </span>
        <span class="cat-links">
          <span class="screen-reader-text">Categories </span>
          <a
            href="http://wptest.io/demo/category/alignment/"
            rel="category tag"
          >
            Alignment
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/post-format-aside/"
            rel="category tag"
          >
            Aside
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/post-format-audio/"
            rel="category tag"
          >
            Audio
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/captions/" rel="category tag">
            Captions
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/post-format-chat/"
            rel="category tag"
          >
            Chat
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/parent-category/child-category-01/"
            rel="category tag"
          >
            Child Category 01
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/parent-category/child-category-02/"
            rel="category tag"
          >
            Child Category 02
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/parent-category/child-category-03/"
            rel="category tag"
          >
            Child Category 03
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/parent-category/child-category-04/"
            rel="category tag"
          >
            Child Category 04
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/parent-category/child-category-05/"
            rel="category tag"
          >
            Child Category 05
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/codex/" rel="category tag">
            Codex
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/comments/" rel="category tag">
            Comments
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/content/" rel="category tag">
            Content
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/corner-case/"
            rel="category tag"
          >
            Corner Case
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/embeds/" rel="category tag">
            Embeds
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/excerpt/" rel="category tag">
            Excerpt
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/featured-images/"
            rel="category tag"
          >
            Featured Images
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/formatting/"
            rel="category tag"
          >
            Formatting
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/post-format-gallery/"
            rel="category tag"
          >
            Gallery
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/parent-category/child-category-03/grandchild-category/"
            rel="category tag"
          >
            Grandchild Category
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/images/" rel="category tag">
            Images
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/jetpack/" rel="category tag">
            Jetpack
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/post-format-link/"
            rel="category tag"
          >
            Link
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/lists/" rel="category tag">
            Lists
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/markup/" rel="category tag">
            Markup
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/more-tag/" rel="category tag">
            More Tag
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/parent-category/"
            rel="category tag"
          >
            Parent Category
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/password/" rel="category tag">
            Password
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/pingbacks/"
            rel="category tag"
          >
            Pingbacks
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/post-formats/"
            rel="category tag"
          >
            Post Formats
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/post-format-quote/"
            rel="category tag"
          >
            Quote
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/shortcodes/"
            rel="category tag"
          >
            Shortcodes
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/standard/" rel="category tag">
            Standard
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/post-format-status/"
            rel="category tag"
          >
            Status
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/titles/" rel="category tag">
            Titles
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/trackbacks/"
            rel="category tag"
          >
            Trackbacks
          </a>
          ,{" "}
          <a href="http://wptest.io/demo/category/twitter/" rel="category tag">
            Twitter
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/uncategorized/"
            rel="category tag"
          >
            Uncategorized
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/unpublished/"
            rel="category tag"
          >
            Unpublished
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/post-format-video/"
            rel="category tag"
          >
            Video
          </a>
          ,{" "}
          <a
            href="http://wptest.io/demo/category/videopress/"
            rel="category tag"
          >
            VideoPress
          </a>
        </span>{" "}
      </footer>
    </article>
  </Layout>
)

export default Markup
