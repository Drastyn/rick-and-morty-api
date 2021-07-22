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
      <Modal />
    </div>
    <div class="my-4 mx-5">
      <nav class="pagination" role="navigation" aria-label="pagination">
        <Button
          v-if="characters.info && characters.info.prev"
          :buttonClass="'pagination-previous nav-button page-button pointer shlop'"
          :text="'Previous Page'"
          @click.native="goToPage(characters.info.prev)"
        />
        <Button
          v-if="characters.info && characters.info.next"
          :buttonClass="'pagination-previous nav-button page-button pointer shlop'"
          :text="'Next Page'"
          @click.native="goToPage(characters.info.next)"
        />
      </nav>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
export default {
  name: "characters",
  data() {
    return {
      page: 1,
    };
  },
  components: {
    Card,
    Modal,
    Button,
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
    goToPage(page) {
      window.scrollTo(0, 0);
      this.page = page.split("=").pop();
      this.requestCharacters();
    },
  },
};
</script>
