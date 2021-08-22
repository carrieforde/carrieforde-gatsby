import React from 'react';

const gatsby = jest.requireActual('gatsby');

const graphql = jest.fn();
const Link = jest.fn().mockImplementation(
  // these props are invalid for an `a` tag
  ({
    activeClassName,
    activeStyle,
    getProps,
    innerRef,
    partiallyActive,
    ref,
    replace,
    to,
    ...rest
  }) =>
    React.createElement('a', {
      ...rest,
      href: to,
    })
);
const StaticQuery = jest.fn();
const useStaticQuery = jest.fn();

export { gatsby, graphql, Link, StaticQuery, useStaticQuery };
