import GitHubCard from "../GitHubCard.js"
import { render, screen } from '@testing-library/react';

test('renders a snapshot', () => {
    render(<GitHubCard/>);
    const todoElement = screen.getByTestId("GHCard")
    expect(todoElement).toBeInTheDocument()
});
