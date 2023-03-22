<template>
  <Shop :product="getHombre" :image="heroHombre" :category="category" />
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "@/components/Shop.vue";

export default {
  components: { Shop },
  data() {
    return {
      heroHombre: "heroMen.jpg",
      category: "Hombre",
    };
  },
  computed: {
    ...mapGetters(["getHombre"]),
  },
};
</script>

<style></style>
