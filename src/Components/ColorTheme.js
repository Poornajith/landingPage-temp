import {Dropdown} from "react-bootstrap";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import {useState} from "react";

export default function ColorTheme() {
    const [isDark , setIsDark] = useState(true)
    function ToggleThemeDark() {
        if(!isDark) {
            document.querySelector('body').setAttribute('data-bs-theme', 'dark')
            setIsDark(true)
        }
    }
    function ToggleThemeLight() {
        if(isDark){
            document.querySelector('body').setAttribute('data-bs-theme', 'light')
            setIsDark(false)
        }
    }

    return (
        <div className="theme me-2">
            <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    {isDark && (
                        <img src={sun} alt="light"/>
                    )}
                    {!isDark && (
                        <img src={moon} alt="dark"/>
                    )}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={ToggleThemeLight}>Light</Dropdown.Item>
                    <Dropdown.Item onClick={ToggleThemeDark}>Dark</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}