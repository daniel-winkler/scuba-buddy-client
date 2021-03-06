import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShopPage from "../pages/ShopPage";
import ErrorPage from "../pages/ErrorPage";
import SearchPage from "../pages/SearchPage";
import PostPage from "../pages/PostPage";
import DashboardPage from "../pages/DashboardPage";


export default function Router() {
    return (
        <div className="pagecontainer backgroundimg">
            <div className="contentwrap">
                <BrowserRouter>
                    <Navbar />
                    <Header />
                    <Switch>
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/shop/:id" component={ShopPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/post" component={PostPage} />
                        <Route path="/dashboard" component={DashboardPage} />
                        <Route component={ErrorPage} />
                    </Switch>
                </BrowserRouter>
            </div>
            {/* Footer dentro de pagecontainer y al mismo nivel que contentwrap para que tenga la posicion adecuada
            independientemente del contenido de la pagina (más detalles en el CSS) */}
            <Footer /> 
        </div>
    )
}
