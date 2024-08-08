<template>
  <article id="card" class="card">
    <div class="card-image">
      <figure class="image is-3by2 pointer" @click="openModal(character.image)">
        <img :src="character.image" alt="character" />
      </figure>
      <div class="card-content">
        <div class="media-content">
          <p class="title is-3 shlop has-text-centered">{{ character.name }}</p>
          <div class="content is-flex-direction-column">
            <p class="shlop m-2 info">Specie: {{ character.species }}</p>
            <p class="shlop m-2 info">Status: {{ character.status }}</p>
            <p class="shlop m-2 info">Origin: {{ character.origin.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "card",
  props: ["character"],
  data() {
    return {
      modalIsOpen: false,
      modal: "",
      modalBackground: "",
      modalImage: "",
    };
  },
  mounted() {
    this.setModalValues();
    this.closeModal();
  },
  methods: {
    setModalValues() {
      this.modal = document.getElementById("modal");
      this.modalBackground = document.getElementById("modal-background");
      this.modalImage = document.getElementById("modal-image");
    },
    closeModal() {
      document.addEventListener("click", (event) => {
        if (this.modalIsOpen && event.target === this.modalBackground) {
          this.modalIsOpen = false;
          this.disableModalStyles();
        }
      });
    },
    disableModalStyles() {
      this.modalImage.src = "";
      this.modalImage.classList.add("is-hidden");
      this.modal.classList.remove("modal");
      this.modalBackground.classList.remove("modal-background");
    },
    openModal(imageUrl) {
      this.modalIsOpen = true;
      this.enableModalStyles(imageUrl);
    },
    enableModalStyles(imageUrl) {
      this.modalImage.src = imageUrl;
      this.modalImage.classList.remove("is-hidden");
      this.modal.classList.add("modal");
      this.modalBackground.classList.add("modal-background");
    },
  },
};
</script>
