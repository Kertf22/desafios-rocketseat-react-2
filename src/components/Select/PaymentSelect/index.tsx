import style from "./style.module.scss";

interface PaymentSelectProps {
    icon: React.ReactNode;
    title: string;
    action: () => void;
    active: boolean;    
};

const PaymentSelect = (props: PaymentSelectProps) => {

    return (
        <div className={`${style["payment-select"]} ${props.active && style["active"]}`} 
         onClick={props.action}
         >
            {props.icon}
            <p>
            {props.title}

            </p>
        </div>
    )
};

export default PaymentSelect;