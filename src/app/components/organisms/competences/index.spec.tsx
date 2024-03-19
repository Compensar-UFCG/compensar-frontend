import { render, screen } from '@testing-library/react';
import competencesMock from './tests/mocks/competencesMock.json';
import Home, { getServerSideProps} from '@/pages/home';
import { getLittleDescription } from './utils';

describe('Home', () => {
  describe('Competences section', () => {
    it.each(competencesMock.slice(0, 4))('render competence section list', async ({ title, description}) => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(competencesMock),
      });

      const { props } = await getServerSideProps();
      render(<Home {...props}/>);
      
      const titleSectionCompetences = screen.getByText('Competências')
      const titleElement = screen.getByText(title);
      const descriptionElement = screen.getByText(getLittleDescription(description));
      
      expect(titleSectionCompetences).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
    it('No render competence section when competence list is empty', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });
      const { props } = await getServerSideProps();
      render(<Home {...props}/>);
      
      const titleSectionCompetences = screen.queryByText('Competências');

      expect(titleSectionCompetences).not.toBeInTheDocument();
    });

    it('No render competence section when API return error', async () => {
      global.fetch = jest.fn().mockRejectedValue(new Error('Internal Server Error'));
      const { props } = await getServerSideProps();
      render(<Home {...props}/>);
      
      const titleSectionCompetences = screen.queryByText('Competências');

      expect(titleSectionCompetences).not.toBeInTheDocument();
    });
  });
});