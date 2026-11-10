
const CONFIG = {
    email: 'felixpajon05@gmail.com',
    emailjs: { publicKey: '62u91cGlJaiHHXHJG', service: 'service_wedahf8', template: 'template_5ddh31q' },
    github: 'https://github.com/FelixPajon05',
    linkedin: 'https://www.linkedin.com/in/felixpajon',
    facebook: 'https://www.facebook.com/felix.pajon',
    instagram: 'https://www.instagram.com/felixpajon',
    youtube: 'https://www.youtube.com/@ApeFace05',
    cancion: './musica/CloseToYou.mp3',
    tituloCancion: 'Close to You'
};

const PROJECTS = [
    { nombre: 'Proyecto 1', es: 'Describe en una línea qué hace este proyecto.', en: 'Describe in one line what this project does.', url: 'https://TU-PROYECTO-1.com' },
    { nombre: 'Proyecto 2', es: 'Describe en una línea qué hace este proyecto.', en: 'Describe in one line what this project does.', url: 'https://TU-PROYECTO-2.com' },
    { nombre: 'Proyecto 3', es: 'Describe en una línea qué hace este proyecto.', en: 'Describe in one line what this project does.', url: 'https://TU-PROYECTO-3.com' }
];

const PHOTOS = [
];

const TEMAS = {
    tec: { es: 'Tecnología', en: 'Technology', c: '#33F5D6' },
    neg: { es: 'Negocios', en: 'Business', c: '#FFD23F' },
    per: { es: 'Desarrollo personal', en: 'Personal growth', c: '#FF7A6B' },
    nov: { es: 'Novela', en: 'Fiction', c: '#9C8CFF' },
    cie: { es: 'Ciencia e historia', en: 'Science & history', c: '#F7E7D2' }
};
const LIBROS = [
    { titulo: 'Clean Code', autor: 'Robert C. Martin', tema: 'tec', paginas: 464, nota: 5, top: true, es: 'Escribir código que otra persona pueda leer y mantener.', en: 'Writing code someone else can read and maintain.' },
    { titulo: 'The Pragmatic Programmer', autor: 'Andrew Hunt y David Thomas', tema: 'tec', paginas: 352, nota: 5, es: 'Hábitos de trabajo de un buen programador.', en: 'Work habits of a good programmer.' },
    { titulo: 'Designing Data-Intensive Applications', autor: 'Martin Kleppmann', tema: 'tec', paginas: 616, nota: 4, es: 'Cómo funcionan por dentro las bases de datos y los sistemas distribuidos.', en: 'How databases and distributed systems work inside.' },
    { titulo: 'Refactoring', autor: 'Martin Fowler', tema: 'tec', paginas: 448, nota: 4, es: 'Mejorar código existente sin romperlo.', en: 'Improving existing code without breaking it.' },
    { titulo: 'Storytelling with Data', autor: 'Cole Nussbaumer Knaflic', tema: 'tec', paginas: 288, nota: 4, es: 'Gráficas que cuentan algo en lugar de solo mostrar números.', en: 'Charts that tell something instead of just showing numbers.' },
    { titulo: 'El método Lean Startup', autor: 'Eric Ries', tema: 'neg', paginas: 336, nota: 4, es: 'Probar ideas rápido antes de construir de más.', en: 'Testing ideas fast before overbuilding.' },
    { titulo: 'De cero a uno', autor: 'Peter Thiel', tema: 'neg', paginas: 224, nota: 4, es: 'Crear algo nuevo en lugar de copiar lo que ya existe.', en: 'Creating something new instead of copying what exists.' },
    { titulo: 'La estrategia del océano azul', autor: 'W. Chan Kim y Renée Mauborgne', tema: 'neg', paginas: 320, nota: 3, es: 'Buscar mercados donde no hay competencia.', en: 'Finding markets with no competition.' },
    { titulo: 'Hábitos atómicos', autor: 'James Clear', tema: 'per', paginas: 320, nota: 5, top: true, es: 'Cambios pequeños que se acumulan.', en: 'Small changes that compound.' },
    { titulo: 'Enfócate', autor: 'Cal Newport', tema: 'per', paginas: 304, nota: 4, es: 'Trabajo profundo sin distracciones.', en: 'Deep work without distractions.' },
    { titulo: 'Mindset', autor: 'Carol S. Dweck', tema: 'per', paginas: 320, nota: 4, es: 'La diferencia entre creer que puedes aprender y creer que no.', en: 'The difference between believing you can learn and believing you can’t.' },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', tema: 'nov', paginas: 471, nota: 5, top: true, es: 'Macondo y los Buendía: la novela que más he releído.', en: 'Macondo and the Buendías: the novel I reread the most.' },
    { titulo: 'Pedro Páramo', autor: 'Juan Rulfo', tema: 'nov', paginas: 124, nota: 5, es: 'Corto, extraño y enorme.', en: 'Short, strange and huge.' },
    { titulo: '1984', autor: 'George Orwell', tema: 'nov', paginas: 328, nota: 4, es: 'Vigilancia y control, más vigente que nunca.', en: 'Surveillance and control, more relevant than ever.' },
    { titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', tema: 'nov', paginas: 662, nota: 4, es: 'Fantasía contada como una biografía.', en: 'Fantasy told like a biography.' },
    { titulo: 'Sapiens', autor: 'Yuval Noah Harari', tema: 'cie', paginas: 496, nota: 4, es: 'La historia de la humanidad en un solo libro.', en: 'The history of humankind in one book.' },
    { titulo: 'Breve historia del tiempo', autor: 'Stephen Hawking', tema: 'cie', paginas: 256, nota: 4, es: 'El universo explicado sin fórmulas.', en: 'The universe explained without formulas.' },
    { titulo: 'Pensar rápido, pensar despacio', autor: 'Daniel Kahneman', tema: 'cie', paginas: 499, nota: 5, es: 'Por qué decidimos como decidimos.', en: 'Why we decide the way we do.' }
];

const I18N = {
    es: {
        'mas.btn': 'Saber más de mí', 'mas.p': 'Más allá del código: los libros que me formaron y los recuerdos del camino.',
        'nav.books': 'Libros', 'g.books': 'Libros', 'b.h': 'Biblioteca', 'b.p': 'Los libros que me han formado, acomodados por tema en las repisas del árbol. Haz clic en un lomo para ver por qué lo recomiendo.', 'b.count': 'libros leídos', 'b.top': 'Imprescindibles', 'b.filter': 'Filtrar libros por tema', 'b.search': 'Buscar por título o autor', 'b.empty': 'Ningún libro coincide con tu búsqueda.', 'b.pages': 'páginas', 'b.why': 'Por qué lo recomiendo', 'b.rate': 'Calificación: {n} de 5', 'say.reader': 'Shhh… voy en el último capítulo.', 'feed.reader': 'Escuchar al mono lector',
        'skip': 'Saltar al contenido', 'nav.home': 'Inicio', 'nav.xp': 'Experiencia', 'nav.stack': 'Stack', 'nav.edu': 'Formación', 'nav.mem': 'Recuerdos', 'nav.contact': 'Contacto',
        'menu': 'Menú', 'songFile': 'Sonando la canción del DJ. Clic otra vez al mandril para pararla.', 'nav.proj': 'Proyectos', 'pj.h': 'Proyectos', 'pj.p': 'Algunos de los proyectos que he construido. Cada uno se abre en una pestaña nueva.', 'pj.view': 'Ver proyecto', 'pj.newtab': 'se abre en una pestaña nueva', 'pj.cta': 'Ver mis proyectos', 'pj.sub': 'Se abre en una pestaña nueva', 'pj.go': 'Entrar al portal', 'say.explorer': '¡Hay más por aquí!', 'feed.explorer': 'Escuchar al mono explorador', 'skipIntro': 'Saltar intro', 'alt.me': 'Foto de Félix Pajón', 'hint': 'Sube el volumen y haz clic en los monos.', 'm.photo': 'Foto de recuerdo', 'song': '♪ Sonando «Selva nocturna», canción original. Clic otra vez al mandril para pararla.', 'songOff': 'Música detenida.', 'noAudio': 'Tu navegador no permite reproducir sonido aquí.',
        'lede': 'Construyo aplicaciones web de punta a punta, administro los servidores donde corren y convierto sus datos en tableros que ayudan a decidir.',
        'disc': 'Explora la jungla por disciplina', 'd.infra': 'Infraestructura', 'd.data': 'Datos', 'cta': 'Escríbeme', 'cta2': 'Ver experiencia', 'felixTag': '¡Saludos...!',
        'xp.h': 'Experiencia', 'xp.p': 'De la web a la infraestructura y los datos: cada puesto sumó una disciplina.',
        'say.mandrill': '¡Dame clic y pongo música!', 'say.hack': 'Apes don’t crash. Mis servidores tampoco.', 'feed.hack': 'Escuchar al mono hacker', 'say.prof': 'Problemas no resueltos y café: así estudio.', 'feed.prof': 'Escuchar al profesor',
        'say.lab': 'Estos experimentos sí salieron bien.', 'feed.mech': 'Escuchar al mono mecánico', 'say.mech': 'Yo me encargo de que tu mensaje llegue.',
        'xp1.when': '2024 — hoy', 'xp1.t': 'Programador Analista', 'g.web': 'Desarrollo web', 'g.api': 'APIs y servicios', 'g.data': 'Datos e IA', 'g.dev': 'Desarrollo', 'g.lead': 'Liderazgo',
        'xp1.w1': 'Aplicaciones web responsivas a la medida', 'xp1.w2': 'Mantenimiento y optimización de aplicaciones existentes', 'xp1.w3': 'Mejoras funcionales y de rendimiento',
        'xp1.a1': 'Nuevas funcionalidades en APIs REST existentes', 'xp1.a2': 'Diseño e implementación de integraciones backend',
        'xp1.i1': 'Administración de servidores Linux', 'xp1.i2': 'Gestión de bases de datos relacionales', 'xp1.i3': 'Estrategias de DRP y BCP',
        'xp1.d1': 'Análisis de datos complejos', 'xp1.d2': 'Dashboards interactivos', 'xp1.d3': 'Procesos ETL y web scraping',
        'xp2.t': 'Programador Full Stack', 'xp2.w1': 'Aplicaciones web full stack responsivas', 'xp2.w2': 'Aplicaciones móviles multiplataforma', 'xp2.l1': 'Coordinación de un grupo de becarios', 'xp2.l2': 'Coaching técnico y mentoría',
        'xp3.t': 'Programador Jr', 'xp3.p': 'Desarrollo de aplicaciones web, un blog con gestión de usuarios y el sitio corporativo, con interfaces responsivas y optimización SEO.',
        'fr.all': 'Disciplinas: Web, Infraestructura, Datos',
        'st.p': 'Lenguajes, frameworks y sistemas con los que he trabajado, colgados de su liana.',
        'w.h': 'Cómo trabajo', 'w.p': 'Lo que la tropa puede esperar de mí.',
        'e.h': 'Formación', 'e.p': 'Ingeniería, una maestría en curso y diplomados que conectan tecnología con negocio.', 'e.now': 'En curso',
        'c.h': 'Certificaciones', 'k.h': 'Cursos', 'k.filter': 'Filtrar cursos', 'k.all': 'Todos', 'k.web': 'Web', 'k.infra': 'Infraestructura', 'k.other': 'Otros',
        'm.h': 'Recuerdos', 'm.p': 'Las personas y los lugares que me han acompañado, colgados a secar en la liana.', 'm.empty': 'Foto por agregar', 'm.today': 'hoy',
        'ct.h': '¡Hablemos!', 'ct.p': '¿Tienes un proyecto o una vacante? Escríbeme y te respondo pronto. Mi compañero de mantenimiento se encarga de que llegue.',
        'fm.name': 'Nombre', 'fm.mail': 'Correo', 'fm.msg': 'Mensaje', 'fm.send': 'Enviar mensaje',
        'fm.e.name': 'Escribe tu nombre.', 'fm.e.mail': 'Revisa el formato del correo, por ejemplo nombre@empresa.com.', 'fm.e.msg': 'Cuéntame en qué te puedo ayudar.',
        'fm.ok': '¡Auuu! Tu mensaje llegó a la jungla. Te respondo pronto.', 'fm.sending': 'Enviando…', 'fm.err': 'No se pudo enviar. Inténtalo de nuevo o escríbeme directo a mi correo.', 'fm.bad': 'Faltan datos: revisa los campos marcados.', 'fm.subject': 'Contacto desde tu portafolio',
        'ft': 'Dibujado y animado a mano en HTML, CSS y SVG. Ningún simio salió lastimado.', 'top': 'Volver a la copa del árbol ↑', 'close': 'Cerrar',
        'grp.front': 'Frontend', 'grp.back': 'Backend', 'grp.mobile': 'Móvil', 'grp.infra': 'Servidores y BD', 'grp.data': 'Datos', 'grp.gfx': '3D y herramientas',
        'deg.master': 'Maestría', 'deg.eng': 'Ingeniería', 'deg.dip': 'Diplomado',
        'feed.sit': 'Saludar al mono', 'say.sit': '¡Gracias por visitar la jungla!',
        'feed.spider': 'Escuchar al mono araña', 'feed.felix': 'Escuchar al chango Félix', 'feed.gorilla': 'Escuchar al gorila', 'feed.mandrill': 'Poner o quitar la canción del mandril DJ',
        'feed.orang': 'Escuchar al orangután', 'feed.capu': 'Escuchar al capuchino graduado', 'feed.lemur': 'Escuchar al lémur', 'feed.sci': 'Escuchar al mono científico', 'say.sci': 'Tu mensaje llega directo a mi laboratorio.', 'feed.sleep': 'Despertar al chango dormido', 'feed.titi': 'Escuchar al tití',
        'guide.nav': 'Recorrido de la jungla', 'guide.top': 'Volver a la copa del árbol', 'dock.label': 'Reproductor', 'dock.now': 'Sonando', 'dock.stop': 'Detener la música', 'g.home': 'Inicio', 'g.xp': 'Experiencia', 'g.proj': 'Proyectos', 'g.stack': 'Stack', 'g.ways': 'Cómo trabajo', 'g.edu': 'Formación', 'g.mem': 'Recuerdos', 'g.contact': 'Contacto'
    },
    en: {
        'mas.btn': 'Get to know me', 'mas.p': 'Beyond the code: the books that shaped me and memories along the way.',
        'nav.books': 'Books', 'g.books': 'Books', 'b.h': 'Library', 'b.p': 'The books that shaped me, sorted by topic on the tree’s shelves. Click a spine to see why I recommend it.', 'b.count': 'books read', 'b.top': 'Must-reads', 'b.filter': 'Filter books by topic', 'b.search': 'Search by title or author', 'b.empty': 'No book matches your search.', 'b.pages': 'pages', 'b.why': 'Why I recommend it', 'b.rate': 'Rating: {n} out of 5', 'say.reader': 'Shhh… I’m on the last chapter.', 'feed.reader': 'Hear the reading monkey',
        'skip': 'Skip to content', 'nav.home': 'Home', 'nav.xp': 'Experience', 'nav.stack': 'Stack', 'nav.edu': 'Education', 'nav.mem': 'Memories', 'nav.contact': 'Contact',
        'menu': 'Menu', 'songFile': 'Now playing the DJ’s track. Click the mandrill again to stop it.', 'nav.proj': 'Projects', 'pj.h': 'Projects', 'pj.p': 'Some of the projects I have built. Each one opens in a new tab.', 'pj.view': 'View project', 'pj.newtab': 'opens in a new tab', 'pj.cta': 'See my projects', 'pj.sub': 'Opens in a new tab', 'pj.go': 'Enter the portal', 'say.explorer': 'There’s more over here!', 'feed.explorer': 'Hear the explorer monkey', 'skipIntro': 'Skip intro', 'alt.me': 'Photo of Félix Pajón', 'hint': 'Turn up the volume and click the monkeys.', 'm.photo': 'Memory photo', 'song': '♪ Now playing “Night Jungle”, an original track. Click the mandrill again to stop it.', 'songOff': 'Music stopped.', 'noAudio': 'Your browser can’t play sound here.',
        'lede': 'I build web applications end to end, run the servers they live on, and turn their data into dashboards that help people decide.',
        'disc': 'Explore the jungle by discipline', 'd.infra': 'Infrastructure', 'd.data': 'Data', 'cta': 'Get in touch', 'cta2': 'See experience', 'felixTag': 'Hi, I’m Félix!',
        'xp.h': 'Experience', 'xp.p': 'From web to infrastructure and data: every role added a discipline.',
        'say.mandrill': 'Click me for music!', 'say.hack': 'Apes don’t crash. Neither do my servers.', 'feed.hack': 'Hear the hacker monkey', 'say.prof': 'Unsolved problems and coffee: that’s how I study.', 'feed.prof': 'Hear the professor',
        'say.lab': 'These experiments actually worked.', 'feed.mech': 'Hear the mechanic monkey', 'say.mech': 'I’ll make sure your message gets there.',
        'xp1.when': '2024 — now', 'xp1.t': 'Programmer Analyst', 'g.web': 'Web development', 'g.api': 'APIs & services', 'g.data': 'Data & AI', 'g.dev': 'Development', 'g.lead': 'Leadership',
        'xp1.w1': 'Custom responsive web applications', 'xp1.w2': 'Maintenance and optimization of existing applications', 'xp1.w3': 'Functional and performance improvements',
        'xp1.a1': 'New features on existing REST APIs', 'xp1.a2': 'Design and implementation of backend integrations',
        'xp1.i1': 'Linux server administration', 'xp1.i2': 'Relational database management', 'xp1.i3': 'DRP and BCP strategies',
        'xp1.d1': 'Complex data analysis', 'xp1.d2': 'Interactive dashboards', 'xp1.d3': 'ETL pipelines and web scraping',
        'xp2.t': 'Full Stack Developer', 'xp2.w1': 'Responsive full stack web applications', 'xp2.w2': 'Cross-platform mobile applications', 'xp2.l1': 'Coordinated a group of interns', 'xp2.l2': 'Technical coaching and mentoring',
        'xp3.t': 'Junior Developer', 'xp3.p': 'Built web applications, a blog with user management and the corporate website, with responsive interfaces and SEO optimization.',
        'fr.all': 'Disciplines: Web, Infrastructure, Data',
        'st.p': 'Languages, frameworks and systems I have worked with, each hanging from its vine.',
        'w.h': 'How I work', 'w.p': 'What the troop can expect from me.',
        'e.h': 'Education', 'e.p': 'Engineering, a master’s in progress and diplomas that connect technology with business.', 'e.now': 'In progress',
        'c.h': 'Certifications', 'k.h': 'Courses', 'k.filter': 'Filter courses', 'k.all': 'All', 'k.web': 'Web', 'k.infra': 'Infrastructure', 'k.other': 'Other',
        'm.h': 'Memories', 'm.p': 'The people and places that have been with me, hung out to dry on the vine.', 'm.empty': 'Photo to add', 'm.today': 'now',
        'ct.h': 'Let’s talk!', 'ct.p': 'Have a project or an open role? Write to me and I’ll get back to you soon. My maintenance buddy makes sure it arrives.',
        'fm.name': 'Name', 'fm.mail': 'Email', 'fm.msg': 'Message', 'fm.send': 'Send message',
        'fm.e.name': 'Please enter your name.', 'fm.e.mail': 'Check the email format, e.g. name@company.com.', 'fm.e.msg': 'Tell me how I can help.',
        'fm.ok': 'Awooo! Your message reached the jungle. I’ll reply soon.', 'fm.sending': 'Sending…', 'fm.err': 'It couldn’t be sent. Try again or email me directly.', 'fm.bad': 'Some fields are missing: check the highlighted ones.', 'fm.subject': 'Contact from your portfolio',
        'ft': 'Hand-drawn and animated in HTML, CSS and SVG. No apes were harmed.', 'top': 'Back to the treetop ↑', 'close': 'Close',
        'grp.front': 'Frontend', 'grp.back': 'Backend', 'grp.mobile': 'Mobile', 'grp.infra': 'Servers & DBs', 'grp.data': 'Data', 'grp.gfx': '3D & tools',
        'deg.master': 'Master’s', 'deg.eng': 'Engineering', 'deg.dip': 'Diploma',
        'feed.sit': 'Say hi to the monkey', 'say.sit': 'Thanks for visiting the jungle!',
        'feed.spider': 'Hear the spider monkey', 'feed.felix': 'Hear Félix the chimp', 'feed.gorilla': 'Hear the gorilla', 'feed.mandrill': 'Play or stop the DJ mandrill’s song',
        'feed.orang': 'Hear the orangutan', 'feed.capu': 'Hear the graduate capuchin', 'feed.lemur': 'Hear the lemur', 'feed.sci': 'Hear the scientist monkey', 'say.sci': 'Your message goes straight to my lab.', 'feed.sleep': 'Wake the sleeping chimp', 'feed.titi': 'Hear the marmoset',
        'guide.nav': 'Jungle trail', 'guide.top': 'Back to the treetop', 'dock.label': 'Player', 'dock.now': 'Now playing', 'dock.stop': 'Stop the music', 'g.home': 'Home', 'g.xp': 'Experience', 'g.proj': 'Projects', 'g.stack': 'Stack', 'g.ways': 'How I work', 'g.edu': 'Education', 'g.mem': 'Memories', 'g.contact': 'Contact'
    }
};

const STACK = [
    { k: 'grp.front', c: 'var(--cyan)', d: 'web', items: [['Angular', 'angular-plain'], ['TypeScript', 'typescript-plain'], ['JavaScript', 'javascript-plain'], ['HTML5', 'html5-plain'], ['CSS', 'css3-plain'], ['Tailwind CSS', 'tailwindcss-plain'], ['Bootstrap 5', 'bootstrap-plain'], ['PrimeNG', '']] },
    { k: 'grp.back', c: 'var(--cyan)', d: 'web', items: [['Node.js', 'nodejs-plain'], ['Express', 'express-original'], ['NestJS', 'nestjs-plain'], ['TypeORM', ''], ['Swagger', 'swagger-plain'], ['PHP', 'php-plain'], ['Laravel', 'laravel-plain'], ['Symfony', 'symfony-original'], ['Go', 'go-plain']] },
    { k: 'grp.infra', c: 'var(--coral)', d: 'infra', items: [['Linux', 'linux-plain'], ['Ubuntu', 'ubuntu-plain'], ['Kali Linux', ''], ['Unix', 'unix-original'], ['FreeBSD', ''], ['MySQL', 'mysql-plain'], ['MariaDB', 'mariadb-plain'], ['SQL', 'postgresql-plain']] },
    { k: 'grp.data', c: 'var(--banana)', d: 'data', items: [['Python', 'python-plain'], ['Pandas', 'pandas-plain'], ['Anaconda', 'anaconda-plain'], ['Chart.js', '']] },
    { k: 'grp.mobile', c: 'var(--cyan)', d: 'web', items: [['Flutter', 'flutter-plain'], ['Dart', 'dart-plain']] },
    { k: 'grp.gfx', c: 'var(--cream)', d: '', items: [['Three.js', 'threejs-original'], ['Unity 3D', 'unity-plain'], ['Maya 3D', 'maya-plain'], ['VS Code', 'vscode-plain']] }
];
const WAYS = [
    { c: '#33F5D6', es: ['Proactividad', 'Me adelanto a identificar problemas y propongo soluciones.'], en: ['Proactivity', 'I get ahead of problems and propose solutions.'] },
    { c: '#F2493A', es: ['Trabajo en equipo', 'Colaboración efectiva y comunicación clara con equipos multidisciplinarios.'], en: ['Teamwork', 'Effective collaboration and clear communication with cross-functional teams.'] },
    { c: '#FFD23F', es: ['Aprendizaje continuo', 'Aprendo tecnologías nuevas y mejoro de forma constante.'], en: ['Continuous learning', 'I keep learning new technologies and improving.'] },
    { c: '#F7E7D2', es: ['Responsabilidad', 'Comprometido con la calidad y el cumplimiento de objetivos.'], en: ['Accountability', 'Committed to quality and to meeting goals.'] },
    { c: '#33F5D6', es: ['Creatividad', 'Pensamiento innovador para resolver problemas de forma propia.'], en: ['Creativity', 'Fresh thinking to solve problems in my own way.'] },
    { c: '#F2493A', es: ['Organización', 'Gestión eficiente del tiempo y los recursos en proyectos complejos.'], en: ['Organization', 'Efficient management of time and resources on complex projects.'] }
];
const EDU = [
    { y: '2026 — 2028', deg: 'deg.master', now: true, d: '', es: 'Administración de Negocios', en: 'Business Administration', inst: 'Universidad Interamericana para el Desarrollo (UNID)' },
    { y: '2021 — 2023', deg: 'deg.eng', d: 'web', es: 'Entornos Virtuales y Negocios Digitales', en: 'Virtual Environments & Digital Business', inst: 'Universidad Tecnológica Metropolitana (UTM)' },
    { y: '2026', deg: 'deg.dip', d: 'data', es: 'Profesión Científico de Datos', en: 'Data Scientist Professional', inst: 'Escuela Bancaria y Comercial (EBC)' },
    { y: '2026', deg: 'deg.dip', d: 'data', es: 'Inteligencia Artificial para Negocios', en: 'Artificial Intelligence for Business', inst: 'Escuela Bancaria y Comercial (EBC)' },
    { y: '2025', deg: 'deg.dip', d: 'web', es: 'Desarrollo Web Backend', en: 'Backend Web Development', inst: 'Escuela Bancaria y Comercial (EBC)' },
    { y: '2025', deg: 'deg.dip', d: 'web', es: 'Desarrollo Web y Aplicaciones Móviles Frontend', en: 'Frontend Web & Mobile App Development', inst: 'Escuela Bancaria y Comercial (EBC)' }
];
const CERTS = [['Routing and Switching Essentials', 'Cisco', 'infra', '#F2493A'], ['R&S: Introduction to Networks', 'Cisco', 'infra', '#F2493A'], ['NDG Linux Unhatched', 'Cisco', 'infra', '#F2493A'], ['PCAP — Programming Essentials in Python', 'Python', 'data', '#FFD23F'], ['Quality Assurance Engineer', 'DaCodes', 'web', '#33F5D6']];
const COURSES = [
    ['JavaScript Moderno', 'DevTalles', 'web'], ['Node: De cero a experto', 'DevTalles', 'web'], ['Angular: De cero a experto', 'DevTalles', 'web'],
    ['Databases for Node.js', 'LinkedIn', 'infra'], ['PostgreSQL Essential', 'LinkedIn', 'infra'], ['MySQL Essential', 'LinkedIn', 'infra'], ['Advanced PostgreSQL', 'LinkedIn', 'infra'], ['Learning MySQL Development', 'LinkedIn', 'infra'], ['Docker for Developers', 'LinkedIn', 'infra'],
    ['Quality Assurance Engineer', 'DaCodes', 'web'], ['Learning JavaScript Debugging', 'LinkedIn', 'web'], ['GitHub para programadores', 'LinkedIn', 'other'], ['Diseño de interfaz (UI)', 'LinkedIn', 'web'],
    ['Learning Node.js', 'LinkedIn', 'web'], ['Express Essential', 'LinkedIn', 'web'], ['CSS & JS Animations', 'LinkedIn', 'web'], ['TypeScript Essential', 'LinkedIn', 'web'], ['Node.js Essential', 'LinkedIn', 'web'],
    ['TypeScript: Upgrades & Features', 'LinkedIn', 'web'], ['CSS: Animation', 'LinkedIn', 'web'], ['Learning TypeScript', 'LinkedIn', 'web'], ['TypeScript for Node.js Developers', 'LinkedIn', 'web'], ['TypeScript: OOP', 'LinkedIn', 'web'], ['Learning HTML Canvas', 'LinkedIn', 'web'],
    ['CSS: Enhancing Interfaces', 'LinkedIn', 'web'], ['Node.js: Microservices', 'LinkedIn', 'web'], ['Introduction to Linux', 'LinkedIn', 'infra'], ['Learning Linux Command Line', 'LinkedIn', 'infra'],
    ['Angular: Routing', 'LinkedIn', 'web'], ['Angular: Animations', 'LinkedIn', 'web'], ['Vanilla JS: Animations', 'LinkedIn', 'web'], ['NDG Linux Unhatched', 'Cisco', 'infra'], ['CCNA R&S Essentials', 'Cisco', 'infra'],
    ['JavaScript: Functions', 'LinkedIn', 'web'], ['JavaScript: Events', 'LinkedIn', 'web'], ['Advanced npm', 'LinkedIn', 'web'], ['JavaScript: Async', 'LinkedIn', 'web'], ['Learning REST APIs', 'LinkedIn', 'web'],
    ['JavaScript: Ajax and Fetch', 'LinkedIn', 'web'], ['Learning npm', 'LinkedIn', 'web'], ['JavaScript: Closures', 'LinkedIn', 'web'], ['JavaScript: Prototypes', 'LinkedIn', 'web'], ['JavaScript: Classes', 'LinkedIn', 'web'],
    ['JavaScript: Scope', 'LinkedIn', 'web'], ['Técnicas avanzadas de negociación', 'LinkedIn', 'other'], ['Apache, MySQL y PHP', 'LinkedIn', 'infra']
];

/* ---------- helpers ---------- */
const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
let lang = 'es'; try { const s = localStorage.getItem('fp-lang'); if (s === 'es' || s === 'en') lang = s; } catch (e) { }
const t = k => (I18N[lang][k] ?? I18N.es[k] ?? k);
let courseFilter = 'all';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE_OUT = [.16, 1, .3, 1]; /* misma curva que --ease en el CSS */
let rng = 7; const rand = () => ((rng = (rng * 16807) % 2147483647) / 2147483647);

/* ---------- jungle generator ---------- */

/* ===== árboles de la jungla (reemplaza tree() y buildJungle()) ===== */
const P2 = (x, y) => `${x.toFixed(1)} ${y.toFixed(1)}`;
function liana(bx, by, len, c, w) {
    let d = `<path d="M${P2(bx, by)}L${P2(bx, by + len)}" stroke="${c}" stroke-width="${Math.max(2, w * .18)}"/>`;
    for (let k = 12; k < len; k += 16) d += `<path d="M${P2(bx - 9, by + k - 8)}L${P2(bx, by + k)}L${P2(bx + 9, by + k - 8)}" stroke="${c}" stroke-width="${Math.max(2, w * .16)}" fill="none" stroke-linejoin="round"/>`;
    return d;
}
const TREES = {
    coco(x, h, c, s) {
        const lean = (rand() - .5) * 120, tx = x + lean, ty = 900 - h; let d = `<path d="M${P2(x, 900)}Q${P2(x + lean * .15, 900 - h * .55)} ${P2(tx, ty)}" stroke="${c}" stroke-width="${18 * s}" fill="none" stroke-linecap="round"/>`;
        for (let i = 0; i < 9; i++) {
            const a = (-180 + i * 22.5 + (rand() - .5) * 10) * Math.PI / 180, L = (190 + rand() * 80) * s, ex = tx + Math.cos(a) * L, ey = ty + Math.sin(a) * L * .3 + L * .6;
            d += `<path d="M${P2(tx, ty)}Q${P2(tx + Math.cos(a) * L * .55, ty + Math.sin(a) * L * .9 - 30 * s)} ${P2(ex, ey)}" stroke="${c}" stroke-width="${12 * s}" fill="none" stroke-linecap="round"/>`;
            for (let k = .18; k < .95; k += .09) { const px = tx + (ex - tx) * k, py = ty + (Math.sin(a) * L * .9 - 30 * s) * 2 * k * (1 - k) + (ey - ty) * k * k; d += `<path d="M${P2(px, py)}l${P2(Math.cos(a + 1.3) * 24 * s, 18 * s)}M${P2(px, py)}l${P2(Math.cos(a - 1.3) * 24 * s, 18 * s)}" stroke="${c}" stroke-width="${6 * s}" stroke-linecap="round"/>`; }
        }
        for (let i = 0; i < 3; i++) d += `<circle cx="${(tx - 10 * s + i * 10 * s).toFixed(1)}" cy="${(ty + 12 * s + (i % 2) * 6 * s).toFixed(1)}" r="${7 * s}" fill="${c}"/>`;
        return d;
    },
    banano(x, h, c, s) {
        h *= .45; const ty = 900 - h; let d = `<path d="M${P2(x - 10 * s, 900)}L${P2(x - 7 * s, ty)}L${P2(x + 7 * s, ty)}L${P2(x + 10 * s, 900)}Z" fill="${c}"/>`;
        for (let i = 0; i < 7; i++) {
            const a = (-170 + i * 26 + (rand() - .5) * 14) * Math.PI / 180, L = (120 + rand() * 50) * s, ex = x + Math.cos(a) * L, ey = ty + Math.sin(a) * L * .6 + (Math.abs(Math.cos(a)) > .6 ? L * .35 : 0), mx = x + Math.cos(a) * L * .5, my = ty + Math.sin(a) * L * .5 - 20 * s, wv = 26 * s;
            d += `<path d="M${P2(x, ty)}Q${P2(mx - Math.sin(a) * wv, my + Math.cos(a) * wv)} ${P2(ex, ey)}Q${P2(mx + Math.sin(a) * wv, my - Math.cos(a) * wv)} ${P2(x, ty)}Z" fill="${c}"/>`;
        }
        d += `<path d="M${P2(x + 4 * s, ty + 6 * s)}q${P2(16 * s, 24 * s)} ${P2(6 * s, 52 * s)}" stroke="${c}" stroke-width="${4 * s}" fill="none"/><ellipse cx="${(x + 10 * s).toFixed(1)}" cy="${(ty + 66 * s).toFixed(1)}" rx="${12 * s}" ry="${18 * s}" fill="${c}"/>`;
        return d;
    },
    acacia(x, h, c, s) {
        h *= .5; const ty = 900 - h; let d = `<path d="M${P2(x, 900)}Q${P2(x + 6, 900 - h * .5)} ${P2(x, ty + 60 * s)}" stroke="${c}" stroke-width="${16 * s}" fill="none" stroke-linecap="round"/>`;
        [[-90, -30], [-30, -50], [40, -40], [95, -20]].forEach(([dx, dy]) => { d += `<path d="M${P2(x, ty + 60 * s)}Q${P2(x + dx * s * .3, ty + 30 * s)} ${P2(x + dx * s, ty + dy * s * .3 + 10 * s)}" stroke="${c}" stroke-width="${6 * s}" fill="none" stroke-linecap="round"/>`; });
        for (let i = 0; i < 7; i++) { const cx = x + (-170 + i * 56 + (rand() - .5) * 20) * s; d += `<ellipse cx="${cx.toFixed(1)}" cy="${(ty + (rand() - .5) * 12 * s).toFixed(1)}" rx="${(58 + rand() * 22) * s}" ry="${(20 + rand() * 10) * s}" fill="${c}"/>`; }
        for (let i = 0; i < 2; i++) d += liana(x + (-110 + i * 190) * s, ty + 8 * s, (60 + rand() * 90) * s, c, 10 * s);
        return d;
    },
    roble(x, h, c, s) {
        h *= .5; const ty = 900 - h; let d = `<path d="M${P2(x - 16 * s, 900)}Q${P2(x - 8 * s, 900 - h * .4)} ${P2(x - 8 * s, ty + 60 * s)}L${P2(x + 8 * s, ty + 60 * s)}Q${P2(x + 8 * s, 900 - h * .4)} ${P2(x + 18 * s, 900)}Z" fill="${c}"/>`;
        [[-90, 30], [90, 20], [-40, -30], [50, -40]].forEach(([dx, dy]) => { d += `<path d="M${P2(x, ty + 90 * s)}L${P2(x + dx * s, ty + dy * s)}" stroke="${c}" stroke-width="${7 * s}" stroke-linecap="round"/>`; });
        for (let i = 0; i < 18; i++) { const a = rand() * Math.PI * 2, r = rand() * 100 * s; d += `<circle cx="${(x + Math.cos(a) * r * 1.35).toFixed(1)}" cy="${(ty - 10 * s + Math.sin(a) * r * .75).toFixed(1)}" r="${(46 + rand() * 30) * s}" fill="${c}"/>`; }
        for (let i = 0; i < 3; i++) d += liana(x + (-120 + i * 120) * s, ty + 70 * s, (60 + rand() * 120) * s, c, 10 * s);
        return d;
    },
    ceiba(x, h, c, s) {
        const ty = 900 - h; let d = `<path d="M${P2(x - 11 * s, 900)}L${P2(x - 8 * s, ty + 30 * s)}L${P2(x + 8 * s, ty + 30 * s)}L${P2(x + 11 * s, 900)}Z" fill="${c}"/>`;
        d += `<path d="M${P2(x - 60 * s, 900)}Q${P2(x - 14 * s, 890)} ${P2(x - 10 * s, 900 - 80 * s)}L${P2(x - 6 * s, 900)}Z M${P2(x + 60 * s, 900)}Q${P2(x + 14 * s, 890)} ${P2(x + 10 * s, 900 - 80 * s)}L${P2(x + 6 * s, 900)}Z M${P2(x - 30 * s, 900)}Q${P2(x - 10 * s, 895)} ${P2(x - 8 * s, 900 - 50 * s)}Z" fill="${c}"/>`;
        [[0, 0, 230, 30], [0, -40, 160, 26], [0, -72, 90, 20]].forEach(([dx, dy, rx, ry]) => { for (let i = -2; i <= 2; i++) d += `<ellipse cx="${(x + dx + i * rx * s * .42).toFixed(1)}" cy="${(ty + dy * s + Math.abs(i) * 5 * s).toFixed(1)}" rx="${rx * s * .36}" ry="${ry * s}" fill="${c}"/>`; });
        d += `<path d="M${P2(x, ty + 40 * s)}L${P2(x - 170 * s, ty + 8 * s)}M${P2(x, ty + 40 * s)}L${P2(x + 170 * s, ty + 8 * s)}" stroke="${c}" stroke-width="${6 * s}" stroke-linecap="round"/>`;
        for (let i = 0; i < 4; i++) d += liana(x + (-200 + i * 133) * s, ty + 16 * s, (80 + rand() * 160) * s, c, 12 * s);
        return d;
    },
    sauce(x, h, c, s) {
        h *= .55; const lean = (rand() - .5) * 60, tx = x + lean, ty = 900 - h; let d = `<path d="M${P2(x, 900)}Q${P2(x - lean * .4, 900 - h * .5)} ${P2(tx, ty + 30 * s)}" stroke="${c}" stroke-width="${15 * s}" fill="none" stroke-linecap="round"/>`;
        for (let i = 0; i < 8; i++) { const a = Math.PI + i * Math.PI / 7, r = 90 * s; d += `<circle cx="${(tx + Math.cos(a) * r * 1.1).toFixed(1)}" cy="${(ty + Math.sin(a) * r * .6 + 10 * s).toFixed(1)}" r="${(44 + rand() * 14) * s}" fill="${c}"/>`; }
        for (let i = 0; i < 26; i++) {
            const sx = tx + (-140 + i * 11 + (rand() - .5) * 6) * s, sy = ty + (Math.abs(i - 13) < 7 ? -20 : 20) * s, L = (170 + rand() * 150) * s * (1 - Math.abs(i - 13) / 34), bend = (i < 13 ? -1 : 1) * (10 + rand() * 16) * s;
            d += `<path d="M${P2(sx, sy)}Q${P2(sx + bend, sy + L * .6)} ${P2(sx + bend * .6, sy + L)}" stroke="${c}" stroke-width="${(3 + rand() * 2.5) * s}" fill="none" stroke-linecap="round"/>`;
        }
        return d;
    }
};
const KINDS = Object.keys(TREES);
function buildJungle() {
    let far = ''; rng = 11;
    for (let x = -40; x < 1680; x += 95 + rand() * 70) { const k = KINDS[Math.floor(rand() * KINDS.length)]; far += TREES[k](x, 420 + rand() * 330, '#141A7C', .7 + rand() * .25); }
    for (let x = 0; x < 1600; x += 36) far += `<circle cx="${x}" cy="${850 + rand() * 30}" r="${50 + rand() * 40}" fill="#141A7C"/>`;
    $('#farTrees').innerHTML = far;
    let mid = ''; rng = 29;
    for (let x = -60; x < 1700; x += 230 + rand() * 150) { const k = KINDS[Math.floor(rand() * KINDS.length)]; mid += TREES[k](x, 540 + rand() * 280, '#0E1266', 1.05 + rand() * .35); }
    for (let x = 0; x < 1640; x += 30) mid += `<path d="M${x} 900Q${x + 8} ${790 + rand() * 50} ${x + 22} ${800 + rand() * 40}Q${x + 26} ${850} ${x + 34} 900Z" fill="#0E1266"/>`;
    $('#midTrees').innerHTML = mid;
    $('#nearBush').innerHTML = buildNear();
}
/* ===== arbustos y hojas del frente (reemplaza el bloque "near" de buildJungle) ===== */
const NEAR_PAL = { bush: '#141B7E', bushHi: '#1C2598', leafA: '#0A0D52', leafB: '#0F1468', rib: '#171E88', grass: '#07083A' };
function hoja(bx, by, a, L, W, c, rib) {
    const tx = bx + Math.cos(a) * L, ty = by + Math.sin(a) * L, nx = -Math.sin(a), ny = Math.cos(a), mx = bx + Math.cos(a) * L * .5, my = by + Math.sin(a) * L * .5;
    let d = `<path d="M${P2(bx, by)}Q${P2(mx + nx * W, my + ny * W)} ${P2(tx, ty)}Q${P2(mx - nx * W, my - ny * W)} ${P2(bx, by)}Z" fill="${c}"/><path d="M${P2(bx, by)}L${P2(tx, ty)}" stroke="${rib}" stroke-width="2.6" stroke-linecap="round"/>`;
    for (const k of [.32, .5, .68]) {
        const px = bx + Math.cos(a) * L * k, py = by + Math.sin(a) * L * k, w = W * (1 - Math.abs(k - .5) * 1.3) * .38;
        d += `<path d="M${P2(px, py)}L${P2(px + Math.cos(a) * L * .1 + nx * w, py + Math.sin(a) * L * .1 + ny * w)}M${P2(px, py)}L${P2(px + Math.cos(a) * L * .1 - nx * w, py + Math.sin(a) * L * .1 - ny * w)}" stroke="${rib}" stroke-width="1.8" stroke-linecap="round" opacity=".8"/>`;
    }
    return d;
}
function brote(x, y, s, c) {
    let d = `<path d="M${P2(x, y)}Q${P2(x + 4 * s, y - 40 * s)} ${P2(x, y - 70 * s)}" stroke="${c}" stroke-width="${5 * s}" fill="none" stroke-linecap="round"/>`;
    for (let i = 0; i < 7; i++) { const a = (-170 + i * 27) * Math.PI / 180, L = (46 + rand() * 18) * s; d += `<path d="M${P2(x, y - 70 * s)}Q${P2(x + Math.cos(a) * L * .6, y - 70 * s + Math.sin(a) * L * .6 - 12 * s)} ${P2(x + Math.cos(a) * L, y - 70 * s + Math.sin(a) * L * .4 + 14 * s)}" stroke="${c}" stroke-width="${7 * s}" fill="none" stroke-linecap="round"/>`; }
    return d;
}
function buildNear(p = NEAR_PAL) {
    let near = ''; rng = 53;
    for (let x = -60; x < 1700; x += 130 + rand() * 120) {
        const w = 150 + rand() * 110, h = 80 + rand() * 70;
        for (let j = 0; j < 8; j++) {
            const t = j / 7 - .5, r = h * (.42 + rand() * .12) * (1 - Math.abs(t) * .55), cx = x + t * w, cy = 900 - h * (1 - Math.abs(t) * 1.1) + r * .55;
            near += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="${p.bush}"/>`;
            near += `<circle cx="${(cx - r * .25).toFixed(1)}" cy="${(cy - r * .35).toFixed(1)}" r="${(r * .45).toFixed(1)}" fill="${p.bushHi}"/>`;
        }
    }
    for (let x = -20; x < 1660; x += 70 + rand() * 80) {
        const n = 3 + Math.floor(rand() * 3);
        for (let i = 0; i < n; i++) { const a = (-150 + i * (120 / (n - 1 || 1)) + (rand() - .5) * 16) * Math.PI / 180, L = 90 + rand() * 95; near += hoja(x + (rand() - .5) * 14, 908, a, L, L * (.3 + rand() * .1), i % 2 ? p.leafA : p.leafB, p.rib); }
    }
    for (let x = 60; x < 1600; x += 240 + rand() * 200) near += brote(x, 905, .9 + rand() * .5, p.leafB);
    for (let x = -20; x < 1640; x += 16 + rand() * 14) { const r = 12 + rand() * 16; near += `<circle cx="${x.toFixed(1)}" cy="${(888 - r * .35).toFixed(1)}" r="${r.toFixed(1)}" fill="${p.grass}"/>`; }
    near += `<rect x="0" y="880" width="1600" height="20" fill="${p.grass}"/>`;
    return near;
}
function buildVines() {
    $$('.vines').forEach((svg, si) => {
        rng = 101 + si * 17; let out = `<path class="v" d="M-20 6Q200 40 400 10T800 14T1200 8T1620 18" style="--len:1800;stroke-width:6"/>`;
        for (let i = 0; i < 11; i++) {
            const x = 40 + i * 150 + rand() * 70, len = 40 + rand() * 80;
            out += `<path class="v" d="M${x} 10Q${x + (rand() - .5) * 40} ${len / 2} ${x + (rand() - .5) * 20} ${len}" style="--len:${len + 40}"/>`;
            for (let k = 18; k < len; k += 18) { const side = k / 18 % 2 ? 1 : -1; out += `<ellipse class="lf" cx="${x + side * 9}" cy="${k}" rx="9" ry="4.5" transform="rotate(${side * 30} ${x + side * 9} ${k})" style="--d:${k * 12}"/>`; }
        }
        svg.innerHTML = out;
    });
}

/* ---------- renderers ---------- */
function renderStack() {
    $('#lianas').innerHTML = STACK.map(g => `<div class="liana focusable" data-d="${g.d || 'none'}" style="--c:${g.c}">
    <h3>${t(g.k)} <span>${g.items.length}</span></h3>
    <ul>${g.items.map(([n, ic], i) => `<li style="transition-delay:${i * 20}ms">${ic ? `<i class="devicon-${ic}" aria-hidden="true"></i>` : '<b aria-hidden="true"></b>'}${esc(n)}</li>`).join('')}</ul></div>`).join('');
}
function renderWays() {
    $('#ways').innerHTML = WAYS.map(w => `<div class="way"><svg style="color:${w.c}" aria-hidden="true"><use href="#leafI"/></svg><h3>${esc(w[lang][0])}</h3><p>${esc(w[lang][1])}</p></div>`).join('');
}
const medal = c => `<svg viewBox="0 0 52 56" aria-hidden="true"><path d="M16 0h8l4 16h-8zM28 0h8l-4 16h-8z" fill="#2734B8"/><circle cx="26" cy="36" r="18" fill="${c}"/><circle cx="26" cy="36" r="11" fill="none" stroke="#07083A" stroke-width="2.4" opacity=".4"/><path d="M20 36l4 4 8-8" stroke="#07083A" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
function renderEdu() {
    $('#edu').innerHTML = EDU.map(e => `<li class="focusable" data-d="${e.d || 'none'}"><span class="y">${e.y}</span><span class="k">${t(e.deg)}</span><span class="p">${esc(e[lang])}${e.now ? `<span class="now">${t('e.now')}</span>` : ''}</span><span class="i">${esc(e.inst)}</span></li>`).join('');
    $('#medals').innerHTML = CERTS.map(c => `<li class="focusable" data-d="${c[2]}">${medal(c[3])}<b>${esc(c[0])}</b><span>${esc(c[1])}</span></li>`).join('');
}
function renderCourses() {
    const n = { all: COURSES.length, web: 0, infra: 0, other: 0 }; COURSES.forEach(c => n[c[2]]++);
    $('#courseFilters').innerHTML = ['all', 'web', 'infra', 'other'].map(f => `<button type="button" data-f="${f}" aria-pressed="${f === courseFilter}">${t('k.' + f)}<span>${n[f]}</span></button>`).join('');
    $('#courses').innerHTML = COURSES.map(c => `<li data-c="${c[2]}" ${courseFilter !== 'all' && c[2] !== courseFilter ? 'hidden' : ''}>${esc(c[0])}<span>${esc(c[1])}</span></li>`).join('');
    $('#courseTotal').textContent = COURSES.length;
}
const titiSVG = `<svg class="critter-svg" viewBox="0 0 70 110" aria-hidden="true"><g class="jump">
 <g class="ttail"><path d="M40 64q14 22 -2 44" stroke="#9C9BD6" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M40 64q14 22 -2 44" stroke="#07083A" stroke-width="6" fill="none" stroke-dasharray="3 6" stroke-linecap="butt"/></g>
 <ellipse cx="35" cy="56" rx="15" ry="18" fill="#B9B8D6"/><ellipse cx="35" cy="60" rx="8" ry="11" fill="#F7E7D2"/>
 <g class="thead"><circle cx="21" cy="26" r="9" fill="#F7E7D2"/><circle cx="49" cy="26" r="9" fill="#F7E7D2"/><circle cx="35" cy="30" r="13" fill="#9C9BD6"/><ellipse cx="35" cy="34" rx="8" ry="8" fill="#F7E7D2"/>
 <circle cx="31" cy="32" r="2.2" fill="#07083A"/><circle cx="39" cy="32" r="2.2" fill="#07083A"/><path d="M31 38q4 4 8 0" stroke="#07083A" stroke-width="1.8" fill="none" stroke-linecap="round"/></g>
 <path d="M22 50q-8 6-8 14M48 50q8 6 8 14" stroke="#B9B8D6" stroke-width="5" fill="none" stroke-linecap="round"/></g></svg>`;
const camSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#07083A" stroke-width="1.8" aria-hidden="true"><path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/></svg>';
const PCOLORS = ['var(--cyan)', 'var(--coral)', 'var(--banana)', '#9C8CFF'];
function renderProjects() {
    $('#projects').innerHTML = PROJECTS.map((p, i) => `<article class="pcard" style="--c:${PCOLORS[i % PCOLORS.length]}">
    <h3>${esc(p.nombre)}</h3><p>${esc(p[lang] || p.es || '')}</p>
    <a class="go" href="${esc(p.url || '#')}" target="_blank" rel="noopener" aria-label="${t('pj.view')}: ${esc(p.nombre)} (${t('pj.newtab')})">${t('pj.view')}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
  </article>`).join('');
}
function renderMem() {
    const items = PHOTOS.length
        ? PHOTOS.map((p, i) => `<figure class="pola" style="--dl:-${i * .7}s"><button type="button" data-i="${i}" aria-label="${esc(p[lang] || t('m.photo'))}"><div class="ph"><img src="${esc(p.src)}" alt="${esc(p[lang] || t('m.photo'))}" loading="lazy"></div></button><p>${esc(p[lang] || '')}</p></figure>`)
        : Array.from({ length: 8 }, (_, i) => `<div class="pola empty" style="--dl:-${i * .9}s"><div class="ph">${camSVG}</div><p>${t('m.empty')}</p></div>`);
    const rows = []; for (let i = 0; i < items.length; i += 4) rows.push(items.slice(i, i + 4));
    $('#mem').innerHTML = rows.map((r, ri) => `<div class="line"><div class="titi${ri % 2 ? ' l' : ''}"><button class="critter c-titi" type="button" data-name="titi" aria-label="${t('feed.titi')}">${titiSVG}<svg class="yum" aria-hidden="true"><use href="#shout"/></svg></button></div><div class="polas">${r.join('')}</div></div>`).join('');
}

/* ---------- i18n ---------- */
function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => { const v = I18N[lang][el.dataset.i18n]; if (v != null) el.textContent = v; });
    $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    $$('[data-i18n-alt]').forEach(el => el.alt = t(el.dataset.i18nAlt));
    $$('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    renderProjects(); renderStack(); renderWays(); renderEdu(); renderCourses(); renderMem(); renderBooks();
    $('#formStatus').textContent = '';
    if (typeof watchBoil === 'function') watchBoil();
}
$$('.lang button').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; try { localStorage.setItem('fp-lang', lang) } catch (e) { }; applyLang(); }));

