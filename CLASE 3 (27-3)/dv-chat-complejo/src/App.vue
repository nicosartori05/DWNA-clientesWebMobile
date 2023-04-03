<script>
export default {
    name: 'App',
}
</script>  


<template>
     <main class="container mt-3">
        <h1 class="mb-3">Ejemplo de chat Basico</h1>

        <div class="row">
          <div id="chat" class="col-8 mb-3"></div>
          <div class="col-4 mb-3">
            <form action="#" id="form-message">
              <div class="mb-3">
                <label for="username" class="form-label">Usuario</label>
                <input type="text" id="username" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Mensaje</label>
                <textarea
                  type="text"
                  id="message"
                  class="form-control"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Enviar</button>
            </form>

            <div id="feedback" class="mb-3"></div>
          </div>
        </div>
      </main>
</template>  
