import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    accounts: [{
        login: "vadim",
        phone: "+375331337222",
        email: "berezka@gmail.com",
        password: "123456",
        isAuthenticated: true
    }]
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
    },
});

export const { registerAccount, login, logout } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
