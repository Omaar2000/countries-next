export function toggleDarkMode(isDark) {
  const newMode = isDark ? "light" : "dark";
  localStorage.setItem("mode", newMode);
  document.documentElement.classList.toggle("dark");
  return newMode === "dark";
}
