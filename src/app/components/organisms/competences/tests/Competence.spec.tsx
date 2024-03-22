import { render, screen } from '@testing-library/react';
import Competence from '../Competence';
import { randomUUID } from 'crypto';

const mockCompetence = {
  id: randomUUID(),
  title: 'Mock Title',
  description: 'Mock Description',
};

const mockCompetenceWithMaxlentghTitleAndDescription = {
  id: randomUUID(),
  title: 'I add a new title with more them 100 characters in my unit test to check if returns error when i try',
  description: 'I add a new description with more them 255 characters in my unit test to check if returns error when i try do this! So I add another characters to see if returns an error or not. So, to this I need add to mutch characters in my text. Because, I need know!',
};

describe('Competence component', () => {
  it('renders competence title and description', () => {
    render(<Competence competence={mockCompetence} />);
    
    const titleElement = screen.getByText(mockCompetence.title);
    const descriptionElement = screen.getByText(mockCompetence.description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders competence title and description with max length', () => {
    render(<Competence competence={mockCompetenceWithMaxlentghTitleAndDescription} />);
    
    const titleElement = screen.getByText(mockCompetenceWithMaxlentghTitleAndDescription.title);
    const descriptionElement = screen.getByText(mockCompetenceWithMaxlentghTitleAndDescription.description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
