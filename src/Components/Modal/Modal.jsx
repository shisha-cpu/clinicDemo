import styles from './modal.module.css'

export default function Modal (){
    return(
        <>
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <h1>Заполните форму </h1>
                <button> Закрыть </button>
                <form action="">
                    <label >Имя</label>
                    <input type="text" placeholder='Имя' /> 
                    <label >Телефон</label>
                    <input type="phone" placeholder='Телефон' /> 
                    <input type='submit'  />
                </form>
            </div>
        </div>
        </>
    )
}