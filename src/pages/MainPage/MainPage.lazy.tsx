import { lazy } from "react"

const MainPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import("./MainPage")), 1200)
        })
)

export default MainPageLazy
