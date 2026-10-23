export default function SiteFooter() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} Rebecca North</span>
      <nav aria-label="Contact">
        <a href="mailto:rebecnorth@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/rebecca-a-north/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/rebeccanorth-personal" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </footer>
  );
}
