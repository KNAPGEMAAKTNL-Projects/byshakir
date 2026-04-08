// src/data/locations.ts
// Service area cities for By Shakir werkgebied pages
// 19 cities: 15 NL + 4 international
// Each city has genuine unique content — not city-name swaps

export interface LocationData {
  city: string;
  slug: string;
  province: string;
  postalCodeRange: string;
  coordinates: { lat: number; lng: number };
  population?: string;
  localDetail: string; // 1-2 unique sentences per city
  neighborhoods?: string[];
  responseTime?: string;
  distanceFromBase?: string;
  relatedProject?: { slug: string; title: string; location: string };
  faqs: Array<{ question: string; answer: string }>;
  relatedSlugs: string[]; // 3 related city slugs for section 7
}

export const locations: LocationData[] = [
  {
    city: 'Amsterdam',
    slug: 'amsterdam',
    province: 'Noord-Holland',
    postalCodeRange: '1000–1109',
    coordinates: { lat: 52.3676, lng: 4.9041 },
    population: '905,000',
    localDetail:
      'Amsterdam canal houses have narrow staircases, awkward proportions, and basement vaults in the older belts that become the most character-rich room in the home. By Shakir has designed for clients in the Jordaan and Oud-West where the architecture demands a designer who works with those constraints rather than fighting them.',
    neighborhoods: ['Jordaan', 'Oud-West', 'De Pijp', 'Oud-Zuid', 'Museumplein', 'Watergraafsmeer'],
    responseTime: 'Within 24 hours — showroom visits by appointment in Tiel',
    distanceFromBase: '95 km from studio',
    relatedProject: {
      slug: 'villa-mansion-netherlands',
      title: 'Villa Mansion',
      location: 'Netherlands',
    },
    faqs: [
      {
        question: 'How do you approach interior design in Amsterdam canal houses?',
        answer:
          'Canal houses present specific challenges: steep staircases, irregular room shapes, low ceilings on upper floors, and, in the oldest rings, floors that are genuinely not level. We design around the architecture rather than trying to impose a standard layout. The 3D visualisation stage is especially valuable here: you see exactly how every element fits before anything is ordered.',
      },
      {
        question: 'Can By Shakir work with listed buildings in the UNESCO canal ring?',
        answer:
          'Yes, with the right permits in place. Listed facades and protected interiors in the canal ring have specific rules about structural changes, but the scope of what is possible within those rules is often broader than clients expect. We work alongside your architect or your local permit consultant. By Shakir handles the interior design; permit administration requires a locally registered professional.',
      },
      {
        question: 'My Amsterdam apartment is empty. Can you design it as a rental investment as well as for my own use?',
        answer:
          'These are genuinely different briefs. A rental investment calls for durability, neutral appeal, and materials that clean easily; a personal home calls for your specific tastes and lifestyle. We do both, but we design one brief at a time. Tell us which it is at the first consultation and we will work from there.',
      },
      {
        question: 'Do you visit Amsterdam for site consultations or is this handled remotely?',
        answer:
          'Initial consultations happen either at the Tiel showroom or on-site, depending on what is most useful. For an existing furnished property, a site visit often reveals things photos miss. For a new build or stripped shell, the showroom conversation is usually more productive. We will recommend the right approach once you tell us about your project.',
      },
    ],
    relatedSlugs: ['rotterdam', 'den-haag', 'utrecht'],
  },

  {
    city: 'Rotterdam',
    slug: 'rotterdam',
    province: 'Zuid-Holland',
    postalCodeRange: '3000–3099',
    coordinates: { lat: 51.9225, lng: 4.4792 },
    population: '661,000',
    localDetail:
      'Rotterdam was rebuilt after 1940 in ways Amsterdam never was, and the architecture shows it: Wilhelminapier loft conversions, the Kralingen townhouses, raw concrete warehouse apartments near Katendrecht. By Shakir designs interiors that work with the boldness of Rotterdam structure rather than softening it into something generic.',
    neighborhoods: ['Kralingen', 'Hillegersberg', 'Katendrecht', 'Kop van Zuid', 'Nesselande'],
    responseTime: 'Within 24 hours — showroom visits by appointment in Tiel',
    distanceFromBase: '90 km from studio',
    relatedProject: {
      slug: 'villa-mansion-netherlands',
      title: 'Villa Mansion',
      location: 'Netherlands',
    },
    faqs: [
      {
        question: 'Do you design interiors for Rotterdam loft conversions and warehouse apartments?',
        answer:
          'Regularly. High ceilings, exposed concrete, large windows — these are features worth celebrating, not concealing. The key is warmth: warm materials (stone, linen, timber) against the raw structure. Our material palette was built for this contrast. We do not default to cold-industrial just because the shell is industrial.',
      },
      {
        question: 'How does By Shakir handle projects in newly built Rotterdam tower apartments?',
        answer:
          'New builds need more personalisation, not less. Developer finishes tend toward the generic. We typically start from the handover state (neutral walls, standard floor, standard lighting) and replace or layer over what does not work. Budget conversations happen early so you know exactly what a meaningful transformation costs.',
      },
      {
        question: 'Can you collaborate with my Rotterdam-based architect on a renovation?',
        answer:
          'Yes. Architect-led and interior designer-led projects have different dynamics and we are comfortable with both. If the architecture is still in design, we ideally want to be involved early, as some structural choices significantly affect what is possible with the interior. If the build is finished, we work from what exists.',
      },
      {
        question: 'Is Rotterdam reachable from the Tiel studio without long lead times?',
        answer:
          'Rotterdam is 90 km from Tiel, roughly an hour\'s drive. Site visits are scheduled as needed. Initial and concept consultations can happen at the showroom in Tiel; later-stage visits to the Rotterdam property are built into the project timeline.',
      },
    ],
    relatedSlugs: ['den-haag', 'amsterdam', 'breda'],
  },

  {
    city: 'Den Haag',
    slug: 'den-haag',
    province: 'Zuid-Holland',
    postalCodeRange: '2490–2597',
    coordinates: { lat: 52.0705, lng: 4.3007 },
    population: '548,000',
    localDetail:
      'The Hague has a different character from Amsterdam: more formal, more international, with a concentration of high-value residential properties in the Archipel and Benoordenhout neighbourhoods that serve the diplomatic and legal community. Clients here expect discretion, reliability, and interior quality that reflects the city\'s institutional seriousness.',
    neighborhoods: ['Archipel', 'Benoordenhout', 'Bezuidenhout', 'Statenkwartier', 'Duinoord'],
    responseTime: 'Within 24 hours — showroom visits by appointment in Tiel',
    distanceFromBase: '85 km from studio',
    relatedProject: {
      slug: 'villa-mansion-netherlands',
      title: 'Villa Mansion',
      location: 'Netherlands',
    },
    faqs: [
      {
        question: 'Does By Shakir have experience with The Hague\'s stately residential properties near the embassy quarter?',
        answer:
          'Yes. The Archipel and Benoordenhout homes require a studio comfortable with generous room proportions, high ceilings, and the kinds of material quality that match the neighbourhood. We do not design these spaces the same way we design a 70m² city apartment. The scale, the materials, and the pace of the project are all different.',
      },
      {
        question: 'I have an international client profile and need a designer comfortable with that kind of brief. Is By Shakir the right fit?',
        answer:
          'By Shakir has completed projects in Dubai, Barcelona, Antwerp and Malaga, so international briefs, remote client relationships, and cross-border project management are standard for the studio. The 3D visualisation stage is designed specifically for clients who cannot be on-site regularly: you approve every room digitally, in photorealistic detail, before anything is ordered.',
      },
      {
        question: 'Can you work with the facade-protected townhouses in the Bezuidenhout area?',
        answer:
          'Protected facades restrict what you can do externally, but interior scope is typically far broader than the permit gives the impression. We design from the inside out. If structural changes are needed, we work alongside the relevant architect or structural engineer. Our scope is the interior.',
      },
      {
        question: 'How early in a renovation should I involve By Shakir?',
        answer:
          'Before you speak to a contractor, ideally. Interior designers and contractors have different and sometimes competing interests in a project. Involving us early means the interior design drives the build decisions, not the other way around. If the build is already underway, we can still add value; earlier is simply easier.',
      },
    ],
    relatedSlugs: ['rotterdam', 'amsterdam', 'wassenaar'],
  },

  {
    city: 'Utrecht',
    slug: 'utrecht',
    province: 'Utrecht',
    postalCodeRange: '3500–3584',
    coordinates: { lat: 52.0907, lng: 5.1214 },
    population: '369,000',
    localDetail:
      'Utrecht\'s Oudegracht wharf-cellars are unlike anywhere else in the Netherlands: the street level is two floors above the actual water, so the canal-side basement rooms have their own light and character. By Shakir has designed for Utrecht clients who wanted these spaces to feel like extensions of the living area rather than storage afterthoughts.',
    neighborhoods: ['Wittevrouwen', 'Tuinwijk', 'Lombok', 'Lunetten', 'Hoograven'],
    responseTime: 'Within 24 hours — showroom visits by appointment in Tiel',
    distanceFromBase: '55 km from studio',
    relatedProject: {
      slug: 'villa-mansion-netherlands',
      title: 'Villa Mansion',
      location: 'Netherlands',
    },
    faqs: [
      {
        question: 'How does By Shakir work with Utrecht\'s unique canal-level basement rooms?',
        answer:
          'The wharf cellars along the Oudegracht are one of Utrecht\'s best-kept design secrets. With the right lighting design, appropriate flooring, and low-clearance furniture proportioned to the space, they can become the most atmospheric rooms in the home. We have done this; it requires care with ceiling heights and damp management, but the result is worth it.',
      },
      {
        question: 'I live 55 km from your Tiel studio. How does the project process work at that distance?',
        answer:
          'At 55 km, Utrecht is one of our closest service cities. Initial consultations at the Tiel showroom are common: clients see material samples, finishes, and reference projects in person before committing. Site visits in Utrecht happen at key milestones: initial survey, design presentation, material approval, and installation. Most communication between visits happens by video call and through the 3D models.',
      },
      {
        question: 'Can By Shakir design a home interior for a new build in Leidsche Rijn?',
        answer:
          'Yes. New developments like Leidsche Rijn typically deliver a standard specification: neutral, generic, developer-grade. The value of getting an interior designer involved early is that you can specify upgrades during the build phase at lower cost than retrofitting later. We recommend a conversation before handover if possible.',
      },
    ],
    relatedSlugs: ['amsterdam', 'amersfoort', 'arnhem'],
  },

  {
    city: 'Eindhoven',
    slug: 'eindhoven',
    province: 'Noord-Brabant',
    postalCodeRange: '5600–5658',
    coordinates: { lat: 51.4416, lng: 5.4697 },
    population: '246,000',
    localDetail:
      'Eindhoven\'s design identity, shaped by Philips, the Dutch Design Week, and the Strijp-S creative quarter, attracts a client profile that notices materials, proportions, and detail in ways that other markets might not. By Shakir\'s approach resonates here: the work is specific, object-level, considered. Not generic luxury.',
    neighborhoods: ['Strijp-S', 'Woensel-West', 'Tongelre', 'Gestel', 'Stratum'],
    responseTime: 'Within 24 hours — showroom visits by appointment in Tiel',
    distanceFromBase: '75 km from studio',
    faqs: [
      {
        question: 'Eindhoven has a strong design culture. How does By Shakir\'s approach fit that context?',
        answer:
          'We do not position ourselves as a design-world brand. By Shakir\'s value is in the complete commission, from concept through installation, with a warm residential result. Eindhoven clients who know design tend to appreciate the specificity of our material choices and the fact that we do not work from a catalogue. The work is designed for the client and the space, not for a portfolio shoot.',
      },
      {
        question: 'Can you work with the converted industrial spaces in Strijp-S?',
        answer:
          'Industrial conversions in Strijp-S have high ceilings, raw finishes, and open-plan layouts that benefit from strong spatial planning decisions. We are comfortable with this kind of brief. The challenge is usually warmth: adding material richness without destroying the character of the original space.',
      },
      {
        question: 'Does By Shakir work with Eindhoven-based furniture makers or local suppliers?',
        answer:
          'We source from where the best option exists for each project: whether that is a Dutch supplier, an Italian manufacturer, or a craftsperson making bespoke joinery locally. Eindhoven has some excellent craft makers. If local sourcing is a priority for you, tell us at the start and we will factor it into procurement.',
      },
    ],
    relatedSlugs: ['den-bosch', 'breda', 'arnhem'],
  },

  {
    city: 'Arnhem',
    slug: 'arnhem',
    province: 'Gelderland',
    postalCodeRange: '6800–6846',
    coordinates: { lat: 51.9851, lng: 5.8987 },
    population: '163,000',
    localDetail:
      'Arnhem sits at the edge of the Veluwe, and the wooded estates around Velp and Rozendaal attract clients who want interiors where the natural surroundings have an echo in the material palette. By Shakir\'s earth-tone palette was developed around exactly this aesthetic: warm travertine, linen, aged timber, nothing that feels out of place against green.',
    neighborhoods: ['Velp', 'Rozendaal', 'Presikhaaf', 'Kronenburg', 'Schuytgraaf'],
    responseTime: 'Within 24 hours — showroom available in Tiel (35 km)',
    distanceFromBase: '35 km from studio',
    faqs: [
      {
        question: 'Arnhem is close to your Tiel studio — does that affect project timelines?',
        answer:
          'Yes, practically. At 35 km, Arnhem is one of our closest service areas. Site visits are easier to schedule at short notice, and the initial consultation at our Tiel showroom is a short trip. Projects in Arnhem and the surrounding Veluwe area benefit from the most responsive service we offer.',
      },
      {
        question: 'We have a property near Velp with a large garden — can the interior and exterior connect well?',
        answer:
          'Indoor-outdoor living is something we design deliberately, not accidentally. Consistent flooring that crosses the threshold, window proportions that frame the garden, furniture placement that draws the eye outward. These decisions are made at the concept stage. We do not handle landscape design, but we design the interior to complement whatever the garden is.',
      },
      {
        question: 'Can By Shakir work on a phased renovation — one room at a time over 18 months?',
        answer:
          'Phased projects work better with a complete design plan established upfront. If we design each room independently at different times, the result tends to lack coherence. We recommend developing the full design brief at the start, even if execution happens in phases, so that each completed room looks intentional rather than accumulated.',
      },
    ],
    relatedSlugs: ['nijmegen', 'tiel', 'utrecht'],
  },

  {
    city: 'Nijmegen',
    slug: 'nijmegen',
    province: 'Gelderland',
    postalCodeRange: '6500–6546',
    coordinates: { lat: 51.8433, lng: 5.8553 },
    population: '180,000',
    localDetail:
      'Nijmegen\'s Valkhof hill, the Waal riverfront, and the residential streets of Berg en Dal give the area a sense of history that some cities lack. By Shakir\'s clients here are typically commissioning complete interiors for homes with character: old walls, wide windows, rooms that have been lived in for generations. They want them updated without losing what makes them worth living in.',
    neighborhoods: ['Berg en Dal', 'Lent', 'Dukenburg', 'Neerbosch-Oost', 'Heyendaal'],
    responseTime: 'Within 24 hours — showroom available in Tiel (40 km)',
    distanceFromBase: '40 km from studio',
    faqs: [
      {
        question: 'How does By Shakir approach renovating a home with genuine historical character?',
        answer:
          'Carefully. The instinct to modernise everything often removes exactly what makes older homes worth owning. Our approach starts with identifying what to keep: original floors, plasterwork, ceiling heights, the proportions of the rooms. Then building the design around those elements. The new and the old should look intentional together, not in competition.',
      },
      {
        question: 'Nijmegen has a large student population but also a growing affluent residential market. Which clients does By Shakir work with?',
        answer:
          'Our projects start at approximately €50,000 and typically run significantly higher for complete home commissions. We design for private clients who want a complete, professionally executed interior, not a quick refresh. Nijmegen\'s growing owner-occupier market around Lent and Berg en Dal is exactly the kind of environment we work in.',
      },
      {
        question: 'Can you design a home that functions well for a family but still looks considered?',
        answer:
          'Family homes are most of what we design. Durable materials that clean well, storage that is actually useful, rooms that children can use without the adults feeling they have sacrificed their home. These are practical design briefs that require the same quality of thinking as a show apartment. We do not design differently for families; we design for how people actually live.',
      },
    ],
    relatedSlugs: ['arnhem', 'tiel', 'den-bosch'],
  },

  {
    city: 'Den Bosch',
    slug: 'den-bosch',
    province: 'Noord-Brabant',
    postalCodeRange: '5200–5237',
    coordinates: { lat: 51.6978, lng: 5.3037 },
    population: '157,000',
    localDetail:
      '\'s-Hertogenbosch has an atmosphere of comfortable confidence; the Bourgondian character is real, not a tourist office invention. Clients here tend to want warmth, richness, and interiors that feel genuinely lived in rather than staged. By Shakir\'s palette was built around exactly that: espresso, warm sand, aged gold. The materials match what the city feels like.',
    neighborhoods: ['Rosmalen', 'Vlijmen', 'Empel', 'Engelen', 'Orthen'],
    responseTime: 'Within 24 hours — showroom available in Tiel (45 km)',
    distanceFromBase: '45 km from studio',
    faqs: [
      {
        question: 'We want a warm, liveable interior, not a show home. Can By Shakir deliver that?',
        answer:
          'That is precisely our brief. The reference we use internally is a shaded penthouse terrace: warm, ordered, but completely liveable. Not a museum, not a hotel lobby. Every project we design should look like someone actually lives there. If your instinct is that your home should feel like a home, we are aligned.',
      },
      {
        question: 'Does By Shakir work on extensions and new-build additions as well as interior renovations?',
        answer:
          'Interior design on extensions requires early involvement, ideally before the architect finalises the build drawings. Window placement, room proportions, floor level transitions: these are interior design decisions that are very difficult to correct after the build. Contact us before you approach builders and we can advise on timing.',
      },
      {
        question: '\'s-Hertogenbosch is close to Tiel — how quickly can a project begin?',
        answer:
          'Den Bosch is 45 km from the studio. Initial consultations at our Tiel showroom take about an hour. If the project is straightforward, we can have a design proposal ready within two to three weeks of the first meeting. Timeline from first conversation to completed installation depends on project scope: typically four to twelve months.',
      },
    ],
    relatedSlugs: ['eindhoven', 'nijmegen', 'breda'],
  },

  {
    city: 'Wassenaar',
    slug: 'wassenaar',
    province: 'Zuid-Holland',
    postalCodeRange: '2240–2245',
    coordinates: { lat: 52.1463, lng: 4.3896 },
    population: '26,000',
    localDetail:
      'Wassenaar is home to some of the Netherlands\' most significant private residences: the ambassador estates, the park-side villas, the properties that do not appear in estate agent windows. By Shakir operates comfortably at this level: discretion, precision, and the ability to work with clients who have high expectations and limited tolerance for ambiguity in the design process.',
    neighborhoods: ['Kieviet', 'Sion', 'Rust en Vreugd', 'De Horsten'],
    responseTime: 'Within 24 hours — showroom visits by appointment in Tiel',
    distanceFromBase: '88 km from studio',
    faqs: [
      {
        question: 'We are commissioning a complete interior for a significant Wassenaar property. Does By Shakir work at that scale?',
        answer:
          'Yes. Complete home commissions on large residential properties, covering multiple floors, formal and informal living spaces, primary bedrooms with dressing rooms and bathrooms, staff quarters: these are the kind of brief By Shakir was built for. The scale of the project does not change the approach: every room is designed with the same attention to detail as a single-room commission, just multiplied.',
      },
      {
        question: 'Privacy matters to us. How does By Shakir handle confidentiality on high-profile projects?',
        answer:
          'We do not share project photography, client names, or property addresses without explicit permission. Several of our completed projects exist in the portfolio in anonymised form or not at all. If confidentiality is a condition of engagement, we can discuss a non-disclosure arrangement before the first consultation.',
      },
      {
        question: 'We prefer to work with a single designer rather than a large team. How is By Shakir structured?',
        answer:
          'By Shakir is principal-led. Shakir is involved in every project from the first consultation through final dressing, not handed off to a junior after the initial brief. This is a deliberate decision. Clients who have worked with larger studios often note the difference. It is also why we cannot take on unlimited projects simultaneously.',
      },
    ],
    relatedSlugs: ['den-haag', 'laren', 'amsterdam'],
  },

  {
    city: 'Apeldoorn',
    slug: 'apeldoorn',
    province: 'Gelderland',
    postalCodeRange: '7300–7374',
    coordinates: { lat: 52.2112, lng: 5.9699 },
    population: '166,000',
    localDetail:
      'Apeldoorn\'s proximity to the Het Loo estate and the forested Veluwe fringe gives the residential market an unusual sense of scale for a mid-size Dutch city. The larger villas and wooded-plot properties around Ugchelen and Berg en Bos attract clients who expect an interior designer comfortable with generous rooms and complex briefs.',
    neighborhoods: ['Ugchelen', 'Berg en Bos', 'De Maten', 'Osseveld-Woudhuis', 'Orden'],
    responseTime: 'Within 24 hours — showroom visits by appointment in Tiel',
    distanceFromBase: '75 km from studio',
    faqs: [
      {
        question: 'Does By Shakir design for the larger villa properties common in the Apeldoorn area?',
        answer:
          'Yes. Larger homes, with generous rooms, multiple living areas, and separate dining and reception spaces, require a different design approach than compact city apartments. Space planning at that scale is its own discipline: rooms that feel too large are as uncomfortable as rooms that feel too small. We are comfortable with both extremes.',
      },
      {
        question: 'We have a property near the Veluwe with lots of natural light and garden views. How do you design for that?',
        answer:
          'Natural light and garden views are assets that should drive every decision in a room: furniture placement, floor material, window dressing (or no dressing), wall finishes that do not compete with the outside. We do not bring a standard palette to every project; we start with what the light and the location are already doing and build from there.',
      },
      {
        question: 'Can you design an interior that suits both winter use and summer entertaining?',
        answer:
          'Seasonal versatility is a real brief. Textiles, layering, and flexible furniture arrangements are part of how we handle it. A room that is warm and intimate in February can also work for summer gatherings, though it requires specific material choices and furniture that does not look wrong in the light. We design for the home as it actually gets used, not a single ideal scenario.',
      },
    ],
    relatedSlugs: ['arnhem', 'zwolle', 'utrecht'],
  },

  {
    city: 'Breda',
    slug: 'breda',
    province: 'Noord-Brabant',
    postalCodeRange: '4800–4844',
    coordinates: { lat: 51.5719, lng: 4.7683 },
    population: '185,000',
    localDetail:
      'Breda\'s Nassauarchief heritage, the Spoorzone redevelopment, and a growing creative and commercial sector signal a city that is confident in its own direction. The clients commissioning complete interiors here are typically building long-term homes rather than rental investments, and want a result that reflects genuine personal taste, not generic market appeal.',
    neighborhoods: ['Prinsenbeek', 'Teteringen', 'Ulvenhout', 'Haagse Beemden', 'Ginneken'],
    responseTime: 'Within 24 hours — showroom visits by appointment in Tiel',
    distanceFromBase: '85 km from studio',
    faqs: [
      {
        question: 'We are building a new home in Breda and want to involve an interior designer early. When should we make contact?',
        answer:
          'Before your architect finalises the floor plan, if possible. The most expensive interior design mistake is a room with the wrong proportions: a kitchen too narrow to comfortably open two oven doors at once, a hallway that forces a furniture compromise, a master bedroom where the ceiling slopes over the bed. These are build decisions that need an interior perspective before they are locked in.',
      },
      {
        question: 'Breda feels like a city investing in quality. Does that match By Shakir\'s positioning?',
        answer:
          'Breda\'s growth is one reason we included it in our service area. The residential market around Ginneken and the new developments near the station has clients who understand and value quality design, not a budget version of it. Our projects here are the same standard as our Amsterdam or Rotterdam work.',
      },
      {
        question: 'We have a €150K budget for a complete interior. Is that realistic with By Shakir?',
        answer:
          'We do not publish pricing, and project costs vary significantly by scope, materials, and property size. What we can say is that projects with budgets in this range are ones we work on. A first conversation will tell us both whether there is a good fit. We would rather have that conversation than have you spend time researching us on an assumption that turns out to be wrong.',
      },
    ],
    relatedSlugs: ['eindhoven', 'den-bosch', 'rotterdam'],
  },

  {
    city: 'Amersfoort',
    slug: 'amersfoort',
    province: 'Utrecht',
    postalCodeRange: '3800–3833',
    coordinates: { lat: 52.1561, lng: 5.3878 },
    population: '162,000',
    localDetail:
      'Amersfoort\'s Koppelpoort, the canal ring, and the stone-lined streets of the inner city give the place a material warmth that is rare in Dutch cities. Clients here often want their interiors to share something with the city\'s character: warm stone tones, tactile materials, spaces that feel like they have been there a while even when they are new.',
    neighborhoods: ['Soesterkwartier', 'Koninginnenlaan', 'De Koppel', 'Vathorst', 'Kruiskamp'],
    responseTime: 'Within 24 hours — showroom available in Tiel (65 km)',
    distanceFromBase: '65 km from studio',
    faqs: [
      {
        question: 'How does By Shakir\'s design philosophy align with Amersfoort\'s historic character?',
        answer:
          'Amersfoort is one of the few Dutch cities where the historic core actually feels warm: the sandstone and brick have a colour that is close to our own palette. Clients who respond to the city\'s character often respond to By Shakir\'s aesthetic for the same reasons. The connection is genuine, not a sales pitch.',
      },
      {
        question: 'We are renovating a 1930s semi-detached in Amersfoort. What is typically possible within those walls?',
        answer:
          'Interwar Dutch housing has good bones: solid construction, reasonable ceiling heights, rooms with real proportions. The limitations are usually the kitchen layout, the bathroom configuration, and the original flooring. What is possible within those walls depends on structural walls (which require a structural engineer to assess) and municipality rules on external changes. Our scope is the interior. We work within what the structure allows.',
      },
      {
        question: 'Can By Shakir visit Amersfoort for a site assessment before we commit to a project?',
        answer:
          'Yes. Initial site visits are typically part of the project scoping conversation: we look at the space, take measurements, and form a view on what the design brief should be. There is no obligation to continue after a site visit. If after seeing the space we do not think we are the right fit for the project, we will tell you.',
      },
    ],
    relatedSlugs: ['utrecht', 'amsterdam', 'apeldoorn'],
  },

  {
    city: 'Tiel',
    slug: 'tiel',
    province: 'Gelderland',
    postalCodeRange: '4000–4009',
    coordinates: { lat: 51.8898, lng: 5.4304 },
    population: '41,000',
    localDetail:
      'Tiel is By Shakir\'s home base. The studio and showroom on the Waal is where every project begins. Clients in the Tiel area have an advantage no other city gets: direct access to the showroom, same-day meetings when schedules allow, and the fastest response time of any project we take on. Appointments are by arrangement; walk-ins are not typical.',
    neighborhoods: ['Passewaay', 'Medel', 'Tiel-Noord', 'Drumpt', 'Wadenoijen'],
    responseTime: 'Showroom open by appointment — fastest response time of any project location',
    distanceFromBase: 'Studio base — showroom in Tiel',
    faqs: [
      {
        question: 'Can I visit the By Shakir showroom in Tiel before I commit to anything?',
        answer:
          'Yes. The Tiel showroom is specifically for this purpose: you see material samples, finished reference work, and the studio\'s design sensibility in person before any decision. Appointments are by arrangement rather than open hours. Contact us to schedule.',
      },
      {
        question: 'What can I see at the Tiel showroom?',
        answer:
          'Material samples from the suppliers we actually use: stone, fabric, timber, metal finishes. Reference images and drawings from completed projects (some are anonymised at client request). And Shakir: in-person, available to talk about your project without a sales pitch. There is no obligation that follows from a showroom visit.',
      },
      {
        question: 'We are in Tiel. Does being local mean a lower project cost?',
        answer:
          'Distance does not affect design fees. What being local means is that site visits are easier to schedule and quicker to arrange, which can reduce the time between design decisions. Project cost is determined by scope, materials, and complexity, not geography.',
      },
      {
        question: 'How many local projects does By Shakir take on at one time in the Tiel area?',
        answer:
          'We limit the number of active projects intentionally. By Shakir is principal-led. Every project receives direct attention from Shakir, not a team member. Tiel clients are not prioritised over other locations; they benefit from proximity, not preference.',
      },
    ],
    relatedSlugs: ['nijmegen', 'arnhem', 'den-bosch'],
  },

  {
    city: 'Zwolle',
    slug: 'zwolle',
    province: 'Overijssel',
    postalCodeRange: '8000–8043',
    coordinates: { lat: 52.5168, lng: 6.0830 },
    population: '132,000',
    localDetail:
      'Zwolle\'s Hanseatic history produced a city comfortable with scale and craft: the Sassenpoort, the market square, the townhouses of the Binnenstad all suggest a place that has understood quality for a long time. The residential market around Stadshagen and the broader IJssel area includes clients who commission complete interiors as a considered investment, not an impulse.',
    neighborhoods: ['Stadshagen', 'Berkum', 'Assendorp', 'Wipstrik', 'Holtenbroek'],
    responseTime: 'Within 48 hours — showroom visits by appointment in Tiel',
    distanceFromBase: '120 km from studio',
    faqs: [
      {
        question: 'Zwolle is 120 km from Tiel. How does By Shakir manage projects at that distance?',
        answer:
          'Distance is managed with structure. The first consultation and concept development happen at the Tiel showroom or by video call. Key site visits (initial survey, material sign-off, installation supervision) are scheduled in advance and consolidated where possible. The 3D visualisation stage is specifically designed for clients who cannot review design decisions on-site repeatedly: you approve everything digitally, in photorealistic detail, before anything is ordered.',
      },
      {
        question: 'Can By Shakir work with Zwolle-based contractors for the build portion of a renovation?',
        answer:
          'Yes. We either work with contractors you have already engaged, or we can recommend suppliers based on the project type. Our preference is to be involved in contractor selection. Some contractors are better suited to the kind of specification quality we work with than others. This conversation happens during the project planning phase.',
      },
      {
        question: 'We are planning a complete interior for a new detached house in Stadshagen. When should we start?',
        answer:
          'Before the developer handover, if possible. New build specifications are typically set at a level that satisfies most buyers but not clients who care about detail. Changes during the build phase, including flooring upgrades, kitchen reconfiguration, and bathroom tile selection, cost less and look better than retrofitting after handover. Contact us as soon as you have a move-in date.',
      },
    ],
    relatedSlugs: ['apeldoorn', 'amersfoort', 'amsterdam'],
  },

  {
    city: 'Laren',
    slug: 'laren',
    province: 'Noord-Holland',
    postalCodeRange: '1250–1253',
    coordinates: { lat: 52.2571, lng: 5.2166 },
    population: '11,500',
    localDetail:
      '\'t Gooi, which includes Laren, Blaricum, and Bussum, has one of the highest concentrations of private wealth in the Netherlands. The homes here are substantial, often on wooded plots, and owned by people who have seen enough mediocre luxury interiors to know what they do not want. By Shakir works well in this market: the studio is small, principal-led, and does not produce generic results.',
    neighborhoods: ['Blaricum', 'Bussum', 'Laren-dorp', "'t Gooi Oost"],
    responseTime: 'Within 24 hours — showroom visits by appointment in Tiel',
    distanceFromBase: '80 km from studio',
    faqs: [
      {
        question: 'The \'t Gooi market is discerning. What distinguishes By Shakir from the interior designers who operate here already?',
        answer:
          'We do not know who else you are speaking to, and we would not position ourselves against them anyway. What we can say is that By Shakir is principal-led, takes on a limited number of projects simultaneously, and produces work that is specific to each client and property. If you have seen the portfolio and it speaks to you, a conversation will quickly tell you whether there is a fit.',
      },
      {
        question: 'We collect art and want a home that works around an existing collection. Is that a typical brief for you?',
        answer:
          'Art-led interior design is one of our more interesting briefs. The collection informs everything: wall colours that do not compete with the work, lighting that is designed around the art rather than the architecture, furniture placement that creates the right viewing distance. We start with your collection before we start with the room.',
      },
      {
        question: 'How many projects does By Shakir take on in the \'t Gooi area?',
        answer:
          'We do not limit by geography. We limit by capacity. By Shakir is principal-led, and Shakir is involved in every project from first conversation to final dressing. This means a finite number of active projects at any time. Current availability is discussed in the first conversation.',
      },
    ],
    relatedSlugs: ['amsterdam', 'wassenaar', 'amersfoort'],
  },

  // ── International ──────────────────────────────────────────────────────────

  {
    city: 'Dubai',
    slug: 'dubai',
    province: 'UAE',
    postalCodeRange: 'N/A',
    coordinates: { lat: 25.2048, lng: 55.2708 },
    population: '3,600,000',
    localDetail:
      'By Shakir completed the Penthouse Dubai Marina in 2024 — the full project, from concept through final dressing, managed from Tiel with site visits at key milestones. The commission proved what the studio already knew: warm-first design philosophy works in Dubai as well as it does in the Netherlands, and the quality of finish is not reduced by the distance.',
    neighborhoods: ['Dubai Marina', 'Palm Jumeirah', 'Downtown Dubai', 'Emirates Hills', 'Jumeirah Bay Island'],
    responseTime: 'Within 48 hours — project feasibility assessed in first consultation',
    distanceFromBase: 'International commission',
    relatedProject: {
      slug: 'penthouse-dubai-marina',
      title: 'Penthouse Dubai Marina',
      location: 'Dubai Marina',
    },
    faqs: [
      {
        question: 'How does By Shakir manage a Dubai interior project from the Netherlands?',
        answer:
          'The same way we managed the Dubai Marina penthouse: structured milestones, regular video updates, and site visits at the moments that require physical presence (initial survey, design presentation, material approval, and final installation supervision). The 3D visualisation stage means you approve every room in photorealistic detail before any ordering begins, which reduces the risk of surprises during installation.',
      },
      {
        question: 'What materials do you specify for Dubai properties given the climate (cooling demands and UV exposure)?',
        answer:
          'Climate drives material selection in Dubai in a way it does not in the Netherlands. Stone that absorbs heat is used differently. Fabrics for south-facing rooms need UV resistance. Flooring that stays cool underfoot is worth the premium. We design for the climate of the property, not the climate of the Netherlands. The Penthouse Dubai Marina project gave us direct experience with these decisions.',
      },
      {
        question: 'Do you have established contacts with Dubai-based contractors and suppliers?',
        answer:
          'Yes, from the Dubai Marina project. We work with contractors whose standard of finish and reliability we have already tested, not new relationships started for each project. This matters for international commissions: the quality of the local execution is as important as the quality of the design.',
      },
      {
        question: 'How does UAE building regulation affect interior design? Are there restrictions we should know about?',
        answer:
          'UAE buildings in freehold developments generally have more interior design flexibility than Dutch listed properties, but there are building management rules around structural changes, flooring upgrades in apartments above other units, and sometimes restrictions on window modifications. Your property\'s developer or building management company will have the current rules; we work within them.',
      },
      {
        question: 'Can By Shakir design a Dubai property that is both a personal home and a short-term rental?',
        answer:
          'These are genuinely different briefs and the compromises between them are real. A personal home reflects your taste; a short-term rental needs broad appeal, durable materials, and standardised specs that survive rotation. We can design for one, the other, or a considered middle ground, but the brief needs to be clear at the start. Tell us the split and we will design accordingly.',
      },
    ],
    relatedSlugs: ['amsterdam', 'barcelona', 'malaga'],
  },

  {
    city: 'Barcelona',
    slug: 'barcelona',
    province: 'Catalonia, Spain',
    postalCodeRange: 'N/A',
    coordinates: { lat: 41.3851, lng: 2.1734 },
    population: '1,620,000',
    localDetail:
      'The Duplex Penthouse in Barcelona\'s Eixample was By Shakir\'s first Spanish commission: a two-floor apartment where Mediterranean light and generous ceiling heights made every material decision both easier and more demanding. The project demonstrated that the studio\'s warm palette translates directly to southern European architecture: the sand, the terracotta, the gold — they belong here.',
    neighborhoods: ['Eixample', 'Gràcia', 'Sarrià-Sant Gervasi', 'Pedralbes', 'Diagonal Mar'],
    responseTime: 'Within 48 hours — project feasibility assessed in first consultation',
    distanceFromBase: 'International commission',
    relatedProject: {
      slug: 'duplex-penthouse-barcelona',
      title: 'Duplex Penthouse',
      location: 'Barcelona',
    },
    faqs: [
      {
        question: 'Has By Shakir worked within Barcelona\'s Eixample grid, with its distinctive modernista architecture?',
        answer:
          'Yes. The Duplex Penthouse Barcelona was in the Eixample. The building had the characteristic wide corridors, generous ceiling heights, and hexagonal hydraulic tile floors that Eixample apartments carry. We preserved the tiles, worked around them, and designed the contemporary elements to complement rather than compete with the original character.',
      },
      {
        question: 'Can you source materials locally in Barcelona to reduce shipping costs on a large project?',
        answer:
          'Where local sourcing makes quality and cost sense, yes. Spain has excellent stone, tile, and ceramic manufacturers. For bespoke joinery and specific soft furnishings, we typically work with our established supplier network regardless of location. Procurement decisions are made on quality and value, not convenience.',
      },
      {
        question: 'We have a Barcelona holiday home that we use 8 weeks a year. Does that change how you design it?',
        answer:
          'Seasonal-use properties have specific requirements: materials that handle temperature swings, storage that works for irregular occupation, lighting that is not calibrated around a daily routine. We have designed for this use pattern in Malaga and Barcelona. Tell us how you actually use the property and we will design for that reality.',
      },
      {
        question: 'Do you work with Barcelona-based architects, developers, or building administrators?',
        answer:
          'When the project requires it, yes. Barcelona\'s building regulations, particularly around listed or protected elements, sometimes require local professional input. We work alongside whatever local specialists the project needs. Our scope is the interior design, not the administration of permits and approvals.',
      },
    ],
    relatedSlugs: ['malaga', 'dubai', 'amsterdam'],
  },

  {
    city: 'Malaga',
    slug: 'malaga',
    province: 'Andalusia, Spain',
    postalCodeRange: 'N/A',
    coordinates: { lat: 36.7213, lng: -4.4214 },
    population: '590,000',
    localDetail:
      'The Beach House Malaga introduced By Shakir\'s first dedicated indoor-outdoor commission: terraced living, coastal light, the need for interiors that work both with doors open to the Andalusian morning and closed against afternoon heat. The project showed what the studio\'s palette can do when the Mediterranean is literally outside the window: the same warmth, but lighter, airier, more permeable.',
    neighborhoods: ['La Malagueta', 'Pedregalejo', 'La Caleta', 'El Limonar', 'Cerrado de Calderón'],
    responseTime: 'Within 48 hours — project feasibility assessed in first consultation',
    distanceFromBase: 'International commission',
    relatedProject: {
      slug: 'beach-house-malaga',
      title: 'Beach House',
      location: 'Malaga',
    },
    faqs: [
      {
        question: 'How do you design for the Malaga climate, both the heat and the strong coastal light?',
        answer:
          'The Beach House Malaga brief was specifically about this. Strong light at the coast bleaches colours that look rich in northern Europe. Materials need to be calibrated for the actual light they will live in. Heat management is partly architectural (shutters, terrace orientation) and partly about flooring and textile choices that stay comfortable when temperatures climb. We design for the real climate of the property, not a generic Mediterranean notion.',
      },
      {
        question: 'Can By Shakir design a Malaga home that functions well as both a holiday retreat and a permanent residence?',
        answer:
          'Dual-use properties are genuinely different from single-use ones. A holiday home should feel like an escape from routine; a permanent home needs to support routine. The compromise we usually reach is: design for the holiday feeling but build in the practical systems that make permanent living liveable: storage, a functional kitchen, laundry. Tell us the split and we design from there.',
      },
      {
        question: 'We want to integrate Andalusian design elements without it feeling like a pastiche. How do you approach that?',
        answer:
          'Context should inform design, not determine it. Using hydraulic tile, wrought iron, or azulejo as decorative elements in a contemporary interior can work brilliantly if the proportion is right. One strong local element that earns its place is better than a wholesale recreation of a regional style. Our Malaga project used the indoor-outdoor threshold as the Andalusian reference, not the surface decoration.',
      },
      {
        question: 'Does salt air near the coast affect material choices in Malaga properties?',
        answer:
          'Yes. Properties within 500 metres of the sea have real accelerated corrosion on metal fittings and exposed hardware. Stone near the sea needs sealing. Upholstery fabrics should be solution-dyed rather than stock-dyed; they retain colour better. We specify with the actual environment in mind, not a generic indoor setting.',
      },
    ],
    relatedSlugs: ['barcelona', 'dubai', 'amsterdam'],
  },

  {
    city: 'Antwerp',
    slug: 'antwerp',
    province: 'Flanders, Belgium',
    postalCodeRange: 'N/A',
    coordinates: { lat: 51.2194, lng: 4.4025 },
    population: '541,000',
    localDetail:
      'The Country Estate near Antwerp was By Shakir\'s first Belgian commission: a heritage property where the brief was to make centuries-old architecture feel genuinely habitable without stripping it of what makes it worth owning. The project showed that working across the Dutch-Belgian border changes the administration, not the quality of the work.',
    neighborhoods: ['Zurenborg', 'Eilandje', 'Berchem', 'Deurne', 'Brasschaat'],
    responseTime: 'Within 48 hours — project feasibility assessed in first consultation',
    distanceFromBase: '130 km from studio',
    relatedProject: {
      slug: 'country-estate-antwerpen',
      title: 'Country Estate',
      location: 'Antwerpen',
    },
    faqs: [
      {
        question: 'Has By Shakir worked with heritage properties near Antwerp with protected elements?',
        answer:
          'Yes. The Country Estate commission near Antwerp had protected heritage elements. Original floors, plaster ceiling mouldings, period windows: all preserved and designed around. The design brief was contemporary comfort within a heritage frame, not a pastiche restoration and not an erasure of what was there.',
      },
      {
        question: 'How does working across the Dutch-Belgian border affect a project with By Shakir?',
        answer:
          'Administration changes. Belgium has its own building rules and permit processes, and where structural changes are involved, you will need a locally registered architect or engineer. By Shakir handles the interior design; Belgian administrative requirements are a parallel track. For the Antwerp estate project, we worked alongside the client\'s local contacts for anything requiring Belgian professional registration.',
      },
      {
        question: 'Can you blend Dutch and Belgian interior traditions in a single project?',
        answer:
          'By Shakir\'s aesthetic does not start from a national tradition. It starts from the client, the property, and the brief. The Dutch-Belgian border runs through a continuous cultural region; the differences in interior design vocabulary are less significant than the differences between any two individual clients. We design for the person and the place, not the nationality.',
      },
      {
        question: 'We are looking at properties in the Brasschaat and Schilde area outside Antwerp. Is By Shakir active in that area?',
        answer:
          'The Country Estate commission was in that corridor. Brasschaat and Schilde are affluent residential areas with the kinds of substantial properties By Shakir is designed for. Contact us with a brief description of your project and we will tell you quickly whether there is a fit.',
      },
    ],
    relatedSlugs: ['rotterdam', 'amsterdam', 'den-haag'],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getRelatedLocations(slug: string): LocationData[] {
  const location = getLocationBySlug(slug);
  if (!location) return [];
  return location.relatedSlugs
    .map((s) => getLocationBySlug(s))
    .filter((l): l is LocationData => l !== undefined);
}
