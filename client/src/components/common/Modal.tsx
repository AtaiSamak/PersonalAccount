import React, { FC, MouseEvent, ReactNode } from "react";
import styles from "../../styles/common/modal.module.scss";

type ModalProps = {
    closeHandle: () => void;
    children?: ReactNode;
};

const Modal: FC<ModalProps> = ({ closeHandle, children }) => {
    const stopPropogation = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.container} onClick={closeHandle}>
            <div className={styles.window} onClick={stopPropogation}>
                <div className={styles.details}>
                    <h1 className={styles.title}>Add contact</h1>
                </div>
                <div className={styles.body}>{children}</div>
                <button
                    className={styles.closeButton}
                    onClick={closeHandle}
                ></button>
            </div>
        </div>
    );
};

export default Modal;
