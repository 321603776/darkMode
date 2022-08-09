import React, { useContext, useEffect, useState } from "react"
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const themes = {
    light: {
        rootClassName: '',
        icon: faMoon,
        color: '#000'
        // Additional capabilities can be extended
    },
    dark: {
        rootClassName: 'dark-mode',
        icon: faSun,
        color: '#FFA500'
    }
}

const ThemesContext = React.createContext(themes.light)

export default function ThemeContainer({ children }) {
    const [theme, setTheme] = useState(themes.light)
    useEffect(() => {
        document.querySelector('html').className = theme.rootClassName // change html className
    }, [theme])

    return (
        <ThemesContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemesContext.Provider>
    )
}

export function useTheme() {
    const themeContent = useContext(ThemesContext)

    const setTheme = function (themeType) {
        if (!Object.keys(themes).includes(themeType)) {
            console.warn(`theme type '${themeType}' not find`)
            return
        }
        themeContent.setTheme(themes[themeType])
    }

    return {
        theme: themeContent.theme,
        setTheme
    }
}