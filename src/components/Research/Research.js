import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Research.css"; // Changed from Publications.css

// Helper component to highlight specified names in a text
const HighlightedAuthors = ({ authors }) => {
  const namesToHighlight = [
    "Ricardo Valdez Castro", // Longest and most specific first
    "R. Valdez-Castro",
    "Ricardo Valdez",
    "R. Valdez", // With dot
    "R Valdez",  // Without dot
    // Add other variations if needed, e.g., "Valdez, Ricardo", "Valdez, R."
  ];

  let processedAuthors = [authors]; // Start with the full string as an array

  namesToHighlight.forEach(name => {
    const newProcessedAuthors = [];
    processedAuthors.forEach(segment => {
      if (typeof segment === 'string') {
        // Escape special characters in name for regex
        const escapedName = name.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`(${escapedName})`, 'gi');
        const parts = segment.split(regex);

        parts.forEach(part => {
          if (part) { // Filter out empty strings from split
            if (part.toLowerCase() === name.toLowerCase()) {
              newProcessedAuthors.push(<u key={`highlight-${Math.random()}`}>{part}</u>);
            } else {
              newProcessedAuthors.push(part);
            }
          }
        });
      } else {
        // If segment is already a JSX element (e.g., previously highlighted), pass it through
        newProcessedAuthors.push(segment);
      }
    });
    processedAuthors = newProcessedAuthors;
  });

  return <>{processedAuthors.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>)}</>;
};


