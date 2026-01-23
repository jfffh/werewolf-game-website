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
    screen = "player_turn"
    show_current_screen()
}