import { Await, BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import userEvent from '@testing-library/user-event'

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));


const user = userEvent.setup()

function renderComponent() {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>)
}

describe("Navbar", () => {

    it("deveria ter um botão para a página Dashboard",() => {
        renderComponent()
        const buttonDashboard = screen.getByRole("button", { name: /Dashboard/i });
        expect(buttonDashboard).toBeInTheDocument();
        
    })


    it("deveria ter um titulo DevInHouse - Navbar", () => {
        renderComponent()
        const titulo = screen.getByText("DevInHouse - Navbar");
        expect(titulo).toBeInTheDocument();



    })

    it("deveria redirecionar para a página dashboard quando clica no botão dashboard",async() => {
        renderComponent()
        const buttonDashboard = screen.getByRole("button", { name: /Dashboard/i });

        await user.click(buttonDashboard)

        expect(mockNavigate).toHaveBeenCalledWith("/")
        

    })




        
})