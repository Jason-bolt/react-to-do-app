import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center text-gray-500 text-sm">
        Created by Appiatu Group of Companies Copyright &copy; 2022
        <div className="flex flex-row mt-3 space-x-4">
            <a href="https://www.linkedin.com/in/jason-appiatu/" target={'_blank'}><FaLinkedinIn /></a>
            <a href="https://github.com/Jason-bolt" target={'_blank'}><FaGithub /></a>
        </div>
    </footer>
  )
}

export default Footer