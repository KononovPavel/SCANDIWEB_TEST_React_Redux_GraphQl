import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ProductsList from "../component/productList/ProductsList";
import OneProduct from "../component/OneProduct/OneProduct";
import {connect} from "react-redux";
import {AppStateType} from "../redux/store";
import Cart from "../component/cart/Cart";

type PropsType = {
    currentCategory: string
}

class Router extends React.Component<PropsType> {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact={true} path={'/cart'} render={() => <Cart/>}/>
                    <Route exact path={'/:category?'} render={() => <ProductsList/>}/>
                    <Route exact path={'/:category?/:id?'} render={() => <OneProduct/>}/>
                    <Route exact={true} path={'/'} render={() => <Redirect to={'/' + this.props.currentCategory}/>}/>
                </Switch>
            </div>
        );
    }
}

const MSTP = (state: AppStateType) => {
    return {
        currentCategory: state.header.currentCategory
    }
}

export default connect(MSTP)(Router);
