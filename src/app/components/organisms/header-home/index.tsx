import { FC } from "react";

import { Container } from "@mui/material";
import NavBar from "@components/organisms/NavBar";

const HeaderHome: FC = () => {
  return (
    <header>
      <Container sx={{
        padding: '12px 16px',
        marginBottom: '16px'
      }}>
        <NavBar/>
      </Container>
    </header>
  )
}

export default HeaderHome;