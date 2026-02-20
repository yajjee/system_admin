# CVALTIS System Setup & Admin

## Build (Sass + Grunt)

Styles are written in **Sass** (SCSS) and compiled with **Grunt**.

### Setup

```bash
npm install
```

### Commands

| Command | Description |
|---------|-------------|
| `npm run build` or `grunt` | Compile SCSS → CSS (outputs `system-setup.css` and `system-admin.css`) |
| `npm run watch` or `grunt watch` | Watch `scss/**/*.scss` and recompile on change |

### Structure

- **scss/system-setup.scss** → `system-setup.css` (setup wizard styles)
- **scss/system-admin.scss** → `system-admin.css` (admin dashboard; imports setup CSS at runtime)

Edit the `.scss` files, then run `grunt` (or `grunt watch`) to update the `.css` files. The HTML already links to the compiled CSS files.