/* ---------- discipline focus ---------- */
$$('.chip').forEach(c => c.addEventListener('click', () => {
    const f = c.dataset.focus, on = document.body.dataset.focus === f;
    if (on) delete document.body.dataset.focus; else document.body.dataset.focus = f;
    $$('.chip').forEach(x => x.setAttribute('aria-pressed', String(!on && x === c)));
}));

/* ---------- courses filter ---------- */
$('#courseFilters').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return; courseFilter = b.dataset.f;
    $$('#courseFilters button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    $$('#courses li').forEach(li => li.hidden = courseFilter !== 'all' && li.dataset.c !== courseFilter);
    if (window.MotionFX) MotionFX.courses();
});

/* ---------- biblioteca ---------- */
let bookFilter = 'all', bookQuery = '';
const bkHash = s => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
const bkNorm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const banRate = n => `<span class="bk-rate" role="img" aria-label="${t('b.rate').replace('{n}', n)}">${[1, 2, 3, 4, 5].map(i => `<svg class="${i > n ? 'off' : ''}" aria-hidden="true"><use href="#banana"/></svg>`).join('')}</span>`;
function bkCover(b) {
    const T = TEMAS[b.tema] || { c: 'var(--cream)' };
    return `<span class="cb"></span><span class="ct">${esc(b.titulo)}</span><span class="ca">${esc(b.autor)}</span>${b.isbn ? `<img src="https://covers.openlibrary.org/b/isbn/${esc(b.isbn)}-M.jpg?default=false" alt="" loading="lazy" onerror="this.remove()">` : ''}`;
}
function renderBooks() {
    $('#bookTotal').textContent = LIBROS.length;
    $('#bookTop').innerHTML = LIBROS.map((b, i) => [b, i]).filter(([b]) => b.top).slice(0, 3).map(([b, i]) => `<button class="bk-cover" type="button" data-b="${i}" style="--c:${(TEMAS[b.tema] || {}).c}" aria-label="${esc(b.titulo)}, ${esc(b.autor)}">${bkCover(b)}</button>`).join('');
    const n = { all: LIBROS.length }; LIBROS.forEach(b => n[b.tema] = (n[b.tema] || 0) + 1);
    $('#bookFilters').innerHTML = ['all', ...Object.keys(TEMAS).filter(k => n[k])].map(k => `<button type="button" data-f="${k}" aria-pressed="${k === bookFilter}">${k === 'all' ? t('k.all') : esc(TEMAS[k][lang])}<span>${n[k]}</span></button>`).join('');
    $('#bookShelves').innerHTML = Object.keys(TEMAS).filter(k => n[k]).map(k => {
        const T = TEMAS[k];
        return `<div class="shelf" data-t="${k}" style="--c:${T.c}"><h3>${esc(T[lang])} <span>${n[k]}</span></h3><div class="spines">${LIBROS.map((b, i) => [b, i]).filter(([b]) => b.tema === k).map(([b, i]) => {
            const w = Math.round(Math.min(64, Math.max(26, 18 + (b.paginas || 250) / 14))), h = 150 + bkHash(b.titulo) % 5 * 12;
            return `<button class="spine${b.top ? ' fav' : ''}" type="button" data-b="${i}" data-q="${esc(bkNorm(b.titulo + ' ' + b.autor))}" style="--c:${T.c};--w:${w}px;--h:${h}px" aria-label="${esc(b.titulo)}, ${esc(b.autor)}"><span>${esc(b.titulo)}</span></button>`;
        }).join('')
            }</div></div>`;
    }).join('') + `<p class="bk-empty" hidden>${t('b.empty')}</p>`;
    filterBooks(false);
}
function filterBooks(anim = true) {
    const q = bkNorm(bookQuery.trim()); let any = false;
    $$('#bookShelves .shelf').forEach(sh => {
        let vis = 0;
        $$('.spine', sh).forEach(sp => { const ok = (bookFilter === 'all' || sh.dataset.t === bookFilter) && (!q || sp.dataset.q.includes(q)); sp.hidden = !ok; if (ok) vis++; });
        sh.hidden = !vis; if (vis) any = true;
    });
    const em = $('#bookShelves .bk-empty'); if (em) em.hidden = any;
    if (anim && window.Motion && !reduce) { const vis = $$('#bookShelves .spine:not([hidden])'); Motion.animate(vis, { y: [24, 0], opacity: [0, 1] }, { duration: .4, ease: EASE_OUT, delay: Motion.stagger(Math.min(.02, .4 / Math.max(1, vis.length))) }); }
}
$('#bookFilters').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return; bookFilter = b.dataset.f;
    $$('#bookFilters button').forEach(x => x.setAttribute('aria-pressed', String(x === b))); filterBooks();
});
$('#bookSearch').addEventListener('input', e => { bookQuery = e.target.value; filterBooks(); });
const bookDlg = $('#bookDlg');
document.addEventListener('click', e => {
    const el = e.target.closest('#libros [data-b]'); if (!el || !bookDlg.showModal) return;
    const b = LIBROS[+el.dataset.b], T = TEMAS[b.tema] || { c: 'var(--cream)', es: '', en: '' };
    $('#bookCard').style.setProperty('--c', T.c);
    $('#bookCard').innerHTML = `<div class="bk-cover" style="--c:${T.c}" aria-hidden="true">${bkCover(b)}</div>
    <div><h3 id="bookDlgT">${esc(b.titulo)}</h3><p class="au">${esc(b.autor)}</p>
    <div class="bk-meta"><span class="tag">${esc(T[lang])}</span>${b.paginas ? `<span>${b.paginas} ${t('b.pages')}</span>` : ''}${b.nota ? banRate(b.nota) : ''}</div>
    ${(b[lang] || b.es) ? `<div class="bk-why"><h4>${t('b.why')}</h4><p>${esc(b[lang] || b.es)}</p></div>` : ''}
    <button class="btn x" type="button" id="bookClose">${t('close')}</button></div>`;
    bookDlg.showModal(); $('#bookClose').focus();
    if (window.Motion && !reduce) {
        const r = el.getBoundingClientRect(), c = $('#bookCard').getBoundingClientRect();
        Motion.animate('#bookCard', { x: [r.left + r.width / 2 - (c.left + c.width / 2), 0], y: [r.top + r.height / 2 - (c.top + c.height / 2), 0], scale: [.25, 1], rotate: [-8, 0], opacity: [0, 1] }, { type: 'spring', stiffness: 260, damping: 24 });
    }
});
bookDlg.addEventListener('click', e => { if (e.target === bookDlg || e.target.id === 'bookClose') bookDlg.close(); });

