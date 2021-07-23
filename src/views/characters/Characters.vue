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
      <nav
        class="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <Button
          v-if="characters.info && characters.info.prev"
          :class="'pagination-previous nav-button page-button pointer shlop'"
          :text="'Previous Page'"
          @click.native="goToPage(characters.info.prev)"
        />
        <Button
          v-if="characters.info && characters.info.next"
          :class="'pagination-next nav-button page-button pointer shlop'"
          :text="'Next Page'"
          @click.native="goToPage(characters.info.next)"
        />
        <ul
          class="pagination-list"
          v-if="characters.info && characters.info.pages"
        >
          <li v-for="(buttonPage, index) in characters.info.pages" :key="index">
            <Button
              :id="setPageButtonId(buttonPage)"
              v-if="
                page === buttonPage
                  ? (buttonClass =
                      'pagination-link nav-button page-button pointer shlop mt-1 active-page')
                  : (buttonClass =
                      'pagination-link nav-button page-button pointer shlop mt-1')
              "
              :class="buttonClass"
              :text="buttonPage"
              @click.native="goToSelectedPage(buttonPage)"
            />
          </li>
        </ul>
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
      previousActivePage: null,
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
    setPageButtonId(buttonPage) {
      return `page-button-${buttonPage}`;
    },
    goToPage(page) {
      window.scrollTo(0, 0);
      this.updatePage(page.split("=").pop());
    },
    goToSelectedPage(page) {
      window.scrollTo(0, 0);
      this.updatePage(page);
    },
    updatePage(page) {
      this.previousActivePage = this.page;
      this.page = page;
      this.requestCharacters();
      this.updateActivePage();
    },
    updateActivePage() {
      document
        .getElementById(`page-button-${this.previousActivePage}`)
        .classList.remove("active-page");
      document
        .getElementById(`page-button-${this.page}`)
        .classList.add("active-page");
    },
  },
};
</script>
