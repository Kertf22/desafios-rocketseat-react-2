import { FaCreditCard, FaDollarSign } from "react-icons/fa";
import { GiBank, GiCash } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
import Input from "../../../Input/Input";
import PaymentSelect from "../../../Select/PaymentSelect";
import { Form } from "..";
import style from "./style.module.scss"


interface FormularioContainerProps {
    form: Form;
    error: boolean;
    setForm: (form: Form) => void;
}

const FormularioContainer = ({ form, error, setForm }: FormularioContainerProps) => {

    // const useForm

    return (
        <div className={style["form-container"]}>

            <form className={style.form}>

                <div className={style.info}>
                    <MdPlace className={style.icon} />
                    <div>
                        <h2>Endereço de Entrega</h2>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </div>

                <div className={style["inputs"]}>
                    <div className={style["input-group"]}>
                        <Input type="text"
                            placeholder="CEP"
                            className="lg"
                            value={form.cep}
                            onChange={(e) => setForm({ ...form, cep: e.target.value })}
                        />
                    </div>
                    <div className={style["input-group"]}>
                        <Input type="text"
                            placeholder="Rua"
                            className="xl"
                            value={form.rua}
                            onChange={(e) => setForm({ ...form, rua: e.target.value })}
                        />
                    </div>
                    <div className={style["input-group"]}>
                        <Input type="text"
                            placeholder="Número"
                            className="md"
                            value={form.numero}
                            onChange={(e) => setForm({ ...form, numero: e.target.value })}
                        />
                        <Input type="text"
                            placeholder="Complemento"
                            className="lg"
                            value={form.complemento}
                            onChange={(e) => setForm({ ...form, complemento: e.target.value })}
                            />
                    </div>
                    <div className={style["input-group"]}>

                        <Input type="text"
                            placeholder="Bairro"
                            className="md"
                            value={form.bairro}
                            onChange={(e) => setForm({ ...form, bairro: e.target.value })}
                        />

                        <Input type="text"
                            placeholder="Cidade"
                            className="lg"
                            value={form.cidade}
                            onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                        />

                        <Input type="text"
                            placeholder="UF"
                            className="sm"
                            value={form.estado}
                            onChange={(e) => setForm({ ...form, estado: e.target.value })}
                        />
                    </div>
                </div>
            </form>


            <div className={style.form}>

                <div className={style.info}>
                    <FaDollarSign className={style.icon} />
                    <div>
                        <h2>Pagamento</h2>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar
                        </p>
                    </div>
                </div>

                <div className={style["button-group"]}>
                    <PaymentSelect
                        icon={<FaCreditCard />}
                        title="Cartão de crédito"
                        action={() => { setForm({ ...form, pagamento: "cartao_credito" }) }}
                        active={form.pagamento === "cartao_credito"}
                    />
                    <PaymentSelect
                        icon={<GiBank />}
                        title="Cartão de Débito"
                        action={() => { setForm({ ...form, pagamento: "cartao_debito" }) }}
                        active={ form.pagamento === "cartao_debito"}
                    />
                    <PaymentSelect
                        icon={<GiCash />}
                        title=" Dinheiro"
                        action={() => { setForm({ ...form, pagamento: "dinheiro" }) }}
                        active={ form.pagamento === "dinheiro"}
                    />
                </div>
            </div>
            {error && <div className={style.error}>
                <p>Informe todos os campos</p>
            </div>}

        </div>
    )
}

export default FormularioContainer;