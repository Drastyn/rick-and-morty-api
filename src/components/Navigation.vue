<template>
  <div id="navigation" class="my-4 mx-5">
    <nav
      class="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <Button
        v-if="charactersInfo && charactersInfo.prev"
        :class="'pagination-previous nav-button page-button pointer shlop'"
        :text="'Previous Page'"
        @click.native="goToPage(charactersInfo.prev)"
      />
      <Button
        v-if="charactersInfo && charactersInfo.next"
        :class="'pagination-next nav-button page-button pointer shlop'"
        :text="'Next Page'"
        @click.native="goToPage(charactersInfo.next)"
      />
      <ul class="pagination-list" v-if="charactersInfo && charactersInfo.pages">
        <li v-for="(buttonPage, index) in charactersInfo.pages" :key="index">
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
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "navigation",
  props: ["charactersInfo", "page", "updatePage"],
  components: {
    Button,
  },
  methods: {
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
  },
};
</script>

<style></style>
