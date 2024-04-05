import { Box, Container, Grid, Typography } from "@mui/material";

const AboutComputationalThinking = () => {
  return (
    <Container sx={{ paddingBlock: '16px'}}>
      <Grid
        container
        spacing={8}
        sx={{
          justifyContent: 'space-evenly',
          alignContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 0
        }}
      >
        <Grid item xs={6}>
          <Box>
            <Typography variant='h4' gutterBottom>O que é Pensamento Computacional?</Typography>
            <Typography variant="subtitle1">O pensamento computacional (PC) é uma abordagem para resolver problemas que se baseia nas competências aprendidas com a ciência da computação. Não se resume apenas à programação de computadores, mas sim a uma maneira estruturada e modularizada de pensar. O PC é fundamentalmente uma habilidade humana que se estende para além da tecnologia, permitindo a identificação e solução de problemas em diversos contextos.</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <picture>
            <img src="/Pensamento-Computacional.png" alt="pc-image" className="about-ct__image"/>
          </picture>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutComputationalThinking;