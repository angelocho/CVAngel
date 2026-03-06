# 🌟 Portfolio Profesional - Ángel Bocalandro Ruiz

![DevOps Engineer](https://img.shields.io/badge/DevOps%20Engineer-AWS%20%7C%20Kubernetes%20%7C%20Terraform-blue)
![Hugo](https://img.shields.io/badge/Built%20with-Hugo-FF4088)
![Theme](https://img.shields.io/badge/Theme-LoveIt-blueviolet)

## 📋 Descripción

Este es mi portfolio profesional personal construido con **Hugo** y el tema **LoveIt**. Contiene información completa sobre mi trayectoria como **DevOps Engineer**, experiencia profesional, habilidades técnicas, formación académica y certificaciones.

**Sitio en vivo**: https://cloudcvangel.netlify.app/

---

## 🚀 Estructura del Sitio

```
content/
├── _index.md              # Página de inicio - Resumen general
├── experiencia/           # Trayectoria laboral detallada
├── habilidades/           # Stack técnico y competencias
├── formacion/             # Educación académica y certificaciones
└── sobre-mi/              # Información personal y profesional
```

### Secciones Principales

1. **Inicio** - Resumen profesional, contacto e información general
2. **Experiencia** - Detalle de trabajos, responsabilidades y logros
3. **Habilidades Técnicas** - Stack completo (AWS, Kubernetes, Terraform, etc.)
4. **Formación** - Estudios reglados, certificaciones y formación continua
5. **Sobre Mí** - Perfil personal, motivaciones e intereses

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Hugo** (v0.157.0) - Generador de sitios estáticos
- **LoveIt Theme** - Tema profesional y responsivo
- **Markdown** - Contenido en formato Markdown

### Deployment
- **Netlify** - Hosting y CI/CD
- **GitHub** - Control de versiones

### Especificaciones del Sitio
- ✅ Responsive Design
- ✅ SEO Optimizado
- ✅ Performance Optimizado
- ✅ Soporte Multiidioma

---

## 📦 Instalación y Uso Local

### Requisitos Previos
- Git
- Hugo v0.157.0 o superior

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/angelocho/CVAngel.git
cd CVAngel
```

2. **Actualizar submódulos** (para el tema)
```bash
git submodule update --init --recursive
```

3. **Ejecutar Hugo localmente**
```bash
hugo server
```

4. **Abrir en navegador**
```
http://localhost:1313
```

---

## 🔧 Configuración

### Archivo Principal: `hugo.toml`

```toml
baseURL = 'https://angelocho.netlify.app/'
languageCode = 'es'
title = 'Ángel Bocalandro | DevOps Engineer'
theme = 'loveit'

[params]
  description = "DevOps Engineer con experiencia en Cloud, Kubernetes y Automatización"
  author = "Ángel Bocalandro Ruiz"
  
  [params.social]
    email = "angelocho64@gmail.com"
    github = "angelocho"
    linkedin = "angel-bocalandro"
```

### Variables de Configuración

| Variable | Valor |
|----------|-------|
| `baseURL` | URL del sitio publicado |
| `languageCode` | Idioma (es = Español) |
| `title` | Título del sitio |
| `theme` | Tema Hugo (loveit) |

---

## 📝 Crear Nuevo Contenido

### Crear una Nueva Página

```bash
hugo new posts/mi-nuevo-articulo.md
```

### Estructura de Frontmatter

```markdown
---
title: "Título de la Página"
description: "Descripción breve para SEO"
date: 2026-03-04
params:
  author: "Ángel Bocalandro Ruiz"
---

# Contenido aquí

```

---

## 📊 Secciones de Contenido

### Experiencia Profesional
- DevOps Engineer en Banco Santander (Actual)
- DevOps Engineer Junior en UST Global
- DevOps Engineer Junior en Luca Tic
- Soporte técnico en Ibermática
- Técnico de sistemas en EQUALIA
- Prácticas en Vortex Dimensión Digital

### Habilidades Técnicas
- **Cloud**: AWS, Azure
- **Orquestación**: Kubernetes, Docker
- **IaC**: Terraform, CloudFormation
- **CI/CD**: Jenkins, GitHub Actions, GitLab
- **Monitorización**: CloudWatch, Dynatrace, Prometheus, Grafana
- **Bases de Datos**: PostgreSQL, MySQL
- **Seguridad**: IAM, VPNs, Encriptación, RGPD/LOPD

### Certificaciones
- AWS Certified Cloud Practitioner ✅
- Cisco CCNA ✅
- Cisco IT Essentials ✅
- HashiCorp Terraform Associate ✅
- Azure AZ-104 📚
- Azure AZ-900 📚

---

## 🚀 Despliegue en Netlify

### Configuración Automática

El archivo `netlify.toml` está configurado para:
- Compilar automáticamente con Hugo
- Publicar desde la carpeta `public/`
- Usar Hugo v0.157.0

### Pasos de Despliegue

1. **Conectar repositorio a Netlify**
   - Ir a [netlify.com](https://netlify.com)
   - Conectar con GitHub
   - Seleccionar este repositorio

2. **Configuración Automática**
   - Netlify detectará `netlify.toml`
   - Build command: `hugo --gc --minify`
   - Publish directory: `public`

3. **Deploy**
   - Cada push a `main` dispara un build automático
   - El sitio se publica en segundos

---

## 📱 Responsive Design

El tema LoveIt proporciona:
- ✅ Diseño adaptativo (Mobile, Tablet, Desktop)
- ✅ Navegación optimizada para móviles
- ✅ Tipografía legible
- ✅ Carga rápida de imágenes

---

## 🔍 SEO

### Optimizaciones Implementadas
- ✅ Meta descriptions en cada página
- ✅ Open Graph (OG) tags para redes sociales
- ✅ Sitemap automático (sitemap.xml)
- ✅ Robots.txt configurado
- ✅ URLs amigables y estructura clara

---

## 📚 Documentación del Tema

Para más información sobre el tema LoveIt:
- [Repositorio LoveIt](https://github.com/dillonzq/LoveIt)
- [Documentación](https://hugoloveit.com/)

---

## 📞 Contacto

- 📧 **Email**: angelocho64@gmail.com
-  **GitHub**: [@angelocho](https://github.com/angelocho)
- 💼 **LinkedIn**: [angel-bocalandro](https://linkedin.com/in/angel-bocalandro)

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 🎯 Roadmap Futuro

- [ ] Añadir sección de proyectos destacados
- [ ] Implementar blog técnico
- [ ] Agregar testimonios de colegas
- [ ] Integrar formulario de contacto dinámico
- [ ] Añadir darkmode personalizado
- [ ] Optimizar imágenes y recursos
- [ ] Implementar i18n (Inglés/Español)

---

## 🤝 Contribuciones

Este es un portfolio personal, pero sugerencias y mejoras son bienvenidas. Siéntete libre de:
- Reportar errores
- Sugerir mejoras
- Proponer nuevas secciones

---

## ✨ Créditos

- **Theme**: [LoveIt](https://github.com/dillonzq/LoveIt) by Dillon
- **Generator**: [Hugo](https://gohugo.io/)
- **Hosting**: [Netlify](https://netlify.com)

---

**Última actualización**: Marzo 4, 2026

