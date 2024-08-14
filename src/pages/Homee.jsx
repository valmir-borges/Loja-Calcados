import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/Banner";
import Footer from "../components/footer";
import Marca from '../components/marca'
import { Grid } from "@mui/material";
import Card from "../components/BuyCard";
import img from "../img/tenis1.jpeg";
import img2 from "../img/tenis2.jpg";
import img3 from "../img/tenis3.jpg";
import img4 from "../img/tenis4.jpg";
import BntHistoria from "../components/BtnHistoria";


function Homee() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BntHistoria/>
      <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{mt: 10, mb: 20}}
      >
        <Grid>
          <Card
            title="Nike TN Branco"
            description="Descrição personalizada para o sapato."
            image={img}
            altText="Descrição da imagem"
          />
        </Grid>
        <Grid>
          <Card
            title="Mizuno Wave Prophecy"
            description="Descrição personalizada para o sapato."
            image={img2}
            altText="Descrição da imagem"
          />
        </Grid>
        <Grid>
          <Card
            title="Sapato Social"
            description="Descrição personalizada para o sapato."
            image={img3}
            altText="Descrição da imagem"
          />
        </Grid>
        <Grid>
          <Card
            title="Sanália"
            description="Descrição personalizada para o sapato."
            image={img4}
            altText="Descrição da imagem"
          />
        </Grid>
      </Grid>
      <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          mt: 5,
          mb: 10,
        }}
      >
        <Grid>
          <Card
            title="Nike TN Branco"
            description="Descrição personalizada para o sapato."
            image={img}
            altText="Descrição da imagem"
          />
        </Grid>
        <Grid>
          <Card
            title="Mizuno Wave Prophecy"
            description="Descrição personalizada para o sapato."
            image={img2}
            altText="Descrição da imagem"
          />
        </Grid>
        <Grid>
          <Card
            title="Sapato Social"
            description="Descrição personalizada para o sapato."
            image={img3}
            altText="Descrição da imagem"
          />
        </Grid>
        <Grid>
          <Card
            title="Sanália"
            description="Descrição personalizada para o sapato."
            image={img4}
            altText="Descrição da imagem"
          />
        </Grid>
      </Grid>
      <Marca/>
      <Footer />
    </div>
  );
}

export default Homee;
