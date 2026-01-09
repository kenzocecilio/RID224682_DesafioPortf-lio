import minhafoto from "../assets/images/minhafoto.png";

export default function Hero({ id, title, subtitle, buttonLabel, onButtonClick }) {
  return (
    <section id={id} className="hero">
      <div className="heroRow">
        {/* Caixa do texto */}
        <div className="heroBox">
          <h1 className="heroTitle">{title}</h1>
          <p className="heroText">{subtitle}</p>

          <button className="btn btnCyan" type="button" onClick={onButtonClick}>
            {buttonLabel}
          </button>
        </div>

        {/* Foto circular animada à direita */}
        <div className="heroPhotoWrap">
          <img
            className="heroPhoto"
            src={minhafoto}
            alt="Foto de perfil"
            loading="lazy"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
