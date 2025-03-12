import styles from './InfoTask.module.css';

export function InfoTask() {
    return (
        <div className={styles.containerTask}>

                <div className={styles.TaskCreat}>
                    <p>Tarefas criadas</p>
                    <div className={styles.NumberTask}>
                        <span className="NumberTask">5</span>
                    </div>
                </div>
                <div className={styles.CompletedTask}>
                    <p>Concluidas</p>
                    <div className={styles.NumberCompleted}>
                        <p>5 de 6</p>
                    </div>
                </div>
        </div>
    )
}