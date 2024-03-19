'use client'
import './styles.scss';

import { Container, Typography } from "@mui/material";
import ThemeContainer from "./components/templates/ThemeContainer";
import Header from "./components/pages/homepage/Header";
import Competences from "@components/pages/competences/Competences";
import { Competences as CompetencesType } from '@app/interfaces/competence.types';
import competencesMock from '@components/pages/competences/tests/mocks/competencesMock.json';

export default function Home() {
  return (
    <ThemeContainer>
      <>
        <Header/>
        <main>
          <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            margin: '24px 16px',
          }}>
            <Typography variant='h4' gutterBottom>Pensamento Computacional</Typography>
            <Competences competences={competencesMock} />
          </Container>
        </main>
        <footer>
        </footer>
      </>
    </ThemeContainer>
  );
}