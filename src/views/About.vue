<template>
  <div id="aboutus">
    <Navbar />
    <div class="d-flex justify-content-center">
      <Card />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

export default {
  name: 'about',
  components: {
    Navbar,
    Card,
    Footer,
  },
};
</script>

<style scoped></style>
