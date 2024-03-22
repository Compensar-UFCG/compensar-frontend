import { Container, Grid, Skeleton } from "@mui/material"

const LoadingCompetences = () => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '32px',
      margin: '24px 16px',
    }}>
      <Skeleton variant="rectangular" sx={{ width: '800px', height: '40px' }} />
      <Container sx={{ display: 'flex', alignItems: 'center'}}>
        <Grid container spacing={2} sx={{
          justifyContent: 'space-evenly',
          alignContent: 'space-evenly',
          alignItems: 'center',
          gap: '8px' }}
        >
          {Array.from({ length: 9 }, () => 0).map((index) => <Skeleton key={index} variant="rectangular" sx={{ width: '360px', height: '280px' }} />)}
        </Grid>
      </Container>
    </Container>
  )
}

export default LoadingCompetences;