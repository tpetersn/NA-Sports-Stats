<template>
  <header class="navbar">
    <h1>North American Sports Statistics</h1>
  </header>
</template>

<style>
/* remove default body margin so header truly spans edge-to-edge */
body {
  margin: 0;
}

/* the nav itself */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #dff6fd;
  color: #1c1c1c;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
}

/* make sure the title stays flush left inside it */
.navbar h1 {
  margin: 0;
  font-size: 1.5rem;
}
</style>
