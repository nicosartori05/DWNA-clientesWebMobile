<script>
export default {
    name: 'App',
}
</script>  


<template>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">DV Chat</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link to="/" class="nav-link" href="#">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/chat" class="nav-link" href="#">Chat</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/iniciar-sesion" class="nav-link" href="#">Iniciar sesion</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/registro" class="nav-link" href="#">Registrarse</router-link>
                </li>
               </ul> 
            </div>
          </div>
        </nav>

        <main>
          <div class="container py-3">
            <router-view/>
          </div>
        </main>
        <footer>
          <p>&copy; Da Vinci 2023</p>
        </footer>
</template>  
