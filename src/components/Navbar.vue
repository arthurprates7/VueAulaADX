<template>
  <div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      
      <a href="/">
      <img class="img-time-matters"  :src="require(`../assets/images/logo.png`)" width="80">
      </a>
      <b-nav-item-dropdown text="Aluno" >

        <b-dropdown-item href="/new">Novo</b-dropdown-item>
        <b-dropdown-item href="/students">Listar</b-dropdown-item>

      </b-nav-item-dropdown>

    
    </b-navbar-nav>
  </b-navbar>
</div>
</template>
<script>

export default {
  name: "Navbar",
};
</script>
<style></style>