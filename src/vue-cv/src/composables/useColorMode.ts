import { ref, computed, onMounted } from "vue";

type Mode = "light" | "dark";
const STORAGE_KEY = "theme";

const theme = ref<Mode>("dark"); // valeur par défaut

function apply(t: Mode) {
  theme.value = t;
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem(STORAGE_KEY, t);
}

export default function useColorMode() {
  const isDark = computed(() => theme.value === "dark");

  const toggle = () => {
    apply(isDark.value ? "light" : "dark");
  };

  onMounted(() => {
    // init depuis localStorage, sinon depuis la préférence système
    const saved = (localStorage.getItem(STORAGE_KEY) as Mode | null);
    if (saved === "light" || saved === "dark") {
      apply(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      apply(prefersDark ? "dark" : "light");
    }
  });

  return { theme, isDark, toggle, setTheme: apply };
}
