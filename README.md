# Pixfi.io Site

## Set-up
Once the project is cloned, run it with the command below:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```



## Styling Conventions
When styling elements please follow the convention below: <br />
**SIZE - DISPLAY + POSITION- MISC - Position of Child Element(s) - MEDIA QUERIES**

- Size -> height, width...
- Display + Position -> display, alignment, margin, padding...
- Misc -> color, font weight...
- Position of Child Element(s) -> justify-content, align-items, space-y-0, space-x-0....
- Media Queries -> any styling that involves sm, md, lg, xl, 2xl...

This is the convention currently utilized by the project, and should be adhered to if possible.



## Deployment
The site is automatically deployed upon merges to any branches through Vercel. <br />
Merges to master will deploy the site to pixfi.io.

You can preview the production build with `npm run preview` or build locally with `npm run build`.