/* ---------- sonidos (Web Audio, sintetizados) ---------- */
const toast = $('#toast'); let toastT;
function say(msg, ms = 3600) { toast.textContent = msg; toast.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('show'), ms); }
let AC = null, master = null, noiseBuf = null;
function audio() {
    if (!AC) {
        const C = window.AudioContext || window.webkitAudioContext; if (!C) return null;
        AC = new C(); master = AC.createGain(); master.gain.value = .55; const comp = AC.createDynamicsCompressor(); master.connect(comp); comp.connect(AC.destination);
    }
    if (AC.state === 'suspended') AC.resume();
    return AC;
}
function noiseSrc() { if (!noiseBuf) { noiseBuf = AC.createBuffer(1, AC.sampleRate * 2, AC.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++)d[i] = Math.random() * 2 - 1; } const n = AC.createBufferSource(); n.buffer = noiseBuf; return n; }
/* una vocalización: tono que sube y baja, filtro de "boca", vibrato y aire */
function hoot(t0, dur, f0, f1, f2, o = {}, out = master) {
    const { vol = .4, form = 1200, q = 3, vib = 8, vd = 12, breath = .2, type = 'sawtooth' } = o;
    const osc = AC.createOscillator(); osc.type = type;
    osc.frequency.setValueAtTime(f0, t0); osc.frequency.exponentialRampToValueAtTime(f1, t0 + dur * .35); osc.frequency.exponentialRampToValueAtTime(f2, t0 + dur);
    const lfo = AC.createOscillator(), lg = AC.createGain(); lfo.frequency.value = vib; lg.gain.value = vd; lfo.connect(lg); lg.connect(osc.frequency);
    const bp = AC.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = q; bp.frequency.setValueAtTime(form * .6, t0); bp.frequency.linearRampToValueAtTime(form, t0 + dur * .4); bp.frequency.linearRampToValueAtTime(form * .8, t0 + dur);
    const lp = AC.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = form * 1.6;
    const g = AC.createGain(); g.gain.setValueAtTime(.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + Math.min(.04, dur * .3)); g.gain.exponentialRampToValueAtTime(vol * .55, t0 + dur * .75); g.gain.exponentialRampToValueAtTime(.0001, t0 + dur);
    const lpg = AC.createGain(); lpg.gain.value = .35;
    osc.connect(bp); bp.connect(g); osc.connect(lp); lp.connect(lpg); lpg.connect(g); g.connect(out);
    if (breath > 0) {
        const n = noiseSrc(), nf = AC.createBiquadFilter(), ng = AC.createGain(); nf.type = 'bandpass'; nf.frequency.value = form; nf.Q.value = 1.2;
        ng.gain.setValueAtTime(.0001, t0); ng.gain.exponentialRampToValueAtTime(vol * breath, t0 + .03); ng.gain.exponentialRampToValueAtTime(.0001, t0 + dur);
        n.connect(nf); nf.connect(ng); ng.connect(out); n.start(t0); n.stop(t0 + dur + .05);
    }
    osc.start(t0); lfo.start(t0); osc.stop(t0 + dur + .05); lfo.stop(t0 + dur + .05);
}
function thump(t0, vol = .8, out = master) {
    const o = AC.createOscillator(), g = AC.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(140, t0); o.frequency.exponentialRampToValueAtTime(45, t0 + .18);
    g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(.0001, t0 + .25); o.connect(g); g.connect(out); o.start(t0); o.stop(t0 + .3);
    const n = noiseSrc(), f = AC.createBiquadFilter(), ng = AC.createGain(); f.type = 'lowpass'; f.frequency.value = 900; ng.gain.setValueAtTime(vol * .5, t0); ng.gain.exponentialRampToValueAtTime(.0001, t0 + .08);
    n.connect(f); f.connect(ng); ng.connect(out); n.start(t0); n.stop(t0 + .1);
}
const rnd = (a, b) => a + Math.random() * (b - a);
const CALLS = {
    felix(t) {
        for (let i = 0; i < 6; i++) { const p = 1 + i * .17; hoot(t + i * .18, .15, 250 * p, 420 * p, 300 * p, { vol: .3 + i * .04, form: 850 + i * 130 }); }
        hoot(t + 1.1, .45, 700, 1350, 1000, { vol: .5, form: 2200, q: 2, vd: 30 }); hoot(t + 1.5, .55, 760, 1450, 900, { vol: .5, form: 2300, q: 2, vd: 36 });
    },
    spider(t) { for (let i = 0; i < 8; i++) hoot(t + i * .09, .08, rnd(1000, 1300), rnd(1500, 1800), 1200, { vol: .28, form: 2600, q: 4, vib: 40, vd: 40 }); },
    gorilla(t) { hoot(t, .4, 110, 170, 90, { vol: .55, form: 520, q: 2, breath: .5 }); for (let i = 0; i < 8; i++) thump(t + .45 + i * .1, .7 + (i % 2) * .15); },
    orang(t) { hoot(t, 1.1, 160, 260, 200, { vol: .5, form: 700, q: 3, vib: 5, vd: 8, breath: .3 }); hoot(t + 1.15, .9, 190, 300, 150, { vol: .45, form: 800, breath: .3 }); },
    capu(t) { for (let i = 0; i < 4; i++) hoot(t + i * .16, .13, 1300, 1950, 1500, { vol: .28, form: 2800, q: 5, vib: 25, vd: 50 }); },
    lemur(t) { hoot(t, .5, 500, 900, 650, { vol: .38, form: 1500, q: 3 }); hoot(t + .55, .65, 520, 960, 600, { vol: .38, form: 1500, q: 3 }); },
    howler(t) { hoot(t, 2.2, 115, 195, 140, { vol: .6, form: 600, q: 1.5, vib: 6, vd: 20, breath: .7 }); hoot(t + .05, 2.1, 230, 390, 280, { vol: .22, form: 1200, q: 2, breath: .4 }); },
    explorer(t) { hoot(t, .22, 400, 700, 500, { vol: .35, form: 1300 }); hoot(t + .26, .22, 420, 760, 520, { vol: .38, form: 1400 }); hoot(t + .55, .5, 600, 1150, 800, { vol: .45, form: 2000, q: 2, vd: 25 }); },
    titi(t) { for (let i = 0; i < 10; i++) hoot(t + i * .05, .045, 2400, 3200, 2800, { vol: .16, form: 3400, q: 6, vd: 0, breath: 0 }); },
    prof(t) { hoot(t, .7, 170, 205, 160, { vol: .4, form: 520, q: 2, vib: 4, vd: 6, breath: .35 }); const o = AC.createOscillator(), g = AC.createGain(); o.type = 'sine'; o.frequency.value = 1568; g.gain.setValueAtTime(.0001, t + .8); g.gain.exponentialRampToValueAtTime(.3, t + .81); g.gain.exponentialRampToValueAtTime(.0001, t + 1.6); o.connect(g); g.connect(master); o.start(t + .8); o.stop(t + 1.65); },
    sci(t) {
        for (let i = 0; i < 7; i++) { const t0 = t + i * .07, f = rnd(500, 900), o = AC.createOscillator(), g = AC.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(f, t0); o.frequency.exponentialRampToValueAtTime(f * 2.2, t0 + .06); g.gain.setValueAtTime(.0001, t0); g.gain.exponentialRampToValueAtTime(.25, t0 + .01); g.gain.exponentialRampToValueAtTime(.0001, t0 + .07); o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + .08); }
        hoot(t + .6, .35, 420, 820, 560, { vol: .4, form: 1500, q: 2, vd: 20 }); hoot(t + .98, .5, 520, 1100, 700, { vol: .45, form: 1900, q: 2, vd: 28 });
    },
    mech(t) {
        for (let i = 0; i < 8; i++) { const t0 = t + i * .06, n = noiseSrc(), f = AC.createBiquadFilter(), g = AC.createGain(); f.type = 'bandpass'; f.frequency.value = 3200; f.Q.value = 4; g.gain.setValueAtTime(.35, t0); g.gain.exponentialRampToValueAtTime(.0001, t0 + .03); n.connect(f); f.connect(g); g.connect(master); n.start(t0); n.stop(t0 + .04); }
        const o = AC.createOscillator(), g = AC.createGain(); o.type = 'triangle'; o.frequency.setValueAtTime(620, t + .6); o.frequency.exponentialRampToValueAtTime(410, t + 1.2); g.gain.setValueAtTime(.0001, t + .6); g.gain.exponentialRampToValueAtTime(.3, t + .61); g.gain.exponentialRampToValueAtTime(.0001, t + 1.3); o.connect(g); g.connect(master); o.start(t + .6); o.stop(t + 1.35); hoot(t + .62, .3, 160, 240, 150, { vol: .35, form: 600, q: 2, breath: .3 });
    },
    reader(t) {
        const n = noiseSrc(), f = AC.createBiquadFilter(), g = AC.createGain(); f.type = 'highpass'; f.frequency.value = 2600; g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.35, t + .08); g.gain.exponentialRampToValueAtTime(.0001, t + .7); n.connect(f); f.connect(g); g.connect(master); n.start(t); n.stop(t + .75);
        const n2 = noiseSrc(), f2 = AC.createBiquadFilter(), g2 = AC.createGain(); f2.type = 'bandpass'; f2.frequency.value = 1800; g2.gain.setValueAtTime(.3, t + .9); g2.gain.exponentialRampToValueAtTime(.0001, t + 1.05); n2.connect(f2); f2.connect(g2); g2.connect(master); n2.start(t + .9); n2.stop(t + 1.1);
    },
    hack(t) {
        [72, 79, 76, 84, 81, 88].forEach((m, i) => { const t0 = t + i * .07, o = AC.createOscillator(), g = AC.createGain(); o.type = 'square'; o.frequency.value = mtof(m); g.gain.setValueAtTime(.0001, t0); g.gain.exponentialRampToValueAtTime(.12, t0 + .005); g.gain.exponentialRampToValueAtTime(.0001, t0 + .06); o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + .07); });
        const n = noiseSrc(), f = AC.createBiquadFilter(), g = AC.createGain(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = .7; g.gain.setValueAtTime(.25, t + .45); g.gain.exponentialRampToValueAtTime(.0001, t + .6); n.connect(f); f.connect(g); g.connect(master); n.start(t + .45); n.stop(t + .62);
    },
    sit(t) { hoot(t, .16, 500, 800, 600, { vol: .3, form: 1400 }); hoot(t + .2, .16, 560, 880, 640, { vol: .32, form: 1500 }); hoot(t + .42, .4, 700, 1300, 900, { vol: .4, form: 2000, q: 2, vd: 24 }); },
    sleep(t) { hoot(t, 1.2, 180, 140, 95, { vol: .35, form: 480, q: 2, breath: .8, vib: 3, vd: 4 }); hoot(t + 1.3, .35, 300, 520, 380, { vol: .3, form: 1100 }); }
    /* Sonidos en archivo: si un mono aparece aquí, suena este MP3 en lugar del sonido sintetizado */
};

