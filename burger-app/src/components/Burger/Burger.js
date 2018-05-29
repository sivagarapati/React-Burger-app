import React,{Component} from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    return(
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="cheese" />
        <BurgerIngredient type="meat" />
        <BurgerIngredient type="salad" />
        <BurgerIngredient type="bacon" />
        <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;