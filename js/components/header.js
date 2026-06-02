

// Este comodín engaña a VS Code para que active el modo HTML sin romper tu código
const html = (strings, ...values) => strings.reduce((result, string, i) => result + string + (values[i] || ''), '');
class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = html`
          <!-- Topbar Start -->
    <div class="container-fluid">
        <div class="row bg-secondary py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left">
                <div class="d-inline-flex align-items-center">
                    <p class="mr-2 mb-2 mb-lg-0 text-white">Horario de atencion:</p>
                    <span class="mb-2 mb-lg-0 text-white">8.00AM - 9.00PM</span>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <p class="m-0 mr-2 text-white">Siguenos: </p>
                      <a target="_blank" class="btn    text-center mr-2 px-0" href="https://www.instagram.com/clinicaautomotrizmv"><img height="16" width="16" src="https://cdn.simpleicons.org/instagram/ffffff" /></a>
                            <a  target="_blank" class="btn  text-center mr-2 px-0" href="https://www.tiktok.com/@clinicaautomotrizmv"><img height="16" width="16" src="https://cdn.simpleicons.org/tiktok/ffffff" /></a>
                </div>
            </div>
        </div>
        <!-- <div class="row py-1 px-lg-5 align-items-center" style="background-color: #f6f6f6;">
            
            <div class="col-lg-8 text-center text-lg-right">
                <div class="d-md-inline-flex d-flex flex-column flex-md-row align-items-center">
                    <div class="my-2  d-inline-flex flex-column text-center pr-md-3 border-md-right align-items-center">
                       <div class="d-flex "> <i class=" fa fa-map-marker-alt mr-2"></i> <h6>Nuestro taller</h6></div>
                        <p class="m-0">Pedro Ruizgallo1043, Ate</p>
                    </div>
                    <div class="my-2  d-inline-flex flex-column text-center px-md-3 border-md-right align-items-center">
                       <div class="d-flex"> <i class="fa fa-envelope mr-2"></i> <h6>Escribenos</h6></div>

                        
                        <p class="m-0">servicios@clinicaautomotrizmv.pe</p>
                    </div>
                    <div class="my-2  d-inline-flex flex-column text-center  align-items-center ">
                        
                       <div class="d-flex"> <i class="fa fa-phone-alt mr-2"></i> <h6>Llamanos</h6></div>

                        <p class="m-0">+51 956 386 338</p>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
    <!-- Topbar End -->
    <!-- Navbar Start -->
    <div class="container-fluid p-0 nav- bar">
        <nav class="navbar navbar-expand-lg bg-secondary navbar-dark py-0">
            <a href="/" class="navbar-brand d-block d- lg-none">
                                   <img class="img-fluid p-2" src="/img/logo.svg" alt=""   style="height: 100px;">

            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav   py-4 mx-auto">
                    <a href="/" class="nav-item nav-link active">Inicio</a>
                    <a href="/nosotros" class="nav-item nav-link">Nosotros</a>
                     
                     <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Servicios</a>
                        <div class="dropdown-menu text-capitalize">
                            <a href="/servicios/tapiceria" class="dropdown-item">Tapicería automotriz</a>
                            <a href="/servicios/reparacion" class="dropdown-item">Reparación mecánica</a>
                            <a href="/servicios/mantenimiento" class="dropdown-item">Mantenimiento preventivos y correctivos</a>
                            <a href="/servicios/undercoating" class="dropdown-item">Undercoating</a>
                            <a href="/servicios/planchado" class="dropdown-item">Planchado y Pintado al Horno</a>
                            <a href="/servicios/grua" class="dropdown-item">Grúa y Traslado</a>
                            <a href="/servicios/lavado" class="dropdown-item">Servicio de Lavado y Detalling</a>
                            <a href="/servicios/vidrio_ceramico" class="dropdown-item">Vidrio liquido ceramicado</a>
                        </div>
                    </div>
                    <a href="/contacto" class="nav-item nav-link">Contacto</a>
                  
                     
                </div>
            </div>
        </nav>
    </div>
    <!-- Navbar End -->
        `
    }
}
customElements.define('main-header', MainHeader);