const SONIDOS = {
    felix: { src: './musica/saludo_rojo.mp3' }
};

/* ---------- canción original del mandril: «Selva nocturna» ---------- */
const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
const MEL = [69, 0, 72, 0, 74, 0, 72, 69, 0, 67, 0, 69, 0, 0, 0, 0, 69, 0, 72, 0, 74, 0, 76, 0, 79, 0, 76, 74, 0, 72, 0, 0, 76, 0, 74, 0, 72, 0, 74, 76, 0, 79, 0, 76, 0, 74, 72, 0, 69, 0, 72, 74, 0, 72, 69, 0, 67, 0, 69, 0, 0, 0, 0, 0];
const BAR_A = [45, 0, 0, 45, 0, 0, 45, 0, 48, 0, 0, 48, 0, 50, 0, 0], BAR_F = [41, 0, 0, 41, 0, 0, 41, 0, 43, 0, 0, 43, 0, 45, 0, 0];
const BASS = [...BAR_A, ...BAR_A, ...BAR_F, ...BAR_A];
const BONGO = [2, 7, 10, 14, 15];
let song = null;
function marimba(t, m, vol = .32) {
    const f = mtof(m), g = AC.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + .5); g.connect(song.out);
    const a = AC.createOscillator(); a.type = 'sine'; a.frequency.value = f; a.connect(g);
    const b = AC.createOscillator(), bg = AC.createGain(); b.type = 'sine'; b.frequency.value = f * 4; bg.gain.setValueAtTime(vol * .5, t); bg.gain.exponentialRampToValueAtTime(.0001, t + .08); b.connect(bg); bg.connect(song.out);
    a.start(t); b.start(t); a.stop(t + .55); b.stop(t + .1);
}
function bass(t, m) {
    const o = AC.createOscillator(), g = AC.createGain(), lp = AC.createBiquadFilter(); o.type = 'triangle'; o.frequency.value = mtof(m); lp.type = 'lowpass'; lp.frequency.value = 500;
    g.gain.setValueAtTime(.42, t); g.gain.exponentialRampToValueAtTime(.0001, t + .32); o.connect(lp); lp.connect(g); g.connect(song.out); o.start(t); o.stop(t + .35);
}
function hat(t, vol) { const n = noiseSrc(), f = AC.createBiquadFilter(), g = AC.createGain(); f.type = 'highpass'; f.frequency.value = 7000; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + .05); n.connect(f); f.connect(g); g.connect(song.out); n.start(t); n.stop(t + .06); }
function clap(t) { const n = noiseSrc(), f = AC.createBiquadFilter(), g = AC.createGain(); f.type = 'bandpass'; f.frequency.value = 1600; f.Q.value = .8; g.gain.setValueAtTime(.4, t); g.gain.exponentialRampToValueAtTime(.0001, t + .14); n.connect(f); f.connect(g); g.connect(song.out); n.start(t); n.stop(t + .16); }
function bongo(t, hi) { const o = AC.createOscillator(), g = AC.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(hi ? 420 : 300, t); o.frequency.exponentialRampToValueAtTime(hi ? 260 : 190, t + .12); g.gain.setValueAtTime(.35, t); g.gain.exponentialRampToValueAtTime(.0001, t + .16); o.connect(g); g.connect(song.out); o.start(t); o.stop(t + .18); }
function playStep(step, t) {
    const s16 = step % 64, inBar = s16 % 16;
    if (inBar % 4 === 0) thump(t, .75, song.out);
    if (inBar === 4 || inBar === 12) clap(t);
    hat(t, inBar % 2 ? .12 : .06);
    if (BONGO.includes(inBar)) bongo(t, inBar % 2 === 0);
    if (BASS[s16]) bass(t, BASS[s16]);
    if (MEL[s16] && song.loop > 0) marimba(t, MEL[s16]);
    if (s16 === 60 && song.loop % 2 === 1) { hoot(t, .14, 320, 520, 380, { vol: .18, form: 1000 }, song.out); hoot(t + .16, .18, 380, 600, 420, { vol: .2, form: 1100 }, song.out); }
    if (s16 === 63) song.loop++;
}
let songAudio = null, analyser = null, beat = 0, beatRaf = 0;
function hookAnalyser() {
    if (analyser || !songAudio) return; const ac = audio(); if (!ac) return;
    try { const src = AC.createMediaElementSource(songAudio); analyser = AC.createAnalyser(); analyser.fftSize = 256; analyser.smoothingTimeConstant = .78; src.connect(analyser); analyser.connect(AC.destination); } catch (e) { analyser = null; }
}
const eqBars = $$('#dock .eq i'); let fbuf = null;
function beatLoop() {
    beatRaf = 0; if (!song) { beat = 0; document.body.style.setProperty('--beat', '0'); eqBars.forEach(b => b.style.transform = 'scaleY(.2)'); return; }
    const tm = performance.now();
    let bands = [0, 0, 0, 0];
    if (analyser) {
        fbuf = fbuf || new Uint8Array(analyser.frequencyBinCount); analyser.getByteFrequencyData(fbuf);
        const edges = [[1, 5], [5, 14], [14, 34], [34, 80]];
        bands = edges.map(([a, b]) => { let m = 0; for (let i = a; i < b; i++)m += fbuf[i]; return m / (b - a) / 255; });
    }
    if (!analyser || bands.every(v => v === 0)) { /* no data (e.g. synth song or blocked): fake a gentle 100 bpm pulse */
        const ph = (tm / 600) % 1; const k = Math.pow(1 - ph, 3); bands = [k, .5 * k + .2 * Math.sin(tm / 140) ** 2, .4 * Math.sin(tm / 90) ** 2, .3 * Math.sin(tm / 70) ** 2];
    }
    const target = Math.min(1, Math.max(0, (bands[0] - .35) * 1.9));
    beat += (target - beat) * (target > beat ? .55 : .12);
    if (!document.body.classList.contains('calm')) document.body.style.setProperty('--beat', beat.toFixed(3));
    eqBars.forEach((b, i) => b.style.transform = `scaleY(${(.18 + Math.min(1, bands[i] * 1.25) * .82).toFixed(3)})`);
    beatRaf = requestAnimationFrame(beatLoop);
}
function kickBeat() { if (!beatRaf) beatRaf = requestAnimationFrame(beatLoop); }
const dock = $('#dock');
function setPlaying(on) {
    const m = $('.c-dj'); m.classList.toggle('playing', on); m.setAttribute('aria-pressed', String(on));
    document.body.classList.toggle('has-dock', on);
    if (window.MotionFX) MotionFX.dock(on); else { dock.style.visibility = on ? 'visible' : 'hidden'; dock.style.transform = on ? 'none' : 'translateY(160%)'; }
    if (on) kickBeat();
}
function startSong() {
    if (CONFIG.cancion) {
        if (!songAudio) { songAudio = new Audio(CONFIG.cancion); songAudio.loop = true; songAudio.volume = .8; }
        if (/^https?:$/.test(location.protocol)) hookAnalyser(); /* file:// would taint the stream and mute it */
        songAudio.currentTime = 0;
        const pr = songAudio.play(); if (pr) pr.catch(() => { say(t('noAudio')); stopSong(); setPlaying(false); });
        song = { file: true }; return true;
    }
    const ac = audio(); if (!ac) { say(t('noAudio')); return false; }
    const out = AC.createGain(); out.gain.value = .0001; out.connect(master); out.gain.exponentialRampToValueAtTime(.9, AC.currentTime + .4);
    song = { out, step: 0, loop: 0, next: AC.currentTime + .08, spb: 60 / 104 / 4 };
    song.timer = setInterval(() => { while (song && song.next < AC.currentTime + .14) { playStep(song.step, song.next); song.step++; song.next += song.spb; } }, 25);
    return true;
}
function stopSong() { if (!song) return; if (song.file) { if (songAudio) songAudio.pause(); song = null; return; } clearInterval(song.timer); const o = song.out; o.gain.cancelScheduledValues(AC.currentTime); o.gain.setValueAtTime(o.gain.value, AC.currentTime); o.gain.exponentialRampToValueAtTime(.0001, AC.currentTime + .4); setTimeout(() => o.disconnect(), 600); song = null; }

