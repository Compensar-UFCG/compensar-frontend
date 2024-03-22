import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";

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
            <Typography variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum vehicula justo, at sagittis quam malesuada quis. Phasellus ac eros sed turpis fermentum consectetur. Fusce eget lorem nec neque congue fringilla. Duis id libero vitae nulla tincidunt laoreet. Morbi nec erat vitae nunc bibendum posuere sed sed est. Phasellus id luctus dolor. Integer non leo in tortor aliquam posuere a eu lectus. Nullam eget est velit. Cras vulputate enim in arcu eleifend, et lacinia justo aliquam. Vestibulum in massa risus. Nam consectetur laoreet purus, sit amet sodales ex lacinia eget.</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            height="260"
            image="https://i.pravatar.cc/300"
            alt="Paella dish"
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutComputationalThinking;