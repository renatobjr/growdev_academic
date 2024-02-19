<script setup>
import { useSnackbarStore } from "@/store/snackbar";
import { useDialogStore } from "@/store/dialog";
import { storeToRefs } from 'pinia';


const snackBarStore = useSnackbarStore();
const dialogStore = useDialogStore();
const { snackbar } = storeToRefs(snackBarStore);
const { dialog } = storeToRefs(dialogStore);

const confirm = () => {
  dialogStore.resolve(true);
}

const cancel = () => {
  dialogStore.resolve(false);
}

</script>

<template>
  <v-dialog v-model="dialog.isOpen" :width="dialog.type === 'text' ? '500' : '80%' ">
    <v-card :title="dialog.title">
      <v-card-text v-if="dialog.type == 'text'">
        <span class="d-flex d-block">{{ dialog.message }}</span>
        <span>{{ dialog.submessage }}</span>

      </v-card-text>
      <v-img v-else aspect-ratio="1" cover :src="dialog.message"/>

      <v-card-actions v-if="dialog.showActions">
        <v-spacer></v-spacer>

        <v-btn
          color="warning"
          variant="flat"
          text="Cancelar"
          @click="cancel"
        ></v-btn>
        <v-btn
          color="primary"
          variant="flat"
          text="Aceitar"
          @click="confirm"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-app>
    <v-main>

      <v-snackbar
        v-model="snackbar.show"
        variant="flat"
        location="top"
        :color="snackbar.color"
      >
        <span>{{ snackbar.message }}</span>

        <template v-slot:actions>
          <v-btn color="primary" flat @click="snackbar.show = false"
            >Fechar</v-btn
          >
        </template>
      </v-snackbar>
      <slot />
    </v-main>
  </v-app>
</template>
