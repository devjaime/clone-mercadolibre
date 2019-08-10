import React, { Component } from "react";
import SimpleAppBar from "./Components/NavBar/NavBar";
import FBPost from "./Components/FB_Post/FB_Post";
// material ui
import { Grid } from "@material-ui/core";
// import NavigateNext from "@material-ui/icons/NavigateNext";
// material ui

class App extends Component {
  constructor() {
    super();
    this.state = {
      post_obj: {
        createdBy: "Jaime Hernández",
        avatar:
          "https://devjaime.github.io/images/jaime.png",
        description:
          'MiJia Roborock, Dispositivo de limpieza de casa altamente inteligente, Planificación de caminos inteligentes 1800 Pa potente succión Control remoto de la aplicación Batería de ion de litio de 5200 mA Piensa como un ser humano Planificación del camino inteligente El aspirador Mi Robot es un dispositivo de limpieza del hogar altamente inteligente con 12 sensores diferentes. Tres procesadores diferentes rastrean sus movimientos en tiempo real y calculan los datos utilizando el algoritmo de Localización y Mapeo Simultáneo (SLAM) para trazar el diseño de su hogar y determinar las mejores rutas de limpieza',
        images: [
          "https://www.xiaomi-chile.com/wp-content/uploads/2019/05/xiaomi-mijia-mi-robot-vacuum-05_14441_1480418317-1.jpg",
          "https://www.xiaomi-chile.com/wp-content/uploads/2019/05/xiaomi-mijia-mi-robot-vacuum-01_14441_1473169853-1.jpg",
          "https://www.xiaomi-chile.com/wp-content/uploads/2019/05/xiaomi-mijia-mi-robot-vacuum-04_14441_1473169854-1.jpg",
          "https://www.xiaomi-chile.com/wp-content/uploads/2019/05/xiaomi-mijia-mi-robot-vacuum-02_14441_1473169853-1.jpg",
          "https://www.xiaomi-chile.com/wp-content/uploads/2019/05/xiaomi-mijia-mi-robot-vacuum-03_14441_1473169853-1.jpg",
          "https://www.xiaomi-chile.com/wp-content/uploads/2019/05/xiaomi-mijia-mi-robot-vacuum-04_14441_1473169854-1.jpg",
          "https://www.xiaomi-chile.com/wp-content/uploads/2019/05/xiaomi-mijia-mi-robot-vacuum-06_14441_1480418317-1.jpg",
          "https://www.xiaomi-chile.com/wp-content/uploads/2019/05/xiaomi-mijia-mi-robot-vacuum-07_14441_1480418317-1.jpg"
        ],
        
        createdAt: Date.now(),
        likes: [
          "Luiggi",
          "Mario",
          "Pedro",
          "Carlos",
          "Seba",
          "Robert",
          "Juan",
          "Luis"
        ]
      }
    };
  }

  render() {
    const paperStyle = { padding: "0px", margin: "0px" };
    const { post_obj } = this.state;
    return (
      <div>
        <SimpleAppBar />
        <Grid
          container
          style={paperStyle}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div style={paperStyle}>
            <FBPost post={post_obj} />
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
