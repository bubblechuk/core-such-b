import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerAccount, login, logout  } from "../redux/slices";
import { useState } from "react";
import { useNavigate } from "react-router";
const LogPage = () => {
    const dispatch = useDispatch();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        const { username, password } = data;
        dispatch(login({ username, password }))
        navigate("/Магазин");

        reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("login", { required: "Введите логин" })}
                placeholder="Логин"
            />
            {errors.username && <p className={styles.p}>{errors.username.message}</p>}

            <input
                type="password"
                {...register("password", { required: "Введите пароль" })}
                placeholder="Пароль"
            />
            {errors.password && <p className={styles.p}>{errors.password.message}</p>}
            <span>
            <input type="checkbox" {...register("rememberMe")} />
            <label className={styles.label} >Запомнить меня</label>
            </span>
            <button className={styles.button} type="submit">Войти</button>
        </form>
    );
};



const RegPage = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const { login, phone, email, password } = data;
        dispatch(registerAccount({ login, phone, email, password }))
        alert("Аккаунт успешно зарегистрирован!");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input 
                {...register("login", { required: "Введите логин" })}
                placeholder="Ваш логин"
            />
            {errors.login && <p className={styles.p}>{errors.login.message}</p>}

            <input 
                {...register("phone", { required: "Введите номер телефона",
                    pattern: {
                        value: /^\+[1-9]{1}[0-9]{3,14}$/,
                        message: "Некорректный номер телефона"
                    }
                 })}
                placeholder="Ваш номер телефона"
            />
            {errors.phone && <p className={styles.p}>{errors.phone.message}</p>}

            <input 
                type="email"
                {...register("email", { 
                    required: "Введите эл. почту", 
                    pattern: { 
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, 
                        message: "Некорректный адрес эл. почты" 
                    } 
                })}
                placeholder="Ваш e-mail"
            />
            {errors.email && <p className={styles.p}>{errors.email.message}</p>}

            <input 
                type="password" 
                {...register("password", { 
                    required: "Введите пароль", 
                    minLength: { value: 6, message: "Пароль должен быть больше 6 символов" }
                })}
                placeholder="Ваш пароль"
            />
            {errors.password && <p className={styles.p}>{errors.password.message}</p>}

            <input 
                type="password" 
                {...register("confirmPassword", { 
                    required: "Пожалуйста введите ваш пароль снова", 
                    validate: (value) => value === getValues("password") || "Пароли не совпадают"
                })}
                placeholder="Подвердите ваш пароль"
            />
            {errors.confirmPassword && <p className={styles.p}>{errors.confirmPassword.message}</p>}

            <span><input 
                type="checkbox" 
                {...register("terms", { required: "Вы должны принять условия соглашения" })}
            />
            <label className={styles.label}>Я принимаю условия соглашения</label></span>
            {errors.terms && <p className={styles.p}>{errors.terms.message}</p>}

            <button className={styles.button} type="submit">Зарегистрироваться</button>
        </form>
    );
};



export const Authorization = () => {
    const [activeButton, setActiveButton] = useState(0);
    const accounts = useSelector(state => state.login.accounts);
    const handleButtonClick = (index) => {
        setActiveButton(index);
    };
    
    return (
        <div className={styles.login}>
            <div className={styles.window}>
            <div className={styles.choice}>
            {["Войти", "Зарегестрироваться"].map((label, index) => (
                        <div
                        className={`${styles.mbutton} ${activeButton === index ? styles.active : ""}`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {label}
                    </div>
                    ))}

            </div>
            {activeButton === 0 ? <LogPage /> : <RegPage />}
            </div>
        </div>
    );
};

export const Register = () => {
    return (
        <div className={styles.register}>
            <RegPage />
        </div>
    );
};
