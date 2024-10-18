# OpenLCH 


## Local Development

First, run `pnpm i` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.]


## Important!

To add components, use:

```
import { Callout } from 'nextra-theme-docs'
```

to import from nextra-theme-docs instead of documentation.


Note that there are Vercel deployment issues with caching. 

Please add ```VERCEL_DEEP_CLONE=true``` to Vercel environment variables. 

https://github.com/orgs/vercel/discussions/2079



## License

This project is licensed under the MIT License.
