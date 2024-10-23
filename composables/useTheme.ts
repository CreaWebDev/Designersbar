import { Theme } from "@/types/Theme"

// Insp: https://github.com/nuxt/nuxt/issues/13020
export const useTheme = () => {
  const identifier = "theme"
  const defaultTheme = Theme.LIGHT

  // const cookie = useCookie<Theme>(identifier)
  // const state = useState(identifier, () => cookie.value)

  // watch(state, () => (cookie.value = state.value))

  // onMounted(() => {
  //   if (!cookie.value || !Object.values(Theme).includes(cookie.value)) {
  //     state.value = defaultTheme
  //   }
  // })

  const setTheme = (theme: Theme) => {
    state.value = theme
  }

  const theme = computed(() => {
    if (state.value === Theme.SYSTEM) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }

    return state.value
  })

  return { themeSetting: state, setTheme, theme }
}
