import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useDialogStore = defineStore('dialog', () => {
  let resolved;
  const dialog = ref({
    isOpen: false,
    showActions: true,
    title: null,
    message: null,
    submessage: null,
    type: null
  })

  const openDialog = ({ title, message, submessage, showActions = true, type = 'text' }) => {
    dialog.value.isOpen = true
    dialog.value.showActions = showActions
    dialog.value.title = title
    dialog.value.message = message
    dialog.value.submessage = submessage
    dialog.value.type = type

    return new Promise((resolve) => {
      resolved = resolve;
    });
  };

  const resolve = (value) => {
    resolved(value)
    dialog.value.isOpen = false;
  }

  return  { dialog, openDialog, resolve };
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDialogStore, import.meta.hot));
}
