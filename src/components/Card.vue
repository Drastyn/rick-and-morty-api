<template>
  <article id="card" class="card">
    <div class="card-image">
      <figure class="image is-3by2 pointer" @click="openModal(character.image)">
        <img :src="character.image" alt="character-image" />
      </figure>
      <div class="card-content">
        <div class="media-content">
          <p class="title is-4 shlop">{{ character.name }}</p>
          <div class="content is-flex-direction-column">
            <p class="text is-size-6 shlop m-0">
              Specie: {{ character.species }}
            </p>
            <p class="text is-size-6 shlop m-0">
              Status: {{ character.status }}
            </p>
            <p class="text is-size-6 shlop m-0">
              Origin: {{ character.origin.name }}
            </p>
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
      window.addEventListener("click", (event) => {
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

<style></style>
