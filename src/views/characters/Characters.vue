<template>
  <main id="characters">
    <div class="columns is-multiline my-4 mx-4">
      <div
        class="column is-one-quarter-desktop is-half-tablet"
        v-for="(character, index) in characters.results"
        :key="index"
      >
        <Card :character="character" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card";
export default {
  name: "characters",
  components: {
    Card,
  },
  computed: {
    ...mapState("characters", ["characters"]),
  },
  mounted() {
    this.requestCharacters();
  },
  methods: {
    requestCharacters() {
      this.$store.dispatch("characters/getCharacters");
    },
  },
};
</script>
