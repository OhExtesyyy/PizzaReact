import React from 'react';
import styles from "./NotFoundBlock.module.scss"

export default function NotFoundBlock() {
  return (
    <div className={styles.root}> 
      <h1>
        <span>😖</span> 
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>Приносим извинения, к сожалению данной страница отсутствует на нашем сайте</p>
    </div>
  );
}
