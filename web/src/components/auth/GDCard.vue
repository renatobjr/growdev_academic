<template>
  <v-card class="text-center pa-10">
    <v-card-title>
      <slot name="title" />
    </v-card-title>
    <v-card-text>
      <slot name="content"/>
    </v-card-text>
    <div class="ma-4">
      <slot name="actions"/>
    </div>
  </v-card>
</template>
