players = [
    "villager",
    "werewolf",
]

extra_roles = []

turn_order = [
    "werewolf",
    "seer",
    "robber",
    "troublemaker",
    "insomniac"
]

current_player = 0
current_turn = 0

screen = "next_player"

function get_next_player() {
    document.getElementById("next_player_name").textContent = players[current_player]
}

document.addEventListener('DOMContentLoaded', (event) => {
    init()
})

function init() {
    show_current_screen()
    if (screen == "next_player") {
        get_next_player()
    }
}

function show_current_screen() {
    screens = document.querySelectorAll(".screen")
    screens.forEach(element => {
        element.classList.add("hidden")
    });
    document.getElementById(screen).classList.remove("hidden")
}

function start_turn() {
    screen = "standard_turn_screen"
    show_current_screen()
}

// Toggle button class
class ToggleButton extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener("click", () => {
            if (this.hasAttribute("radio")) {
                // deselect siblings if radio mode enabled
                const siblings = Array.from(this.parentNode.children)
                    .filter(child => child !== this)
                for (let i=0; i<siblings.length; i++) {
                    siblings[i].classList.remove("selected")
                }
                this.classList.add("selected")
            
            } else {
                this.classList.toggle("selected")
            }
        });
    }
}

customElements.define("toggle-button", ToggleButton, { extends: 'button' })