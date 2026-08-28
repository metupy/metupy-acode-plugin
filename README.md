<p align="center">
  <img src="./icon.png" alt="Metupy Logo" width="128" height="128">
</p>

<h1 align="center">Metupy IntelliSense</h1>

<p align="center">
  <strong>Official IntelliSense & Syntax Highlighting for Metupy (.pym) file format</strong><br>
  <em>Project by PalembangPy Community</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Acode-Plugin-blue?style=for-the-badge" alt="Acode Plugin">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License">
</p>

---

## Description

Metupy IntelliSense is an Acode plugin that provides full syntax highlighting, code snippets, and language support for .pym files — the native content format of Metupy Static Site Generator.

## Features

- Syntax Highlighting for .pym file format
- Frontmatter key-value highlighting
- Template variables `{{ }}` and logic tags `{% %}`
- Comment support `{# #}`
- Embedded Markdown and Python syntax
- Auto-closing pairs and smart indentation
- Custom file icon for `.pym` files
- 7 useful code snippets

## Installation

1. Open **Acode Editor**
2. Go to Settings → Plugins
3. Search for "Metupy IntelliSense"
4. Click Install
5. Restart Acode

## File Association

Files with `.pym` extension will automatically use this plugin's syntax highlighting.

## Quick Start

### Create a New File

Create a file named `index.pym`:

```markdown
title: Welcome to Metupy
author: Your Name
date: 2026-08-28
---

# Welcome to Metupy

This is my first Metupy site!
```

## File Format

`.pym` file uses simple structure:

```markdown
key: value
another_key: another value
---

Your content here with {{ variables }} and {% logic %}
```

## Syntax Reference

- **Variables**: `{{ variable_name }}`
- **Logic**: `{% for item in list %} ... {% endfor %}`
- **Condition**: `{% if condition %} ... {% endif %}`
- **Comment**: `{# This is a comment #}`
- **Frontmatter**: `key: value` above `---` separator

## Code Snippets

Start typing any of these prefixes and press Tab to insert:

| Prefix | Description |
|--------|-------------|
| `pym-frontmatter` | Basic frontmatter template |
| `pym-var` | Template variable |
| `pym-if` | If condition block |
| `pym-for` | For loop block |
| `pym-block` | Template block |
| `pym-macro` | Template macro |
| `pym-comment` | Metupy comment |

## Settings

Customize the plugin in Acode Settings:

- **Enable Auto-indentation**: Toggle automatic indentation (default: OFF)
- **Auto-close Tags**: Automatically close Metupy tags (default: ON)

## About Metupy

Metupy is a fast, modern static site generator built with Python. It supports .pym, .md, .rst, and .py file formats. No Node.js required.

- [Metupy Official](https://github.com/metupy)
- [PalembangPy Community](https://github.com/palembangpy)
- [VSCode Extension](https://github.com/metupy/metupy-extention)

## License

MIT License — PalembangPy Community
