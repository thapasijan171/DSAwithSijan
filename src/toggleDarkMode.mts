import { d, darkModeState, toogleDarkMode } from "./ToggleDarkBtn.astro.0.mts";

// Toggles the "dark-mode" class

export function toggleDarkMode(state) {
	d.documentElement.classList.toggle("dark-mode", state);
	darkModeState = state;
	if (d.documentElement.classList.contains("dark-mode")) {
		toogleDarkMode.classList.remove("bi-lightning-charge");
		toogleDarkMode.classList.add("bi-lightning-charge-fill");
	} else {
		toogleDarkMode.classList.remove("bi-lightning-charge-fill");
		toogleDarkMode.classList.add("bi-lightning-charge");
	}
}
