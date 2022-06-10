const footerYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="footer footer-center p-10  bg-gray-700 text-primary-content">
      <p>Copyright &copy; {footerYear}</p>
    </footer>
  )
}

export default Footer
