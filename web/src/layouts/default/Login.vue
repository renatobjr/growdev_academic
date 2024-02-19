<script setup>
import Default from './Default.vue';

</script>

<template>
  <default>
    <v-container fluid class="fill-height">
      <v-row justify="center">
        <v-col lg="3" md="6" sm="8">

          <slot />
        </v-col>
      </v-row>
    </v-container>
  </default>
</template>
