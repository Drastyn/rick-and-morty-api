<template>
  <article id="card" class="card pointer">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="character.image" alt="character-image" />
      </figure>
      <div class="card-content">
        <div class="media-content">
          <p class="title is-2 shlop">{{ character.name }}</p>
          <div class="content is-flex-direction-column">
            <p class="text is-size-4 shlop m-0">Specie: {{ character.species }}</p>
            <p class="text is-size-4 shlop m-0">Status: {{ character.status }}</p>
            <p class="text is-size-4 shlop m-0">Origin: {{ character.origin.name }}</p>
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
};
</script>

<style></style>