document.addEventListener('click', e => {
    const c = e.target.closest('.critter'); if (!c) return;
    if (window.MotionFX) MotionFX.bananas(c, e);
    c.classList.remove('fed'); void c.offsetWidth; c.classList.add('fed');
    setTimeout(() => c.classList.remove('fed'), 1150);
    const name = c.dataset.name;
    if (name === 'mandrill') {
        if (song) { stopSong(); setPlaying(false); say(t('songOff'), 1800); }
        else if (startSong()) { setPlaying(true); $('#dockTitle').textContent = CONFIG.cancion ? (CONFIG.tituloCancion || 'DJ Mandril') : (lang === 'es' ? 'Selva nocturna' : 'Night Jungle'); }
        return;
    }
    if (SONIDOS[name]) { const s = SONIDOS[name]; if (!s.a) { s.a = new Audio(s.src); s.a.volume = .9; } s.a.currentTime = 0; s.a.play().catch(() => say(t('noAudio'))); return; }
    const ac = audio(); if (!ac) { say(t('noAudio')); return; }
    (CALLS[name] || CALLS.felix)(AC.currentTime + .02);
});

$('#dockStop').addEventListener('click', () => { stopSong(); setPlaying(false); say(t('songOff'), 1800); $('.c-dj').focus({ preventScroll: true }); });

