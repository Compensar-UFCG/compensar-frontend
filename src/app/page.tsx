'use client'
import './styles.scss';

import ThemeContainer from "./components/templates/ThemeContainer";
import Header from "./components/pages/homepage/Header";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CompetencesContainer from '@components/organisms/competences';

export default function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContainer>
        <>
          <Header/>
          <main>
            <CompetencesContainer />
          </main>
          <footer>
          </footer>
        </>
      </ThemeContainer>
    </QueryClientProvider>
  );
}