<template>
  <div id="aboutus">
    <Navbar/>
    <div class="d-flex justify-content-center">
      <CardLeftToRight/>
    </div>
    
    
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import CardLeftToRight from "@/components/CardLeftToRight";
import Footer from '@/components/Footer';

export default {
  name: "aboutUs",
  components: {
    Navbar,
    CardLeftToRight,
    Footer
  }
};
</script>

<style scoped>

</style>