/* ---------- "saber más de mí": muestra Biblioteca y Recuerdos ---------- */
const mas = $('#masDeMi'), masBtn = $('#masBtn'), masCta = $('#masCta');
function abrirMas(destino = 'libros') {
    if (!mas.hidden) return;
    mas.hidden = false;
    masBtn.setAttribute('aria-expanded', 'true');
    void mas.offsetWidth;            // fuerza el reflow para que el desvanecido arranque
    mas.classList.add('show');
    masCta.classList.add('out');
    setTimeout(() => {
        masCta.hidden = true;
        dispatchEvent(new Event('resize'));   // recalcula la liana guía
        document.getElementById(destino).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    }, 400);
}
masBtn.addEventListener('click', () => abrirMas());
// si alguien usa el menú para ir a Libros o Recuerdos, primero se muestran
document.addEventListener('click', e => {
    const a = e.target.closest('a[href="#libros"], a[href="#recuerdos"]');
    if (!a || !mas.hidden) return;
    e.preventDefault();
    abrirMas(a.getAttribute('href').slice(1));
}, true);

/* ---------- menu ---------- */
const menu = $('#menu'), menuBtn = $('#menuBtn');
function toggleMenu(open) { menu.classList.toggle('open', open); menu.setAttribute('aria-hidden', String(!open)); menuBtn.setAttribute('aria-expanded', String(open)); if (open) { menu.querySelector('a').focus(); if (window.MotionFX) MotionFX.menu(); } }
menuBtn.addEventListener('click', () => toggleMenu(!menu.classList.contains('open')));
menu.addEventListener('click', e => { if (e.target.closest('a')) toggleMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) { toggleMenu(false); menuBtn.focus(); } });

