# NERV Encyclopedia

Enciclopedia de Neon Genesis Evangelion (serie + End of Evangelion), construida con [Astro](https://astro.build) y desplegada en GitHub Pages.

## Estructura del proyecto

```
src/
├── content.config.ts        # esquemas Zod de las 5 colecciones de contenido
├── content/
│   ├── characters/          # fichas de personajes (.md)
│   ├── episodes/             # 26 episodios + End of Evangelion (.md)
│   ├── mechas/               # Unidades Evangelion (.md)
│   ├── angels/                # Ángeles (.md)
│   └── organizations/         # organizaciones y conceptos (.md)
├── layouts/                  # BaseLayout (shell HTML) y EntityLayout (ficha de detalle)
├── components/               # Navbar, Card, Badge, StatBlock, SearchBox, etc.
├── pages/                     # rutas: index + [colección]/index.astro + [colección]/[slug].astro
├── styles/                    # tokens.css (paleta/tipografía) y global.css
└── utils/url.ts               # helper withBase() para el base path de GitHub Pages
```

## Desarrollo

```sh
npm install
npm run dev
npm run build
```

## Búsqueda

El sitio usa [Pagefind](https://pagefind.app) para búsqueda full-text estática. El índice se genera en CI después del build (`npx pagefind --site dist`); en local, para probar la búsqueda hay que correr `npm run build && npx pagefind --site dist && npx astro preview`.

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml`, que hace build del sitio y lo publica en GitHub Pages.

## Aviso de contenido

Este proyecto usa imágenes reales de la obra (capturas, artes promocionales) con fines de referencia personal. Los derechos de dicho material pertenecen a Khara/Gainax. **Este repositorio debe mantenerse privado** para evitar problemas de distribución de material con copyright — GitHub Pages con repos privados requiere un plan GitHub Pro o superior a nivel de cuenta.
