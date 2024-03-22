'use client'
import './styles.scss';

import ThemeContainer from "./components/templates/ThemeContainer";
import Header from "./components/organisms/Header";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CompetencesContainer from '@components/organisms/competences';
import AboutComputationalThinking from '@components/organisms/about-computational-thinking';

export default function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContainer>
        <>
          <Header/>
          <main className="main_home">
            <AboutComputationalThinking />
            <CompetencesContainer />
          </main>
          <footer>
          </footer>
        </>
      </ThemeContainer>
    </QueryClientProvider>
  );
}