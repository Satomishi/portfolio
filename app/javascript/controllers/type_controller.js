import { Controller } from "@hotwired/stimulus"
import Typed from 'type.js'

// Connects to data-controller="type"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Je m'appelle Olivier Kermoal"],
      typeSpeed: 90,
      loop: true
    })
  }
}
