import styles from './SignUpInput.module.css'

export default function SignUpInput(props) {
    return (<>
        <label htmlFor={props.name} className={styles.label}>{props.labelName}</label><br />
        <input type={props.type} name={props.name} className={styles.input} required/>
    </>)
}