/* ---------- parallax + nav + lemur eyes ---------- */
const hero = $('#inicio'); let mx = 0, my = 0, sy = 0, raf = 0;
let px = 0, py = 0, eyeRaf = 0;
function lookAt() { // una lectura de layout por frame, no una por cada evento del puntero
    eyeRaf = 0;
    $$('.c-lemur .pupil').forEach(p => { const r = p.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return; const dx = px - (r.left + r.width / 2), dy = py - (r.top + r.height / 2); const d = Math.hypot(dx, dy) || 1; p.style.transform = `translate(${dx / d * 3.2}px,${dy / d * 3.2}px)`; });
}
addEventListener('pointermove', e => {
    mx = e.clientX / innerWidth * 2 - 1; my = e.clientY / innerHeight * 2 - 1; schedule();
    px = e.clientX; py = e.clientY; if (!eyeRaf) eyeRaf = requestAnimationFrame(lookAt);
}, { passive: true });
addEventListener('scroll', () => { sy = scrollY; schedule(); $('#nav').classList.toggle('scrolled', scrollY > 40); }, { passive: true });
function schedule() { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; if (reduce) return; hero.style.setProperty('--mx', mx.toFixed(3)); hero.style.setProperty('--my', my.toFixed(3)); hero.style.setProperty('--sy', Math.min(sy, 1200).toFixed(0)); }); }

/* ---------- section observers ---------- */
const grow = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('grown'); grow.unobserve(en.target); } }), { threshold: .12 });
$$('section.s').forEach(s => grow.observe(s));
const vis = new IntersectionObserver(es => es.forEach(en => en.target.classList.toggle('paused', !en.isIntersecting)), { rootMargin: '100px' });
$$('section, footer').forEach(s => vis.observe(s));
const navIO = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) $$('.nav a.nl').forEach(a => a.setAttribute('aria-current', String(a.hash === '#' + en.target.id))); }), { rootMargin: '-45% 0px -50% 0px' });
$$('section[id]').forEach(s => navIO.observe(s));

/* ---------- hand-drawn boil ---------- */
const boil = $('#boilNoise'), rough = $('#roughNoise'); let seed = 1;
// el temblor a mano solo se recalcula si hay algún personaje con filtro en pantalla
const boilSeen = new Set();
const boilIO = new IntersectionObserver(es => es.forEach(en => en.isIntersecting ? boilSeen.add(en.target) : boilSeen.delete(en.target)));
function watchBoil() { boilIO.disconnect(); boilSeen.clear(); $$('.critter, .rough').forEach(el => boilIO.observe(el)); }
setInterval(() => { if (!boilSeen.size || reduce || document.body.classList.contains('calm') || document.hidden) return; seed = seed % 4 + 1; boil.setAttribute('seed', seed); }, 140);

/* ---------- fireflies ---------- */
(function () {
    const cv = $('#flies'), ctx = cv.getContext('2d'); let W, H, flies = []; const dpr = Math.min(devicePixelRatio || 1, 2);
    function size() { W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); flies = Array.from({ length: Math.round(W / 22) }, () => ({ x: Math.random() * W, y: H * .15 + Math.random() * H * .8, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .25, r: 1 + Math.random() * 1.8, p: Math.random() * 6.28 })); draw(0); }
    function draw(tm) { ctx.clearRect(0, 0, W, H); for (const f of flies) { const a = Math.min(1, .25 + .75 * Math.max(0, Math.sin(f.p + tm / 700)) + beat * .6), R = f.r * (5 + beat * 4); ctx.beginPath(); ctx.fillStyle = `rgba(51,245,214,${a * (.18 + beat * .12)})`; ctx.arc(f.x, f.y, R, 0, 6.28); ctx.fill(); ctx.beginPath(); ctx.fillStyle = `rgba(190,255,245,${a})`; ctx.arc(f.x, f.y, f.r, 0, 6.28); ctx.fill(); } }
    let on = true; new IntersectionObserver(e => on = e[0].isIntersecting).observe(cv);
    function loop(tm) { if (on && !reduce && !document.body.classList.contains('calm')) { for (const f of flies) { f.x += f.vx + mx * .15; f.y += f.vy; if (f.x < 0) f.x = W; if (f.x > W) f.x = 0; if (f.y < H * .1 || f.y > H) f.vy *= -1; } draw(tm); } requestAnimationFrame(loop); }
    addEventListener('resize', size); size(); requestAnimationFrame(loop);
})();

/* ---------- lightbox ---------- */
const lb = $('#lightbox');
$('#mem').addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (!b || !lb.showModal) return; const p = PHOTOS[+b.dataset.i]; $('#lbImg').src = p.src; $('#lbImg').alt = p[lang] || t('m.photo'); $('#lbCap').textContent = p[lang] || ''; lb.showModal(); });
$('#lbClose').addEventListener('click', () => lb.close()); lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });

/* ---------- contact ---------- */
const mail = $('#mailLink'); mail.textContent = CONFIG.email; mail.href = 'mailto:' + CONFIG.email; $('#ghLink').href = CONFIG.github; $('#liLink').href = CONFIG.linkedin; $('#faLink').href = CONFIG.facebook; $('#igLink').href = CONFIG.instagram; /* $('#ytLink').href = CONFIG.youtube; */
// $('#contactForm').addEventListener('submit',e=>{
//   e.preventDefault();const f=e.target,st=$('#formStatus');
//   if(!f.checkValidity()){$$('input,textarea',f).forEach(el=>{if(!el.checkValidity()) el.classList.add('touched');});f.querySelector(':invalid').focus();st.textContent=t('fm.bad');return;}
//   const h=$('.c-howler');h.classList.remove('fed');void h.offsetWidth;h.classList.add('fed');if(audio()) CALLS.howler(AC.currentTime+.02);
//   location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent(t('fm.subject'))}&body=${encodeURIComponent(f.message.value+'\n\n— '+f.name.value+' <'+f.email.value+'>')}`;
//   st.textContent=t('fm.ok');
// });
if (window.emailjs) emailjs.init({ publicKey: CONFIG.emailjs.publicKey });
$('#contactForm').addEventListener('submit', async e => {
    e.preventDefault();
    const f = e.target, st = $('#formStatus'), btn = f.querySelector('button[type="submit"]'), el = f.elements;
    if (!f.checkValidity()) {
        $$('input,textarea', f).forEach(x => { if (!x.checkValidity()) x.classList.add('touched'); });
        f.querySelector(':invalid').focus(); st.textContent = t('fm.bad'); return;
    }
    if (!window.emailjs) { st.textContent = t('fm.err'); return; }
    btn.disabled = true; st.textContent = t('fm.sending');
    try {
        await emailjs.send(CONFIG.emailjs.service, CONFIG.emailjs.template, {
            name: el.name.value, email: el.email.value, message: el.message.value
        });
        const h = $('.c-mech'); h.classList.remove('fed'); void h.offsetWidth; h.classList.add('fed');
        if (audio()) CALLS.mech(AC.currentTime + .02);
        st.textContent = t('fm.ok'); f.reset();
        $$('.touched', f).forEach(x => x.classList.remove('touched'));
    } catch (err) {
        console.error(err); st.textContent = t('fm.err');
    } finally {
        btn.disabled = false;
    }
});
$('#yr').textContent = new Date().getFullYear();

/* ---------- init ---------- */
buildJungle(); buildVines(); applyLang(); watchBoil();

if (reduce) document.body.classList.add('calm');

/* ---------- opening ---------- */
(function () {
    const intro = $('#intro'); if (!intro) return;
    // la intro solo se ve una vez por visita: al recargar o volver, tu nombre aparece de inmediato
    let seen = false; try { seen = sessionStorage.getItem('fp-intro') === '1'; sessionStorage.setItem('fp-intro', '1'); } catch (e) { }
    if (reduce || seen) { intro.remove(); window.__introDone = true; return; }
    document.body.classList.add('intro-on');
    // leaf curtains
    const cols = ['#0E1266', '#141A7C', '#1E28A0', '#10146A', '#232FA8'];
    function curtain(id, mirror, seedv) {
        rng = seedv; let g = '<rect width="600" height="1000" fill="#07083A"/>';
        for (let i = 0; i < 70; i++) {
            const x = rand() * 560 + (i > 45 ? 380 : 0), y = rand() * 1080 - 40, sc = .6 + rand() * 1.3, rot = (rand() * 120 - 60) + (x > 380 ? 90 : 0);
            const c = cols[Math.floor(rand() * cols.length)];
            g += `<g transform="translate(${mirror ? 600 - x : x} ${y}) rotate(${mirror ? -rot : rot}) scale(${sc})"><path d="M0 0Q50-70 0-170Q-50-70 0 0Z" fill="${c}"/><path d="M0-6V-160" stroke="#07083A" stroke-width="3" opacity=".35"/></g>`;
        }
        $(id).innerHTML = g;
    }
    curtain('#curL', false, 301); curtain('#curR', true, 733);
    // glowing eyes in the dark
    const eyes = $('#eyes'); const spots = [[12, 22], [80, 16], [20, 72], [86, 66], [8, 48], [70, 84], [34, 12], [92, 40]];
    spots.forEach(([x, y], i) => { const e = document.createElement('span'); e.className = 'eye'; e.style.left = x + '%'; e.style.top = y + '%'; e.style.animationDelay = (.1 + i * .14) + 's'; e.innerHTML = '<i></i><i></i>'; if (i % 3 == 1) e.style.transform = 'scale(.7)'; eyes.append(e); });
    // name letters
    const words = [['Félix', 'cy'], ['Pajón', '']]; let d = 1.45;
    $('#iname').innerHTML = words.map(([w, c]) => `<span class="w ${c}" style="display:inline-flex;opacity:1;transform:none;animation:none">${[...w].map(ch => { const s = `<span class="${c}" style="animation-delay:${d.toFixed(2)}s">${ch}</span>`; d += .06; return s; }).join('')}</span>`).join('');
    let done = false;
    function finish(fast) {
        if (done) return; done = true; intro.classList.add('open'); document.body.classList.remove('intro-on');
        window.__introDone = true; dispatchEvent(new Event('introdone'));
        setTimeout(() => intro.remove(), fast ? 700 : 1200);
    }
    const timer = setTimeout(finish, 3000);
    $('#skipIntro').addEventListener('click', () => { clearTimeout(timer); finish(true); });
    addEventListener('keydown', e => { if (e.key === 'Escape') { clearTimeout(timer); finish(true); } }, { once: true });
})();

/* =====================================================
   MOTION LAYER — Motion (la versión vanilla de Framer Motion)
   Todo es progresivo: sin la librería o con "reducir movimiento",
   el contenido queda visible y la página funciona igual.
   ===================================================== */
