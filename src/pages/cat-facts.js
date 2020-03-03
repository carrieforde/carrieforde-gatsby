import React from 'react';
import { Component } from 'react';
import Site from '../components/Site';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import 'cat-fact-component';
import '@alcatraz-components/accordion';

class CatFacts extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    fetch(
      'https://cat-fact-wp.carrieforde.co/wp-json/wp/v2/pages?slug=cat-facts'
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
          title: response[0].title.rendered,
          content: response[0].content.rendered
        });
      });
  }

  render() {
    const { title, content } = this.state;
    return (
      <Site>
        <SEO title={title} />
        <PageHeader title={title} />
        <div
          className="page__content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Site>
    );
  }
}

export default CatFacts;
