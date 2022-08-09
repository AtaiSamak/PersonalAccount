import React, { FC } from "react";
import styles from "../../styles/common/notice.module.scss";

type NoticeProps = {
    type: "error" | "ok";
    text: string;
};

const Notice: FC<NoticeProps> = ({ type, text }) => {
    const containerStyles =
        type === "error"
            ? `${styles.container} ${styles.error}`
            : styles.container;

    return (
        <div className={containerStyles}>
            <div className={styles.text}>{text}</div>
        </div>
    );
};

export default Notice;
