import "./style.css"
import * as Twe from "tw-elements/dist/src/js/index.es";

const { initTE, Input, Modal, Ripple } = Twe
const initTailwindElement = (event) => {
  initTE({ Input, Ripple  }, { allowReinits: true })
}

import ModalHtml from "./modal-html"

class ExampleModal {
  constructor(container) {
    this.modal = null
    this.container = container
  }

  createModal() {
    if (this.modal) {
      return;
    }

    console.log("Creating a modal")

    // Mocking turbo frame
    var placeholder = document.createElement("div")
    placeholder.innerHTML = ModalHtml
    const node = placeholder.firstElementChild
    placeholder = null
    this.container.appendChild(node)
    // End mocking turbo frame

    this.modal = new Modal(node)
    this.modal.show()
    this.subscribeToHiddenModalEvent(this.modal._element)
  }

  destroyModal() {
    if (!this.modal) {
      return
    }

    this.modal.dispose()
    this.modal = null
  }

  subscribeToHiddenModalEvent(element) {
    element.addEventListener("hidden.te.modal", () => this.destroyModal())
  }
}

addEventListener("DOMContentLoaded", () => {
  const exampleModal = new ExampleModal(
    document.getElementById("modal-container")
  );

  console.log("Listening to events")
  const createButton = document.getElementById("create-modal-button")
  const destroyButton = document.getElementById("destroy-modal-button")

  createButton.addEventListener("click", () => {
    exampleModal.createModal()
  })

})
