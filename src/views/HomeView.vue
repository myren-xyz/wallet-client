<template>
  <div class="home">
    <AssetsValue />
    <SingleCurrency
      v-for="currency in currencies"
      :key="currency.id"
      :currency="currency"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import AssetsValue from "@/components/AssetsValue.vue";
import SingleCurrency from "@/components/SingleCurrency.vue";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  components: {
    AssetsValue,
    SingleCurrency,
  },
  computed: mapState(["currencies"]),
};
</script>
