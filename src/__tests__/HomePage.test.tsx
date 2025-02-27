import { fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import Navbar from '@/components/Navbar';

import HomePage from '@/app/page';
import { CONTRACT } from '@/constant/__mocks__/contract';

jest.mock('@/constant/contract');

describe('Homepage', () => {
  it('renders the Components', () => {
    // Set the initial url:
    mockRouter.push('/');

    render(<HomePage />);

    const heading = screen.getByText(`Welcome to`);
    expect(heading).toBeInTheDocument();

    const tokenName = screen.getByText(CONTRACT.name);
    expect(tokenName).toBeInTheDocument();

    const description = screen.getByText(CONTRACT.description);
    expect(description).toBeInTheDocument();
  });

  it('clicking the menu item scrolls to the section', () => {
    // Set the initial url:
    mockRouter.push('/');

    render(
      <>
        <Navbar />
        <HomePage />
      </>
    );

    const buttonToSection = [
      ['About', 'about'],
      ['Tokenomics', 'tokenomics'],
      ['Partners', 'partners'],
      ['Socials', 'socials'],
    ];

    buttonToSection.forEach(([buttonText, sectionId]) => {
      const section = document.getElementById(sectionId);
      expect(section).toBeInTheDocument();

      // Simulate the button click
      fireEvent.click(screen.getAllByText(buttonText)[0]);

      const newPosition = section?.getBoundingClientRect().top;
      expect(newPosition).toBeLessThanOrEqual(window.innerHeight);
    });
  });
});
