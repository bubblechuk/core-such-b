import { createSlice } from "@reduxjs/toolkit";
var json = require('./games.json')
const initialState = {
    accounts: [{
        login: "vadim",
        phone: "+375331337222",
        email: "berezka@gmail.com",
        password: "123456",
        isAuthenticated: true,
        library: [{
            image: "src",
            key: "ewewe"
        }],
        cart: []
    }],
    games: json
};
const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        registerAccount: (state, action) => {
            const newAccount = {
                ...action.payload,
                isAuthenticated: false,
            };
            state.accounts.push(newAccount);
        },
        login: (state, action) => {
            const { username, password } = action.payload;
            const account = state.accounts.find(
                (acc) => acc.username === username && acc.password === password
            );
            console.log(account)
            if (account) {
                account.isAuthenticated = true;
            } else {
                alert("Неверный логин или пароль");
            }
        },
        logout: (state) => {
            state.accounts.forEach((acc) => {
                acc.isAuthenticated = false;
            });
        },
        addToCart: (state, action) => {
            const game = action.payload;
        
            const account = state.accounts.find((acc) => acc.isAuthenticated);
        
            if (account) {
                const isAlreadyInCart = account.cart.some((item) => item.key === game.key);
        
                if (!isAlreadyInCart) {
                    account.cart.push(game);
                    console.log(`Игра "${game.title}" добавлена в корзину.`);
                } else {
                    console.log(`Игра "${game.title}" уже есть в корзине.`);
                }
            } else {
                console.log("Добавление в корзину невозможно: пользователь не авторизован.");
                alert("Войдите в аккаунт, чтобы добавить товар в корзину.");
            }
        },
        delFromCart: (state, action) => {
            const account = state.accounts.find((acc) => acc.isAuthenticated);
            if (account) {
                account.cart = account.cart.filter(elem => elem.title !== action.payload)
            }
        },
        buyCart: (state, action) => {
            
            const account = state.accounts.find((acc) => acc.isAuthenticated);
            if (account) { 
            if (account.cart.length != 0) {
                account.library = [...account.library, account.cart];
                account.cart = [];
                alert('Спасибо за покупку!');
            }
            else {
                alert("Ваша корзина пуста!")
            }
        }
        else {
            alert("Ваша корзина пуста!")
        }
        },
        wipeCart: (state) => {
            const account = state.accounts.find((acc) => acc.isAuthenticated);
            if (account) {
                account.cart = [];
            }
        }
        
    },
});

export const { registerAccount, login, logout, addToCart, delFromCart, buyCart, wipeCart } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
