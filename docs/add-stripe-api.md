Documentation [https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe]

__How to guide__

Create a stripe account Link: [https://stripe.com]
Go to the developers section
[https://stripe.com/docs/development/quickstart]
Go to API keys on left nav
Get your publishable key
Copy it
Create a `.env.local` file in your root directory
Go to `.gitignore` check this is added to your ignore files
In the dotenv file create a template literal (should be prefixed with Next)
NEXT_STRIPE_API_PUBLIC_KEY - add the public key as an empty string
`NEXT_STRIPE_API_PUBLIC_KEY=" "` push code to GitHub and check this has not been pushed to your repo.

In stripe go to the products section top nav and create dummy products and prices.

In your project install stripe for react
[https://www.npmjs.com/package/@stripe/stripe-js]


`npm install stripe`
`npm install stripe-checkout`