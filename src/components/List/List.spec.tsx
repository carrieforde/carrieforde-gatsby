import { render } from '@testing-library/react';
import React from 'react';
import { BulletedList, NumberedList } from './List.stories';

function getListComponents(container: HTMLElement) {
  return {
    bulleted: container.querySelector('ul'),
    numbered: container.querySelector('ol'),
  };
}

describe('List', () => {
  it('should render a bulleted list', () => {
    const { container } = render(<BulletedList {...BulletedList.args} />);
    const { bulleted, numbered } = getListComponents(container);

    expect(container).toMatchSnapshot();
    expect(bulleted).toBeInTheDocument();
    expect(numbered).not.toBeInTheDocument();
  });

  it('should render a numbered list', () => {
    const { container } = render(<NumberedList {...NumberedList.args} />);
    const { bulleted, numbered } = getListComponents(container);

    expect(container).toMatchSnapshot();
    expect(bulleted).not.toBeInTheDocument();
    expect(numbered).toBeInTheDocument();
  });
});