const researchData = [ // Renamed from publicationsData
  {
    title: "Electrical Properties of ap‐SnOx/n‐SnOx Diode on a Flexible Polyimide Substrate",
    authors: "Angelica Garzon-Fontecha, Harvi A Castillo, Angel Regalado, Ricardo Valdez, Leonel Cota-Araiza, Wencel De La Cruz",
    journalInfo: "physica status solidi (a), 2023",
    doi: "https://doi.org/10.1002/pssa.202300316",
    graphicalAbstractSrc: "/assets/images/GA2023.jpg", 
  },
  {
    title: "Carbon Quantum Dot Optical Properties for potential infiltration into Hollow Core Photonic Crystal Fibers",
    authors: "Eurydice Arroyo, Diana Tentori, Alfonso Garcia, Ricardo Valdez, Miguel A Armenta, Osvaldo J Nava, Roberto Machorro, Amelia Olivas",
    journalInfo: "Particle & Particle Systems Characterization, 2023, 40, 2200200",
    doi: "https://doi.org/10.1002/ppsc.202200200",
  },
  {
    title: "Influence of Co2+, Cu2+, Ni2+, Zn2+, and Ga3+ on the iron-based trimetallic layered double hydroxides for water oxidation",
    authors: "Jesus David Yong, Ricardo Valdez, Miguel Ángel Armenta, Noé Arjona, Georgina Pina-Luis, Amelia Olivas",
    journalInfo: "RSC Advances, 2022, 12, 16955–16965",
    doi: "https://doi.org/10.1039/D2RA01980A",
  },
  {
    title: "Comparative Study of Polycaprolactone Electrospun Fibers and Casting Films Enriched with Carbon and Nitrogen Sources and Their Potential Use in Water Bioremediation",
    authors: "D. A. Pompa-Monroy, A. L. Iglesias, S. Gulam Dastager, M. Namdeo Thorat, Amelia Olivas-Sarabia, R. Valdez-Castro, L. A. Hurtado-Ayala, J. M.Cornejo-Bravo, G. L. Pérez-González and L. J. Villarreal-Gómez",
    journalInfo: "Membranes, 2022, 12, 327",
    doi: "https://doi.org/10.3390/membranes12030327",
  },
  {
    title: "Performance of Al-MCM-41 nanospheres as catalysts for dimethyl ether production",
    authors: "J.C. Bedoya, R. Valdez, L. Cota, M.A. Alvarez-Amparan, A. Olivas",
    journalInfo: "Catalysis Today, 2022, 388–389, 55–62",
    doi: "https://doi.org/10.1016/j.cattod.2020.12.007",
  },
  {
    title: "Development, characterization, and in vitro assessment of multilayer mucoadhesive system containing dexamethasone sodium phosphate",
    authors: "Graciela Lizeth Pérez-González, Luis Jesús Villarreal-Gómez, Amelia Olivas-Sarabia, Ricardo Valdez, José Manuel Cornejo-Bravo",
    journalInfo: "International Journal of Polymeric Materials and Polymeric Biomaterials, 2021, 70, 1316–1328",
    doi: "https://doi.org/10.1080/00914037.2020.1798433",
  },
  {
    title: "Nanogels as controlled drug release systems for Coenzyme Q10 and Resveratrol for cosmetic application",
    authors: "E. Arroyo, R. Valdez, J. M. Cornejo-Bravo, M. A. Armenta, A. Olivas",
    journalInfo: "J Nanopart Res, 2021, 23, 163",
    doi: "https://doi.org/10.1007/s11051-021-05258-2",
  },
  {
    title: "Effect of AuM (M: Ag, Pt & Pd) bimetallic nanoparticles on the sorbitol electro-oxidation in alkaline medium",
    authors: "Luis J.Torres-Pacheco, Azucena Osornio-Villa, Nora A.García-Gómez, Amelia Olivas, Ricardo Valdez, Minerva Guerra-Balcázar, Lorena Álvarez-Contreras, Noé Arjona",
    journalInfo: "Fuel, 2020, 274, 117864",
    doi: "https://doi.org/10.1016/j.fuel.2020.117864",
  },
  {
    title: "Dimethyl ether production via methanol dehydration using Fe3O4 and CuO over γ-χ-Al2O3 nanocatalysts",
    authors: "M. A. Armenta, V. M. Maytorena, L. A. Flores–Sánchez, J. M. Quintana, R. Valdez, A. Olivas",
    journalInfo: "Fuel, 2020, 280, 118545",
    doi: "https://doi.org/10.1016/j.fuel.2020.118545",
  },
  {
    title: "Chemical issues of coffee and Tule lignins as ecofriendly materials for the effective removal of hazardous metal ions contained in metal finishing wastewater",
    authors: "Eduardo Alberto López-Maldonado, Herón Hernández-García, Minerva Ana María Zamudio-Aguilar, Mercedes Teresita Oropeza-Guzmán, Adrian Ochoa-Terán, Luis Miguel López-Martínez, Marisela Martinez-Quiroz, Ricardo Valdez, Amelia Olivas",
    journalInfo: "Chemical Engineering Journal, 2020, 397, 125384",
    doi: "https://doi.org/10.1016/j.cej.2020.125384",
  },
  {
    title: "Preparation and characterization of electrospun microfibers of either PVA or PVP for fast release of sildenafil citrate",
    authors: "Erick José Torres Martínez, Ricardo Vera Graziano, José Manuel Cervantes Uc, Nina Bogdanchikova, Amelia Olivas Sarabia, Ricardo Valdez Castro, Aracely Serrano Medina, Ana Leticia Iglesias, Graciela Lizeth Pérez González, José Manuel Cornejo-Bravo, Luis Jesús Villarreal Gómez",
    journalInfo: "e-Polymers, 2020",
    doi: "https://doi.org/10.1515/epoly-2020-0070",
  },
  {
    title: "Thermodynamic and catalytic properties of Cu- and Pd- oxides over mixed γ–χ–Al2O3 for methanol dehydration toward dimethyl ether",
    authors: "M. A. Armenta, V.M. Maytorena, R.G. Alamilla, R. Valdez, A. Olivas",
    journalInfo: "International Journal of Hydrogen Energy, 2019, 44, 7276–7287",
    doi: "https://doi.org/10.1016/j.ijhydene.2019.01.243",
  },
  {
    title: "Synthesis of PdFe3O4 nanoparticles varying the stabilizing agent and additive and their effect on the ethanol electro-oxidation in alkaline media",
    authors: "H. Rivera-González, L. Torres-Pacheco, L. Álvarez-Contreras, A. Olivas, M. Guerra-Balcázar, R. Valdez, N. Arjona",
    journalInfo: "Journal of Electroanalytical Chemistry, 2019, 835, 301–312",
    doi: "https://doi.org/10.1016/j.jelechem.2019.01.038",
  },
  {
    title: "Effect of molybdenum content on the morphology and electronic characteristics of Pd–MoO nanomaterials and activity evaluation for ethylene glycol electro–oxidation",
    authors: "Oscar Ambriz-Peláez; Sergio Durón; Amelia Olivas; Ricardo Valdez; Luis Gerardo Arriaga; Lorena ÁlvarezContreras; Minerva Guerra-Balcázar; Noé Arjona",
    journalInfo: "Applied Surface Science, 2019, 498, 143842",
    doi: "https://doi.org/10.1016/j.apsusc.2019.143842",
  },
  {
    title: "Evaluation of N-Alkyl-bis-o-aminobenzamide Receptors for the Determination and Separation of Metal Ions by Fluorescence, UV-Visible Spectrometry and Zeta Potential",
    authors: "Marisela Martinez-Quiroz, Xiomara E. Aguilar-Martinez, Mercedes T. Oropeza-Guzman, Ricardo Valdez, Eduardo A. Lopez-Maldonado",
    journalInfo: "Molecules, 2019, 24, 1737",
    doi: "https://doi.org/10.3390/molecules24091737",
  },
  {
    title: "Diisopropyl ether production via 2-propanol dehydration using supported iron oxides catalysts",
    authors: "M.A. Armenta, R. Valdez, R. Silva-Rodrigo, A. Olivas",
    journalInfo: "Fuel, 2019, 236, 934–941",
    doi: "https://doi.org/10.1016/j.fuel.2018.09.062",
  },
  {
    title: "In vitro Comparative Study of Adhesion Force in Dentin of Three Cement Sealers BCSealer, AH-Plus and MTA Fillapex",
    authors: "A.G. Carrillo-Varguez, T. Bustamante-Reynoso, L.H. Carrillo-Várguez, M.A. Cadena-Alcantar, B. González Vizcarra, R. Valdez-Castro, L.J. Villarreal-Gómez",
    journalInfo: "Journal of Research in Medical and Dental Science, 2018, 6, 6–11",
    doi: "",
  },
  {
    title: "Production of hydrogen and carbon nanomaterials using transition metal catalysts through methane decomposition",
    authors: "G. Urdiana, R. Valdez, G. Lastra, M.Á. Valenzuela, A. Olivas",
    journalInfo: "Materials Letters, 2018, 217, 9–12",
    doi: "https://doi.org/10.1016/j.matlet.2018.01.093",
  },
  {
    title: "'In Vitro' Comparison of K3XF and TFA Cyclic Fatigue Resistance in Continuous Rotation and Adaptive Motion",
    authors: "A.G. Carrillo-Varguez, L.H. Carrillo-Várguez, B. González-Vizcarra, L.J. Villarreal-Gómez, M.A. Cadena-Alcántar, R. Valdez-Castro",
    journalInfo: "Revista Mexicana de Ingeniería Biomédica, 2018, 39, 44–51",
    doi: "",
  },
  {
    title: "Highly selective CuO/γ–Al2O3 catalyst promoted with hematite for efficient methanol dehydration to dimethyl ether",
    authors: "M.A. Armenta, R. Valdez, J. M. Quintana, R. Silva-Rodrigo, L. Cota, A. Olivas",
    journalInfo: "International Journal of Hydrogen Energy, 2018, 43, 6551–6560",
    doi: "https://doi.org/10.1016/j.ijhydene.2018.02.051",
  },
  {
    title: "Ordered Mesoporous Carbon Decorated with Magnetite for the Detection of Heavy Metals by Square Wave Anodic Stripping Voltammetry",
    authors: "C. M. Quiroa-Montalván, L.E. Gómez-Pineda, L. Álvarez-Contreras, R. Valdez, N. Arjona, M. T. Oropeza-Guzmán",
    journalInfo: "Journal of The Electrochemical Society, 2017, 164, B304–B313",
    doi: "https://doi.org/10.1149/2.0121705jes",
  },
  {
    title: "Effect of betaine in the successful synthesis of CoFe2O4 containing octahedron nanoparticles for electrocatalytic water oxidation",
    authors: "R. Valdez, A. Olivas, D. B. Grotjahn, E. Barrios, N. Arjona, R. Antaño, M.T. Oropeza-Guzmán",
    journalInfo: "Applied Surface Science, 2017, 426, 980–986",
    doi: "https://doi.org/10.1016/j.apsusc.2017.07.262",
  },
  {
    title: "Synthesis and characterization of mesoporous supports doped with NiW/Gax for hydrodesulfurization of DBT",
    authors: "A. Olivas, P.A. Luque, C.M. Gómez-Gutiérrez, D.L. Flores, R. Valdez, L. Escalante, P. Schacht, R. Silva-Rodrigo",
    journalInfo: "Catalysis Communications, 2017, 91, 67–71",
    doi: "https://doi.org/10.1016/j.catcom.2016.12.012",
  },
  {
    title: "Redox reaction of nitric oxide and carbon monoxide over Fe2O3 and Co3O4 phases",
    authors: "L.A. Flores-Sanchez, J.M. Quintana-Melgoza, R. Valdez, A. Olivas, M. Avalos-Borja",
    journalInfo: "Reaction Kinetics, Mechanisms and Catalysis, 2016, 117, 593–604",
    doi: "https://doi.org/10.1007/s11144-015-0946-3",
  },
  {
    title: "Nanosheets of Co-(Ni and Fe) layered double hydroxides for electrocatalytic water oxidation reaction",
    authors: "Ricardo Valdez, Douglas B Grotjahn, Diane K. Smith, Juan M. Quintana, Amelia Olivas",
    journalInfo: "International Journal of Electrochemical Science, 2015, 10, 909–918",
    doi: "https://doi.org/10.20964/2015.01.61",
  },
  {
    title: "Effect of the acidity of alumina over Pt, Pd, and Pt–Pd (1:1) based catalysts for 2-propanol dehydration reactions",
    authors: "R. Valdez, B. Pawelec, J.M. Quintana, A. Olivas",
    journalInfo: "Fuel, 2013, 105, 688–694",
    doi: "",
  },
];

