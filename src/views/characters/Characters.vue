<template>
  <main id="characters">
    <Navigation
      :class="'navigation-fix'"
      :charactersInfo="characters.info"
      :page="page"
      :updatePage="updatePage"
    />
    <div class="columns is-multiline my-4 mx-4">
      <div
        class="column is-one-quarter-desktop is-half-tablet"
        v-for="(character, index) in characters.results"
        :key="index"
      >
        <Card :character="character" />
      </div>
      <Modal />
    </div>
    <Navigation
      :charactersInfo="characters.info"
      :page="page"
      :updatePage="updatePage"
    />
    <footer class="footer">
      <div class="content has-text-centered">
        <Credits />
      </div>
    </footer>
  </main>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Navigation from "@/components/Navigation";
import Credits from "@/components/Credits.vue";
export default {
  name: "characters",
  data() {
    return {
      page: 1,
      previousActivePage: null,
    };
  },
  components: {
    Card,
    Modal,
    Navigation,
    Credits,
  },
  computed: {
    ...mapState("characters", ["characters"]),
  },
  mounted() {
    this.requestCharacters();
  },
  methods: {
    requestCharacters() {
      this.$store.dispatch("characters/getCharacters", {
        page: this.page,
      });
    },
    updatePage(page) {
      this.previousActivePage = this.page;
      this.page = page;
      this.requestCharacters();
      this.updateActivePage();
    },
    updateActivePage() {
      this.removePreviousActivePageStyle();
      this.addActivePageStyle();
    },
    removePreviousActivePageStyle() {
      document
        .getElementsByName(`page-button-${this.previousActivePage}`)
        .forEach((elemenet) => elemenet.classList.remove("active-page"));
    },
    addActivePageStyle() {
      document
        .getElementsByName(`page-button-${this.page}`)
        .forEach((elemenet) => elemenet.classList.add("active-page"));
    },
  },
};
</script>
