import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Default } from './TableOfContents.stories';

const getComponentPieces = (container: HTMLElement) => {
  const toc = container.querySelector('.tableOfContents');
  const button = container.querySelector('.tocButton');
  const list = container.querySelector('.tableOfContentsList');

  return {
    toc,
    button,
    list,
  };
};

describe('TableOfContents', () => {
  it('should render a table of contents', () => {
    const { container } = render(<Default {...Default.args} />);
    const { toc, list } = getComponentPieces(container);
    expect(toc).toHaveClass('tableOfContents');
    expect(list).toBeTruthy();
  });

  it('should handle clicks correctly', () => {
    const { container } = render(<Default {...Default.args} />);
    const { toc, button } = getComponentPieces(container);

    expect(toc).not.toHaveClass('tocOpen');

    fireEvent.click(button);
    expect(toc).toHaveClass('tableOfContents tocIsOpen');
  });

  it('should handle key presses', () => {
    const { container } = render(<Default {...Default.args} />);
    const { toc, button } = getComponentPieces(container);

    expect(toc).not.toHaveClass('tocOpen');

    fireEvent.click(button);
    expect(toc).toHaveClass('tableOfContents tocIsOpen');

    fireEvent.keyUp(container, { key: 'Escape', code: 'Escape' });
    expect(toc).not.toHaveClass('tocOpen');
  });
});
