## Hi Craig & Team!

Thanks so much for you consideration for this role. I wanted to share a few details and give context for the architecture of this app.

* client: TS/React/TailwindCSS using v16+ hooks patterns
  * this was my first time using tailwind after hearing a lot of good thigns about it and its really nice for quickly creating reusable styled components, especially with utility & layout classes
  * testing with cypress which collects coverage! (new since the last time I used it)

* server: TS/Node/Prisma
  * this is the first time I've used Prisma and I really like it, though the v2 releaes doesn't support some of the earlier version's functionality yet which made for some surprises.
  * testing with mocha/chai

* database: aws RDS managed postgresql instance

* hosting: the app is deployed to an EC2 instance at 52.13.29.211:3000 (client) 52.13.29.211:4000 (server) and hosted behind and aws application loadbalancer at either http://interview.nicecmpny.com or http://techstars-1173038303.us-west-2.elb.amazonaws.com


A couple of notes:
* There's still some needed refactoring but I wanted to get the app in good place with test coverage and meet the mvp first.
* Lots of lessons learned with this project taking on a couple new technologies in the app as well as deployment
* I feel I have a fair command of react hooks patterns but am still learning in this realm
* The testing pattern is brittle because of a limitation I ran into with Prisma not being able to easily switch their client to use a diffrent db based on env. It seems to be something they're actively working on but it's worth noting that the version I used isn't recommended for production yet.
* always more to do given more time! (stretch goal was to deploy with docker) I'll look forward to talking with ya'll :)


## Client specific scripts
In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm run e2e`

Launches cypress e2e suite

#### `npm run coverage`

Prints most recent coverage report (must run e2e first!)
