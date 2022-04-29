import React from "react";
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import Sectionbanner from "../componentes/componentes_mkt/section_banner"
import Seccionmkt3 from "../componentes/componentes_mkt/seccion_mkt3"
import SeccionMkt2 from "../componentes/componentes_mkt/seccion_mkt2"
import Slider from "../componentes/componentes_home/slider"
import SectionContacto from "../componentes/SectionContacto"
import SectionInstagram from "../componentes/SectionInstagram";
import "../componentes/global-styles/layout"
import Seo from "../componentes/seo"



function ecommerceDigital() {
  const colorFondo= "#031fff"

  return (
    <div>
 
      <Seo
              title="Marketing Digital, Google Adwords y Facebook Ads"
  
            ></Seo>
      <Header colorFondo={colorFondo}></Header>
      <Sectionbanner></Sectionbanner>

      <div class="container up">
        <div class="row">
            <div class="col-sm-7">
                <div class="one d-none d-md-block">
                    Somos una Agencia Boutique<br/> con Cupos Limitados para<br/> Garantizar Resultados<br/> Excepcionales
                </div>
                <div class="one1 d-block d-md-none">
                    Somos una agencia boutique con cupos limitados para garantizar resultados excepcionales
                </div>
                <div class="two d-none d-md-block">
                    Diseñamos y Desarrollamos Tiendas Online que te ayudan<br/> a <span style="text-decoration: underline;">
                        vender más por internet</span>.
                </div>
                <div class="two d-block d-md-none">
                    Diseñamos y Desarrollamos Tiendas Online que<br/> te ayudan a <span style="text-decoration: underline;">
                        vender más por internet</span>.
                </div>
                <img src="img/img1.png" class="img-fluid" alt="agencia de ecommerce chile" />
            </div>
            <div id="theformulario" class="col-sm-5">
                <div class="fondoFormulario2">
                    <p class="txt177">COMPLETA TUS DATOS, TE CONTACTAREMOS EN 24 HORAS HÁBILES</p>
                    <form class="miformu" action="mail.php" method="post">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Correo Eléctronico*</label>
                            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" required />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Nombre y Apellido*</label>
                            <input type="text" name="nombre" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu nombre y Apellido" required />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Celular*</label>
                            <input type="text" name="telefono" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="9 40458669" required />

                        </div>
                        <div class="form-group">
                            <label class="col-md-12 control-label nomargin" for="selectbasic">Elegir Servicio*</label>
                            <div class="col-md-12 nomargin">
                                <select name="servicio" id="selectbasic2" class="form-control">
									<option value="Nada Seleccionado">-- Selecciona un Servicio --</option>
                                    <option value="Desarrollar tu Ecommerce">Desarrollar tu Ecommerce</option>
                                    <option value="Rediseñar tu tienda online">Rediseñar tu tienda online</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary paraenviar2">Enviar</button>
                    </form>
                    <div class="mensaje2">Tus datos personales no serán compartidos en ninguna circunstancia.</div>
                </div>

            </div>
        </div>
    </div>




      <SeccionMkt2></SeccionMkt2>
      <Seccionmkt3></Seccionmkt3>
      <Slider></Slider>
      <SectionContacto></SectionContacto>
      <SectionInstagram></SectionInstagram>
      <Footer />

      





    </div>
  );
}

export default ecommerceDigital;
