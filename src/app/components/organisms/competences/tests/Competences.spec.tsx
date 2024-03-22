import { fireEvent, render, screen } from '@testing-library/react';

import Competences from '../Competences';
import competencesMock from './mocks/competencesMock.json';

describe('Competences component', () => {
  it.each(competencesMock)('render the all elements', ({ title, description}) => {
    render(<Competences competences={competencesMock} />);
    
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
