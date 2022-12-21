import { useEffect, useState } from "react";
import { CartContainer } from "./CartContainer"
import FormularioContainer from "./Formulario"
import style from "./style.module.scss";

export interface Form {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    pagamento: string;
}

const PedidoContainer = () => {

    const [form, setForm] = useState({
        cep: "",
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        pagamento: "",
    });

    const [error, setError] = useState(false);

    const validateForm = () => {
        let valid = true;
        Object.keys(form).forEach((key) => {
            if (form[key as keyof Form] === "") {
                valid = false;
            }
        });
        return valid;
    }
    useEffect(() => {
        setError(!validateForm());
        console.log(form,validateForm())
        localStorage.setItem("entrega_form", JSON.stringify(form));
    }, [form])

    return (
        <div className={style.pedidoContainer}>
            <FormularioContainer
                error={error}
                form={form}
                setForm={setForm} />

            <CartContainer form={form} error={error} />
        </div>
    )
}

export default PedidoContainer;