export interface Project {
  id: string
  title: string
  description: string
  url: string
  image: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Pizzaria La Romana',
    description: 'Site feito para uma Pizzaria, com as tecnologias: HTML, CSS, Bootstrap e JavaScript.',
    url: 'https://yurilima66.github.io/pizzaria_La_Romana/',
    image: '/imagens/img_la_romana.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
  },
  {
    id: '2',
    title: 'CRUD',
    description: 'Um site com em PHP, HTML, SQL, biblioteca materialize. Já com banco dados em SQL incluso',
    url: 'https://github.com/YuriLima66/CRUD_Php_web',
    image: '/imagens/crud.png',
    technologies: ['PHP', 'HTML', 'SQL', 'Materialize']
  },
  {
    id: '3',
    title: 'Leila Bolos',
    description: 'Site feito para uma Loja de bolos, com as tecnologias: HTML, CSS, Bootstrap, node e JavaScript.',
    url: 'https://github.com/YuriLima66/bolos-da-leila',
    image: '/imagens/leilabolos.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Node.js', 'JavaScript']
  },
  {
    id: '4',
    title: 'Games Retrô',
    description: 'Um site com alguns cards de personagens retrô, responsivo. Feito somente com HTML 5 e CSS3.',
    url: 'https://yurilima66.github.io/site_games_retro/',
    image: '/imagens/img_games.png',
    technologies: ['HTML5', 'CSS3']
  },
  {
    id: '5',
    title: 'As Brabas',
    description: 'Projeto de site feito para uma torcida organizada em apoio ao futebol feminino do Corinthians. Feito com HTML5 e CSS3',
    url: 'https://yurilima66.github.io/As-Brabas/',
    image: '/imagens/img_brabas.png',
    technologies: ['HTML5', 'CSS3']
  },
  {
    id: '6',
    title: 'Landing Page',
    description: 'Landing page feita para uma loja de Geléias gourmet. Feito com HTML5 e CSS3',
    url: 'https://yurilima66.github.io/landing_page_geleias/',
    image: '/imagens/geleias_img.png',
    technologies: ['HTML5', 'CSS3']
  },
  {
    id: '7',
    title: 'Redes Sociais com iframe',
    description: 'Projeto de site de redes sociais, testando um pouco de iframe. Feito com HTML5 e CSS3',
    url: 'https://yurilima66.github.io/projeto-redes-sociais/',
    image: '/imagens/img_redessociais.png',
    technologies: ['HTML5', 'CSS3']
  },
  {
    id: '8',
    title: 'Login Interativo',
    description: 'Login interativo responsivo feito em exercício de responsividade. Feito com HTML5 e CSS3',
    url: 'https://yurilima66.github.io/Login_interativo/',
    image: '/imagens/img_login.png',
    technologies: ['HTML5', 'CSS3']
  }
]

