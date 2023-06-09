import styles from './index.module.css';
import formStyles from './form.module.css';

const AssinaturaNewsletter = () => {
  return (
    <div className={styles.assinaturaNewsletter}>
      <div className={styles.assinaturaNewsletter__container}>
        <div className={styles.assinaturaNewsletter__container__text}>
          <h1 className={styles.assinaturaNewsletter__container__headersmall}>
            Sua casa com as
            <br />
          </h1>
          <h1>
            <strong>
              melhores <br /> plantas
            </strong>
          </h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
        </div>

        <form className={formStyles.form} action="/">
          <div className={formStyles.fieldGroup}>
            <input type="email" placeholder='Insira seu E-mail' />
            <button>
              Assinar Newsletter
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AssinaturaNewsletter;
