import { render, screen } from '@testing-library/react';
import Competence from '../Competence';
import { randomUUID } from 'crypto';
import { getLittleDescription } from '../utils';

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
    const descriptionElement = screen.getByText(getLittleDescription(mockCompetence.description));

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders competence image', () => {
    render(<Competence competence={mockCompetence} />);
    
    const imageElement = screen.getByAltText('competence-image');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://i.pravatar.cc/300');
  });

  it('renders competence title and description with max length', () => {
    render(<Competence competence={mockCompetenceWithMaxlentghTitleAndDescription} />);
    
    const titleElement = screen.getByText(mockCompetenceWithMaxlentghTitleAndDescription.title);
    const descriptionElement = screen.getByText(getLittleDescription(mockCompetenceWithMaxlentghTitleAndDescription.description));

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
