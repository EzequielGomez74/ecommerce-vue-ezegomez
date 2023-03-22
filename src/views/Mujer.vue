<template>
  <Shop :product="getMujer" :image="heroMujer" :category="category" />
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "@/components/Shop.vue";

export default {
  components: { Shop },
  data() {
    return {
      heroMujer: "heroMujer.jpg",
      category: "Mujer",
    };
  },
  computed: {
    ...mapGetters(["getMujer"]),
  },
};
</script>

<style></style>
