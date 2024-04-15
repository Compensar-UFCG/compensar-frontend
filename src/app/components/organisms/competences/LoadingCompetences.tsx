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
      <Grid container spacing={2} sx={{
        justifyContent: 'space-evenly',
        alignContent: 'space-evenly',
        alignItems: 'center',
        gap: '8px' }}
      >
        {Array.from({ length: 9 }, () => 0).map((value, index) => <Skeleton key={value+index} variant="rectangular" sx={{ width: '360px', height: '280px' }} />)}
      </Grid>
    </Container>
  )
}

export default LoadingCompetences;