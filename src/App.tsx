import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import MainPageLazy from "./pages/MainPage/MainPage.lazy";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";
import { useTheme } from "./theme";
import { classNames } from "./helpers";

export const App = () => {
    const { theme, handleThemeChange } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={handleThemeChange}>theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback='...loading'>
                <Routes>
                    <Route path='/about' element={<AboutPageLazy />} />
                    <Route path='/' element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};
