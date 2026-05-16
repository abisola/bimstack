# GOV.UK Design Principles

The ten design principles that underpin everything the UK Government Digital Service does. Published at <https://www.gov.uk/guidance/government-design-principles>. bimstack adopts them wholesale, alongside the Barbados Digital Service Standards.

These are the *how* (philosophy and method) to the Barbados Standards' *what* (the assessment criteria).

1. **Start with user needs**
2. **Do less**
3. **Design with data**
4. **Do the hard work to make it simple**
5. **Iterate. Then iterate again**
6. **This is for everyone**
7. **Understand context**
8. **Build digital services, not websites**
9. **Be consistent, not uniform**
10. **Make things open: it makes things better**

---

## 1. Start with user needs

Service design starts with identifying user needs. If you don't know what the user needs are, you won't build the right thing. Do research, analyse data, talk to users. Don't make assumptions. Have empathy for users, and remember that what they ask for isn't always what they need.

**In a bimstack sprint:** every agent asks "what user need does this serve?" before doing anything else. If it can't be named, the work pauses.

## 2. Do less

Government should only do what only government can do. If we've found a way of doing something that works, we should make it reusable and shareable instead of reinventing the wheel every time. This means building platforms and registers others can build upon, providing better linking to information, and only building new things when there is a clear user need.

**In a bimstack sprint:** before any new build, the developer agent checks whether GovTech or another MDA has already built it, or whether a common component covers it.

## 3. Design with data

In most cases, we can learn from real-world behaviour by looking at how existing services are used. Let data drive decision-making, not hunches or guesswork. Keep doing that after taking something live, prototyping and iterating based on feedback. Analytics should be built in, always on, and easy to read.

**In a bimstack sprint:** the delivery manager agent makes sure analytics are wired up before launch, and reviews them in every show-and-tell.

## 4. Do the hard work to make it simple

Making something look simple is easy; making something simple to use is hard – especially when the underlying systems are complex – but that's what we should be doing. Don't take "It's just the way it works" as an answer.

**In a bimstack sprint:** the content & interaction designer agent rewrites every sentence until a 9-year-old can read it. The service designer agent unpicks back-office complexity instead of pushing it onto the citizen.

## 5. Iterate. Then iterate again

The best way to build effective services is to start small and iterate wildly. Release minimum viable products early, test them with actual users, move from alpha to beta to live adding features, deleting things that don't work and making refinements based on feedback. Iteration reduces risk. It makes big failures unlikely and turns small failures into lessons.

**In a bimstack sprint:** the delivery manager agent holds the team to small releases and refuses big-bang launches. Every sprint produces something a real user can interact with.

## 6. This is for everyone

Accessible design is good design. Everything we build should be as inclusive, legible and readable as possible. If we have to sacrifice elegance – so be it. We're building for needs, not audiences. We're designing for the whole of Barbados, not just the people who are used to using the web.

**In a bimstack sprint:** the content & interaction designer agent runs the accessibility-review skill on every prototype. The cyber engineer agent makes sure security controls don't lock disabled users out.

## 7. Understand context

We're not designing for a screen, we're designing for people. We need to think hard about the context in which they're using our services. Are they in a library? Are they on a phone? Are they only really familiar with Facebook? Have they never used the web before?

**In a bimstack sprint:** the service designer agent insists on real-world research – on the bus, in the parish office, with a citizen's actual phone, on actual mobile data.

## 8. Build digital services, not websites

A service is something that helps people to do something. Our job is to uncover user needs and build the service that meets those needs. Of course much of that will be pages on the web, but we're not here to build websites. The digital service must join up with offline channels into one seamless experience.

**In a bimstack sprint:** the service designer agent maps the whole service – on and offline, frontstage and backstage – before any page is designed.

## 9. Be consistent, not uniform

We will use the same language and the same design patterns wherever possible. This helps people get familiar with our services. But if this isn't possible we should make sure our approach is consistent. This isn't a straitjacket or a rulebook. Every circumstance is different. When we find patterns that work we should share them and talk about why we use them.

**In a bimstack sprint:** every agent uses the Barbados Design System components and the GovTech Barbados house style. Departures are documented and contributed back.

## 10. Make things open: it makes things better

We should share what we're doing whenever we can. With colleagues, with users, with the world. Share code, share designs, share ideas, share intentions, share failures. The more eyes there are on a service the better it gets – errors are spotted, better alternatives are pointed out, the bar is raised.

**In a bimstack sprint:** every agent defaults to writing in the open. Weeknotes are public. Source code goes to GitHub. Decisions are documented for the next team.

---

## How bimstack uses these principles

The Barbados Service Standards tell you *what* to assess against. The GOV.UK Design Principles tell you *how* to think about the work.

| Barbados standard | GOV.UK principles it draws on |
|---|---|
| 1 Meet user needs | 1 Start with user needs, 3 Design with data, 7 Understand context |
| 2 Multidisciplinary team | (Way of working – see GDS Way) |
| 3 Everyone can use it | 6 This is for everyone, 7 Understand context |
| 4 Simple, relatable language | 4 Do the hard work to make it simple, 6 This is for everyone |
| 5 Works first time | 4 Do the hard work to make it simple, 5 Iterate, 7 Understand context |
| 6 Right tools and technology | 2 Do less, 9 Be consistent |
| 7 Open, common, interoperable | 2 Do less, 9 Be consistent, 10 Make things open |
| 8 Scalable and sustainable | 8 Build services not websites, 5 Iterate |
| 9 Open and transparent | 10 Make things open |
| 10 Continuously improved | 5 Iterate, 3 Design with data |
| 11 Trust, safety, confidentiality | 6 This is for everyone, 8 Build services not websites |
| 12 Easy to find | 1 Start with user needs, 7 Understand context, 8 Build services not websites |
| 13 Monitor and measure | 3 Design with data, 10 Make things open |

When an agent cites a principle in a critique, it should reference both: *"This breaks Standard 4 (simple language) and Principle 4 (do the hard work to make it simple)."*