// Helper function to extract year from journalInfo
const getYear = (journalInfo) => {
  const match = journalInfo.match(/\b\d{4}\b/);
  return match ? parseInt(match[0]) : 0;
};

// Sort publications by year in descending order
const sortedResearch = [...researchData].sort((a, b) => { // Renamed from sortedPublications
  const yearA = getYear(a.journalInfo);
  const yearB = getYear(b.journalInfo);
  return yearB - yearA;
});

function Research() { // Renamed from Publications
  return (
    <Container fluid className="research-section"> {/* Consider renaming class if desired */}
      <Container>
        <h1 className="section-heading">
          Our <strong className="highlight">Research</strong> {/* Changed title */}
        </h1>
        <p className="section-description">
          Recent research papers and academic contributions.
        </p>
        {sortedResearch.map((pub, index) => ( // Renamed from sortedPublications
          <Card key={index} className="publication-card-view mb-4"> {/* Class name can remain or change */}
            <Row className="g-0">
              {index % 2 === 0 ? (
                // Image on the left for even-indexed items
                <>
                  <Col md={4} className="d-flex align-items-center justify-content-center p-3">
                    <Card.Img 
                      src={pub.graphicalAbstractSrc || "https://via.placeholder.com/300x150?text=Graphical+Abstract"} 
                      alt={`Graphical Abstract for ${pub.title}`}
                      style={{ maxHeight: '150px', objectFit: 'contain' }} 
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body> 
                      <div>
                        <Card.Title>{pub.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Authors: <HighlightedAuthors authors={pub.authors} /></Card.Subtitle>
                        <Card.Text>
                          Published in: {pub.journalInfo}
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Col>
                </>
              ) : (
                // Image on the right for odd-indexed items
                <>
                  <Col md={8}>
                    <Card.Body> 
                      <div>
                        <Card.Title>{pub.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Authors: <HighlightedAuthors authors={pub.authors} /></Card.Subtitle>
                        <Card.Text>
                          Published in: {pub.journalInfo}
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Col>
                  <Col md={4} className="d-flex align-items-center justify-content-center p-3">
                    <Card.Img 
                      src={pub.graphicalAbstractSrc || "https://via.placeholder.com/300x150?text=Graphical+Abstract"} 
                      alt={`Graphical Abstract for ${pub.title}`}
                      style={{ maxHeight: '150px', objectFit: 'contain' }} 
                    />
                  </Col>
                </>
              )}
            </Row>
            <Row className="g-0">
              <Col className="text-center py-3"> 
                <Card.Link href={pub.doi || "#"} target="_blank" rel="noreferrer">
                  View Paper
                </Card.Link>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </Container>
  );
}

export default Research; // Renamed from Publications