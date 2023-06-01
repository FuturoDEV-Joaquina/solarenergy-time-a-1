import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
    it("deveria ter um titulo DevInHouse - Navbar", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>)

        const titulo = screen.getByText("DevInHouse - Navbar");
        expect(titulo).toBeInTheDocument();
    })
})