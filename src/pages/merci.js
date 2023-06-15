import React from "react";
import Header from "../componentes/header"
import Footer from "../Componentes/footerd"
import SectionInstagram from "../Componentes/seccion_instagram"
import SectionSaberMas from "../Componentes/seccion_saberM";
import SectionGracias from "../Componentes/sectionGracias";

function gracias() {
    const colorFondo = "#031fff"

    return (
        <div>
            <Header></Header>
            <SectionGracias></SectionGracias>
            <SectionSaberMas></SectionSaberMas>
            <SectionInstagram></SectionInstagram>
            <Footer></Footer>
        </div>
    )
}

export default gracias
