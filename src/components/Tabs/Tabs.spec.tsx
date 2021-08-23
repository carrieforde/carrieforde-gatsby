import React from 'react';
import Tabs from './Tabs';
import { render, act, fireEvent } from '@testing-library/react';
import { Default } from './Tabs.stories';

describe('Tabs', () => {
  it('should render the Tabs component', () => {
    const { container } = render(<Default {...Default.args} />);

    expect(container).toMatchSnapshot();
  });

  it('should show the correct panel when a button is clicked', () => {
    const { container } = render(<Default {...Default.args} />);
    const buttons = container.querySelectorAll('button');
    const clickedButton = buttons[2];
    const panelId = clickedButton.getAttribute('aria-controls');

    act(() => {
      fireEvent.click(clickedButton);
    });

    const panel = container.querySelector(`#${panelId}`);

    expect(panel).not.toHaveAttribute('hidden');
  });
});
