import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react";
import Unidades from "./Unidades"

function renderComponent(){
    render(
    <BrowserRouter>
        <Unidades />
    </BrowserRouter>
    )
}