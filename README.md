# Oggy

Oggy generates beautiful open graph images for your blog or website.

It's a microservice, built using [`micro`](https://github.com/zeit/micro) and hosted on [`now`](https://github.com/zeit/now)

⚠️ - This is still in development, and doesn't really work properly

## How to use

Oggy takes three parameters: `title`, `author`, and `logo`.

| Param | Description |
| ----- | ----------- |
| `title` | The main content title |
| `author` | The author(s) for the content  |
| `footerFill` | A color used for the footer fill color  |
| `logo` | A url to an image to be displayed in the footer (png, jpeg, or gif)  |

## To-do
- Custom fonts not working, kinda breaks the whole thing - think it's something to do with node-canvas
- Caching?