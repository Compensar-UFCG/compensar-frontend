import { fireEvent, render, screen } from '@testing-library/react';

import Competences from '../Competences';
import competencesMock from './mocks/competencesMock.json';

describe('Competences component', () => {
  it.each(competencesMock.slice(0, 4))('render the first four elements', ({ title, description}) => {
    render(<Competences competences={competencesMock} />);
    
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('check if not contain more then four elements', () => {
    render(<Competences competences={competencesMock} />);
    
    const titleElement = screen.queryByText(competencesMock[4].title);
    const descriptionElement = screen.queryByText(competencesMock[4].description);

    expect(titleElement).not.toBeInTheDocument();
    expect(descriptionElement).not.toBeInTheDocument();
  });

  it('check if add next element in last of show list when clicks in the next button', async () => {
    render(<Competences competences={competencesMock} />);
    
    const nextBtn = screen.getAllByRole('button')[1];

    fireEvent.click(nextBtn);

    //Remove first element to add next element in final the list
    const titleFirsElement = screen.queryByText(competencesMock[0].title);
    const descriptionFirstElement = screen.queryByText(competencesMock[0].description);

    expect(titleFirsElement).not.toBeInTheDocument();
    expect(descriptionFirstElement).not.toBeInTheDocument();

    //Add fourth element in final the list
    const titleElement = await screen.findByText(competencesMock[4].title);
    const descriptionElement = await screen.findByText(competencesMock[4].description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('check if add previous element in the start of show list when clicks in the previous button', async () => {
    render(<Competences competences={competencesMock} />);
    
    const previousBtn = screen.getAllByRole('button')[0];
    const nextBtn = screen.getAllByRole('button')[1];

    fireEvent.click(nextBtn);
    
    //Remove first element
    const titleFirsElement = screen.queryByText(competencesMock[0].title);
    const descriptionFirstElement = screen.queryByText(competencesMock[0].description);

    expect(titleFirsElement).not.toBeInTheDocument();
    expect(descriptionFirstElement).not.toBeInTheDocument();

    fireEvent.click(previousBtn);

    //Back to add first element
    const titleElement = await screen.findByText(competencesMock[0].title);
    const descriptionElement = await screen.findByText(competencesMock[0].description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
  it('check when clicks in previous button if the component does not return an error', async () => {
    render(<Competences competences={competencesMock} />);
    
    const previousBtn = screen.getAllByRole('button')[0];

    fireEvent.click(previousBtn);
    
    const titleElement = await screen.findByText(competencesMock[0].title);
    const descriptionElement = await screen.findByText(competencesMock[0].description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('checks when you click on the nextBtn button and reaches the last element checks if the component does not return an error', async () => {
    render(<Competences competences={competencesMock} />);
    
    const nextBtn = screen.getAllByRole('button')[1];

    fireEvent.click(nextBtn);
    fireEvent.click(nextBtn);
    
    const titleElement = await screen.findByText(competencesMock[4].title);
    const descriptionElement = await screen.findByText(competencesMock[4].description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
