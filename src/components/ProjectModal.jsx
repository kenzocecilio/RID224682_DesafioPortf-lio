export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h3 className="modalTitle">{project.title}</h3>
          <button className="iconBtn iconBtnSquare" type="button" onClick={onClose} aria-label="Fechar">
            ✕
          </button>
        </div>

        <img className="modalImg" src={project.image} alt={project.title} />

        <p className="modalText">{project.details}</p>

        <div className="modalActions">
          <button className="btn btnSmall btnGhost" type="button" onClick={onClose}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
