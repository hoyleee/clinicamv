

// Este comodín engaña a VS Code para que active el modo HTML sin romper tu código
const html = (strings, ...values) => strings.reduce((result, string, i) => result + string + (values[i] || ''), '');
class MainFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=html`
          <!-- Topbar Start -->
      <div class="container-fluid bg-secondary text-white   py-5 px-sm-3 px-md-5">
        <div class="row pt-5">
            <div class="col-lg-4 col-md-12 mb-5">
                 <img class="img-fluid" src="/img/logo.svg" alt=""  style="height: 200px;">
                
            </div>
            <div class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-md-4 mb-5">
                        <h5 class="text-primary mb-4">Quick Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white mb-2" href="#">Inicio</a>
                            <a class="text-white mb-2" href="#">Nosotros</a>
                            <a class="text-white mb-2" href="#">Contactanos</a>
                            
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="text-primary mb-4">Servicios</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a  class="text-white mb-2" href="blog.html" class="dropdown-item">Tapicería automotriz</a>
                            <a  class="text-white mb-2" href="single.html" class="dropdown-item">Reparación mecánica</a>
                            <a  class="text-white mb-2" href="single.html" class="dropdown-item">Mantenimiento preventivos y correctivos</a>
                            <a  class="text-white mb-2" href="single.html" class="dropdown-item">Undercoating</a>
                            <a  class="text-white mb-2" href="single.html" class="dropdown-item">Planchado y Pintado al Horno</a>
                            <a  class="text-white mb-2" href="single.html" class="dropdown-item">Grúa y Traslado</a>
                            <a  class="text-white mb-2" href="single.html" class="dropdown-item">Servicio de Lavado y Detalling</a>
                            <a  class="text-white mb-2" href="single.html" class="dropdown-item">Vidrio liquido ceramicado</a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="text-primary mb-4">Escríbenos o Agenda tu Cita</h5>
                        <p><i class="fa fa-map-marker-alt mr-2"></i>Pedro Ruizgallo1043, Ate</p>
                        <p><i class="fa fa-phone-alt mr-2"></i>+51 956 386 338</p>
                        <p><i class="fa fa-envelope mr-2"></i>servicios@clinicaautomotrizmv.pe</p>
                        <div class="d-flex justify-content-start mt-4">
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style="width: 40px; height: 40px;" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style="width: 40px; height: 40px;" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style="width: 40px; height: 40px;" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style="width: 40px; height: 40px;" href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
    </div>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-secondary border back-to-top"><i class="fa fa-angle-double-up"></i></a>

    <!-- Navbar End -->
        `
    }
}
customElements.define('main-footer', MainFooter);