import { fireEvent, render, screen } from '@testing-library/react';

import CopyButton from '@/components/CopyButton';

describe('Copy Button', () => {
  beforeEach(() => {
    // Mock clipboard API using Object.defineProperty
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: jest.fn().mockResolvedValueOnce(undefined), // Mock successful write
      },
      writable: true,
    });
  });

  it('should copy to clipboard', async () => {
    render(
      <>
        <CopyButton value='Example' />
      </>
    );

    fireEvent.click(screen.getByText('copy'));

    // Assert that the clipboard API was called with the correct value
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Example');
  });
});
