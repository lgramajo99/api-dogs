import styles from './Loading.module.css';

function Loading() {
    return (
        <div className={styles.loading}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export default Loading;