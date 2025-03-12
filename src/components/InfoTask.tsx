import styles from './InfoTask.module.css';
interface InfoTaskProps {
    count: number;
    countCheck:number;
}
export function InfoTask({ count ,countCheck}: InfoTaskProps) {
    return (
        <div className={styles.containerTask}>

                <div className={styles.TaskCreat}>
                    <p>Tarefas criadas</p>
                    <div className={styles.NumberTask}>
                        <span className="NumberTask">{count}</span>
                    </div>
                </div>
                <div className={styles.CompletedTask}>
                    <p>Concluidas</p>
                    <div className={styles.NumberCompleted}>
                        <p>{countCheck} de {count}</p>
                    </div>
                </div>
        </div>
    )
}