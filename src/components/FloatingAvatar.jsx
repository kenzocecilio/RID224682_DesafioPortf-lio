export default function FloatingAvatar({ initials = "AA" }) {
  return (
    <div className="floatingAvatar" aria-hidden="true">
      <div className="floatingAvatarInner">
        <span className="floatingAvatarText">{initials}</span>
      </div>
    </div>
  );
}
