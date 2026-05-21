

// Este comodín engaña a VS Code para que active el modo HTML sin romper tu código
const html = (strings, ...values) => strings.reduce((result, string, i) => result + string + (values[i] || ''), '');
class MainHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=html`
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
                    <p class="m-0 mr-1 text-white">Siguenos:</p>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <!-- <a class="text-white px-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a> -->
                    <a class="text-white px-2" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="row py-1 px-lg-5 align-items-center" style="background-color: #f6f6f6;">
            <div class="col-lg-4">
                <a href="" class="navbar-brand d-none d-lg-block">
                    <img class="img-fluid" src="/img/logo.svg" alt=""  style="height: 100px;">
                </a>
            </div>
            <div class="col-lg-8 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <div class="d-inline-flex flex-column text-center pr-3 border-right">
                        <h6>Nuestro taller</h6>
                        <p class="m-0">Pedro Ruizgallo1043, Ate</p>
                    </div>
                    <div class="d-inline-flex flex-column text-center px-3 border-right">
                        <h6>Escribenos</h6>
                        <p class="m-0">servicios@clinicaautomotrizmv.pe</p>
                    </div>
                    <div class="d-inline-flex flex-column text-center pl-3">
                        <h6>Llamanos</h6>
                        <p class="m-0">+51 956 386 338</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->
    <!-- Navbar Start -->
    <div class="container-fluid p-0 nav- bar">
        <nav class="navbar navbar-expand-lg bg-secondary navbar-dark py-0">
            <a href="" class="navbar-brand d-block d-lg-none">
                                   <img class="img-fluid" src="/img/logo.svg" alt=""  style="height: 100px;">

            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav m-auto py-4">
                    <a href="/" class="nav-item nav-link active">Inicio</a>
                    <a href="/nosotros" class="nav-item nav-link">Nosotros</a>
                     
                     <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Servicios</a>
                        <div class="dropdown-menu text-capitalize">
                            <a href="/servicios/tapiceria" class="dropdown-item">Tapicería automotriz</a>
                            <a href="/servicios/reparacion" class="dropdown-item">Reparación mecánica</a>
                            <a href="single.html" class="dropdown-item">Mantenimiento preventivos y correctivos</a>
                            <a href="single.html" class="dropdown-item">Undercoating</a>
                            <a href="single.html" class="dropdown-item">Planchado y Pintado al Horno</a>
                            <a href="single.html" class="dropdown-item">Grúa y Traslado</a>
                            <a href="single.html" class="dropdown-item">Servicio de Lavado y Detalling</a>
                            <a href="single.html" class="dropdown-item">Vidrio liquido ceramicado</a>
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