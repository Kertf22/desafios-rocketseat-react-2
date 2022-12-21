import style from "./style.module.scss";

interface AccSelectProps  {
    actionPlus: () => void;
    actionMinus: () => void;
    quantity: number;
};

const AccSelected = ({ actionPlus, actionMinus ,quantity}: AccSelectProps) => {

    return (
        <div className={style.accSelect}>
            <span className={style.accSelect__button} onClick={actionMinus}>-</span>
            <span>{quantity}</span>
            <span className={style.accSelect__button} onClick={actionPlus}>+</span>
        </div>
    )
};

export default AccSelected;