(function () {
    const M = window.Motion || null;
    const ok = !!M && !reduce;
    const { animate, inView, scroll, stagger } = M || {};
    const SPRING = { type: 'spring', stiffness: 260, damping: 20 };
    const SWING = { type: 'spring', stiffness: 150, damping: 9, mass: 1 };
    if (ok) document.body.classList.add('fx');
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const FX = {};

    /* ---------- now-playing dock ---------- */
    FX.dock = on => {
        if (!ok) { dock.style.visibility = on ? 'visible' : 'hidden'; dock.style.transform = on ? 'none' : 'translateY(160%)'; return; }
        dock.style.visibility = 'visible';
        animate(dock, on ? { y: ['160%', '0%'], scale: [.8, 1] } : { y: ['0%', '160%'], scale: [1, .9] }, on ? { type: 'spring', stiffness: 320, damping: 22 } : { duration: .28, ease: [.5, 0, .75, 0] })
            .then(() => { if (!document.body.classList.contains('has-dock')) dock.style.visibility = 'hidden'; });
    };

    /* ---------- banana burst when you feed a critter ---------- */
    FX.bananas = (c, e) => {
        if (!ok || document.querySelectorAll('.nana').length > 24) return;
        const r = c.getBoundingClientRect();
        const x0 = (e && e.clientX) ? e.clientX : r.left + r.width / 2, y0 = (e && e.clientY) ? e.clientY : r.top + r.height / 3;
        for (let i = 0; i < 4; i++) {
            const n = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            n.setAttribute('class', 'nana'); n.setAttribute('viewBox', '0 0 32 32'); n.setAttribute('aria-hidden', 'true');
            n.innerHTML = '<use href="#banana"/>'; n.style.left = (x0 - 13) + 'px'; n.style.top = (y0 - 13) + 'px';
            document.body.append(n);
            const dx = (i - 1.5) * 38 + (Math.random() - .5) * 24, up = 70 + Math.random() * 60, fall = 120 + Math.random() * 90;
            animate(n, { x: [0, dx * .55, dx], y: [0, -up, fall], rotate: [0, (Math.random() - .5) * 260, (Math.random() - .5) * 520], scale: [.4, 1.15, .9], opacity: [0, 1, 0] },
                { duration: 1 + Math.random() * .25, times: [0, .32, 1], ease: ['easeOut', 'easeIn'] }).then(() => n.remove());
        }
    };

    /* ---------- mobile menu: links tumble in ---------- */
    FX.menu = () => { if (!ok) return; animate($$('#menu a'), { opacity: [0, 1], y: [40, 0], rotate: [-6, 0] }, { ...SPRING, delay: stagger(.05, { startDelay: .12 }) }); };

    /* ---------- course filter: the list re-settles ---------- */
    FX.courses = () => {
        if (!ok) return; const vis = $$('#courses li:not([hidden])'); const st = Math.min(.014, .35 / Math.max(1, vis.length));
        animate(vis, { opacity: [0, 1], y: [10, 0] }, { duration: .32, ease: EASE_OUT, delay: stagger(st) });
    };

    window.MotionFX = FX;

    /* ---------- guide liana: scroll progress + a monkey that climbs down ---------- */
    const guide = $('#guide'), gFill = $('#gvFill'), monk = $('#gMonk'), stopsBox = $('#gStops');
    const SECS = [['inicio', 'g.home'], ['experiencia', 'g.xp'], ['proyectos', 'g.proj'], ['stack', 'g.stack'], ['como-trabajo', 'g.ways'], ['formacion', 'g.edu'], ['libros', 'g.books'], ['recuerdos', 'g.mem'], ['contacto', 'g.contact']];
    stopsBox.innerHTML = SECS.map(([id, k]) => `<button class="gstop" type="button" data-to="${id}"><svg aria-hidden="true"><use href="#leafI"/></svg><span class="gl" data-i18n="${k}">${t(k)}</span></button>`).join('');
    const stops = $$('.gstop', stopsBox);
    stops.forEach(b => b.addEventListener('click', () => { const el = document.getElementById(b.dataset.to); if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }));
    monk.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
    let stopPos = [], H = 0, lastP = 0, lastT = performance.now(), idleT = 0, monkY = 0;
    function layoutGuide() {
        H = guide.clientHeight; const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        stopPos = SECS.map(([id]) => { const el = document.getElementById(id); return el ? clamp((el.offsetTop - 80) / max, 0, 1) : 0; });
        stops.forEach((b, i) => b.style.top = (stopPos[i] * H) + 'px');

        stops.forEach((b, i) => { const el = document.getElementById(SECS[i][0]); b.hidden = !!el && !!el.closest('[hidden]'); });
    }
    function onProgress(p) {
        gFill.style.strokeDashoffset = (1 - p).toFixed(4);
        stops.forEach((b, i) => b.classList.toggle('past', p >= stopPos[i] - .002));
        guide.classList.toggle('on', scrollY > innerHeight * .55);
        const y = p * H - 4, now = performance.now(), v = (p - lastP) / Math.max(16, now - lastT) * 1000; lastP = p; lastT = now;
        if (ok) {
            animate(monk, { y }, { type: 'spring', stiffness: 180, damping: 18 });
            animate(monk, { rotate: clamp(-v * 55, -28, 28) }, { type: 'spring', stiffness: 120, damping: 6 });
            clearTimeout(monkY); monkY = setTimeout(() => animate(monk, { rotate: 0 }, { type: 'spring', stiffness: 90, damping: 5 }), 90);
        } else monk.style.transform = `translateY(${y}px)`;
        guide.classList.add('moving'); clearTimeout(idleT); idleT = setTimeout(() => guide.classList.remove('moving'), 900);
    }
    layoutGuide(); addEventListener('resize', () => { layoutGuide(); onProgress(lastP); });
    addEventListener('load', layoutGuide);
    if (M && scroll) scroll(p => onProgress(p));
    else addEventListener('scroll', () => onProgress(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)), { passive: true });
    onProgress(0);

    /* ---------- experience trail fills as you read; pins pop when reached ---------- */
    const trail = $('.trail'), tv = $('#tvFill'), jobs = $$('.job');
    function trailP(p) {
        tv.style.strokeDashoffset = (1 - p).toFixed(4); const th = trail.offsetHeight || 1;
        jobs.forEach(j => j.classList.toggle('reached', p * th >= j.offsetTop - 10));
    }
    if (M && scroll) scroll(trailP, { target: trail, offset: ['start 75%', 'end 55%'] }); else { tv.style.strokeDashoffset = '0'; jobs.forEach(j => j.classList.add('reached')); }

    /* ---------- nav: one coral liana that slides between links ---------- */
    const ind = $('#navInd'), wrapN = $('.nav .wrap'), links = $$('.nav a.nl');
    function moveInd(a, instant) {
        if (!a || !a.offsetParent) { ind.style.opacity = '0'; return; }
        const wr = wrapN.getBoundingClientRect(), r = a.getBoundingClientRect();
        const to = { x: r.left - wr.left, scaleX: r.width / 100, opacity: 1 };
        if (ok && !instant) animate(ind, to, { type: 'spring', stiffness: 420, damping: 32 });
        else ind.style.cssText = `opacity:1;transform:translateX(${to.x}px) scaleX(${to.scaleX})`;
    }
    const cur = () => links.find(a => a.getAttribute('aria-current') === 'true');
    let first = true;
    new MutationObserver(() => { const c = cur(); if (c) { moveInd(c, first); first = false; } else if (ok) animate(ind, { opacity: 0 }, { duration: .2 }); else ind.style.opacity = '0'; })
        .observe($('.nav'), { subtree: true, attributes: true, attributeFilter: ['aria-current'] });
    links.forEach(a => { a.addEventListener('pointerenter', () => moveInd(a)); a.addEventListener('focus', () => moveInd(a)); });
    $$('.nav-l,.nav-r').forEach(n => n.addEventListener('pointerleave', () => { const c = cur(); c ? moveInd(c) : (ok ? animate(ind, { opacity: 0 }, { duration: .2 }) : ind.style.opacity = '0'); }));
    addEventListener('resize', () => moveInd(cur(), true));

    if (!ok) return; /* everything below is pure choreography */

    /* ---------- focal moment: the name drops from the canopy ---------- */
    const h1 = $('.title');
    h1.setAttribute('aria-label', 'Félix Pajón'); h1.dataset.split = '';
    $$('span', h1).forEach(sp => { if (sp.closest('.sparks')) return; const txt = sp.textContent; sp.setAttribute('aria-hidden', 'true'); sp.innerHTML = [...txt].map(ch => `<span class="ch">${ch}</span>`).join(''); });
    const chars = $$('.title .ch');
    chars.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(-140%) rotate(-20deg)'; });
    const roleEls = [$('.hero .role'), $('.hero .lede'), $('.hero .disc'), $('.hero .actions'), $('.hero .hint')];
    roleEls.forEach(el => { el.style.opacity = '0'; });
    function dropName() {
        chars.forEach((c, i) => animate(c, { opacity: [0, 1], y: ['-140%', '0%'], rotate: [(i % 2 ? 1 : -1) * (14 + Math.random() * 16), 0] }, { type: 'spring', stiffness: 210, damping: 11, mass: .9, delay: .08 + i * .055 }));
        animate(roleEls, { opacity: [0, 1], y: [18, 0], filter: ['blur(6px)', 'blur(0px)'] }, { duration: .7, ease: EASE_OUT, delay: stagger(.09, { startDelay: .55 }) });
    }
    if (window.__introDone) dropName(); else addEventListener('introdone', () => setTimeout(dropName, 260), { once: true });
    setTimeout(() => { if (chars[0].style.opacity === '0') dropName(); }, 5200); /* safety net */

    const go = () => { }; /* content always rests visible; motion plays from that visible state */

    /* ---------- section signs swing on their vine once ---------- */
    $$('section.s .s-head h2').forEach(h => {
        h.style.transformOrigin = '0% 0%';
        inView(h, () => { animate(h, { rotate: [0, -7, 3.5, -1.4, .5, 0], y: [0, -10, 0, 0, 0, 0] }, { duration: 1.6, ease: 'easeInOut' }); }, { amount: .6 });
    });

    /* ---------- stack: tools slide down their liana ---------- */
    inView('#lianas', () => {
        go('#lianas');
        $$('#lianas .liana').forEach((g, gi) => {
            const lis = $$('li', g); lis.forEach(li => li.style.transition = 'none');
            animate(lis, { rotate: [0, -11, 5, -2, 0] }, { duration: .9, ease: 'easeInOut', delay: stagger(.045, { startDelay: gi * .08 }) })
                .then(() => lis.forEach(li => { li.style.transition = ''; li.style.transform = ''; }));
        });
    }, { amount: .15 });

    /* ---------- medals swing in like they were just hung ---------- */
    inView('#medals', () => {
        go('#medals'); const m = $$('#medals svg'); animate(m, { rotate: [0, -28, 16, -7, 0] }, { duration: 1.1, ease: 'easeInOut', delay: stagger(.07) })
            .then(() => m.forEach(x => { x.style.transform = ''; }));
    }, { amount: .4 });

    /* ---------- cómo trabajo: las hojas se mecen una vez, como las medallas ---------- */
    inView('#ways', () => {
        const lv = $$('#ways .way svg'); lv.forEach(x => { x.style.transformOrigin = '30% 90%'; });
        animate(lv, { rotate: [0, -22, 11, -4, 0] }, { duration: 1, ease: 'easeInOut', delay: stagger(.07) })
            .then(() => lv.forEach(x => { x.style.transform = ''; }));
    }, { amount: .4 });

    /* ---------- project cards: tilt toward the pointer ---------- */
    function tilt(card) {
        card.style.transition = 'border-color .3s, box-shadow .3s';
        card.addEventListener('pointermove', e => {
            if (e.pointerType !== 'mouse') return; const r = card.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
            card.style.setProperty('--gx', px * 100 + '%'); card.style.setProperty('--gy', py * 100 + '%');
            animate(card, { rotateY: (px - .5) * 12, rotateX: (.5 - py) * 10, y: -6 }, { type: 'spring', stiffness: 300, damping: 24 });
        });
        card.addEventListener('pointerleave', () => animate(card, { rotateY: 0, rotateX: 0, y: 0 }, { type: 'spring', stiffness: 200, damping: 14 }));
    }
    const projBox = $('#projects');
    const bindCards = () => $$('.pcard', projBox).forEach(c => { if (!c.dataset.tilt) { c.dataset.tilt = '1'; tilt(c); } });
    bindCards(); new MutationObserver(bindCards).observe(projBox, { childList: true });
    inView('#projects', () => { go('#projects'); animate($$('.pcard', projBox), { rotateX: [0, 10, 0], y: [0, -8, 0] }, { duration: .8, ease: EASE_OUT, delay: stagger(.08) }); }, { amount: .25 });

    /* ---------- magnetic primary actions ---------- */
    function magnet(el, pull = .28) {
        el.style.transition = 'box-shadow .3s, background .3s';
        el.addEventListener('pointermove', e => {
            if (e.pointerType !== 'mouse') return; const r = el.getBoundingClientRect();
            animate(el, { x: (e.clientX - r.left - r.width / 2) * pull, y: (e.clientY - r.top - r.height / 2) * pull - 3, rotate: -1.5 }, { type: 'spring', stiffness: 350, damping: 18 });
        });
        el.addEventListener('pointerleave', () => animate(el, { x: 0, y: 0, rotate: 0 }, { type: 'spring', stiffness: 220, damping: 10 }));
    }
    magnet($('.hero .actions .btn:not(.ghost)')); magnet($('#contactForm .btn'), .2);

    /* ---------- polaroids drop onto the clothesline ---------- */
    inView('#mem', () => {
        go('#mem'); const pl = $$('#mem .pola'); pl.forEach(p => p.style.animationPlayState = 'paused');
        animate(pl, { rotate: [0, -6, 3, -1, 0], y: [0, -6, 0, 0, 0] }, { duration: 1.3, ease: 'easeInOut', delay: stagger(.06) })
            .then(() => pl.forEach(p => { p.style.transform = ''; p.style.animationPlayState = ''; }));
    }, { amount: .2 });
})();
