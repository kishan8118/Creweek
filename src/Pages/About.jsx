import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { VscQuote } from "react-icons/vsc";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Box
        // border="1px solid red"
        position="absolute"
        top={{ base: "61px", sm: "77px", md: "79px", lg: "110px", xl: "110px" }}
        backgroundImage="url(https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-executive-conference-about-page-hero-1.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
        w="100%"
        // style={{ filter: "brightness(70%)" }}
      >
        <Box
          bg="rgba(0, 0, 0, 0.6)"
          zIndex={11111}
          //   h="-webkit-fit-content"
        >
          {/* <Center> */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems={"center"}
            flexDirection="column"
            color="brand.200"
            p={7}
          >
            <Text fontSize="18px" lineHeight="36px" fontWeight="600">
              About CREWeek
            </Text>
            <Box backgroundColor="white" color="black" p={4} borderRadius="50%">
              <VscQuote size="1.5rem" />
            </Box>
            <Text
              fontSize="30pt"
              lineHeight="36px"
              textAlign="center"
              fontWeight="600"
              mb="30px"
              pt="30px"
            >
              Arguably the most <br /> important annual event on <br /> the
              energy industry’s <br /> calendar.”
            </Text>

            <Text fontSize="16px" lineHeight="22px">
              {" "}
              - Financial Times
            </Text>
            <Button
              m="30px 15px 0px"
              rightIcon={<ArrowForwardIcon />}
              bg="white"
              fontSize="18px"
              fontWeight="600"
            >
              REGISTER
            </Button>
          </Box>
        </Box>
        {/* </Center> */}
      </Box>

      <Center>
        <Box
          position="absolute"
          top={{
            base: "42rem",
            sm: "35rem",
            md: "35rem",
            lg: "39rem",
            xl: "35rem",
          }}
          w={{ base: "90%", sm: "90%", md: "95%", lg: "90%", xl: "60%" }}
        >
          <Box pb="30px" borderBottom="1px solid black">
            <Text fontSize="34px" lineHeight="40px" fontWeight="400">
              About CREWeek 2024
            </Text>
            <Text pt="10px" fontSize="22px" fontWeight="600" lineHeight="36px">
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics
            </Text>
          </Box>

          <Grid
            pt="60px"
            templateColumns={{
              base: "",
              sm: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={7}
          >
            <GridItem
              colSpan={{
                base: "1",
                sm: "1",
                md: "2",
                lg: "2",
                xl: "2",
              }}
            >
              <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
                CREWeek 2024 will explore strategies for a multidimensional,
                multispeed and multifuel energy transition. The drive for energy
                transition is reshaping the competitive landscape for companies
                and countries – creating new opportunities and risks across the
                energy value chain. The imperative to reduce emissions has grown
                in urgency. Yet expectations of a simple linear global
                transition have been shaken as climate goals compete with
                concerns over how to deliver economic growth while ensuring
                energy security, energy access, and affordability. The
                multidimensional energy transition reflects different realities
                and timelines by region, technology, industry strategies, the
                variety of social and political approaches and divergent
                national priorities in an increasingly multipolar world.{" "}
              </Text>
              <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
                CREWeek 2024 will offer insight into the road map for a
                multidimensional transition – what it means for markets,
                geopolitics, investment, supply chains and technology – and
                competitive strategies. As the first major global energy
                gathering post-COP28, CREWeek 2024 is a timely opportunity to
                share learnings, plans, and perspectives on the road map ahead.
                Join preeminent thought leaders from energy, finance,
                technology, and governments who will convene for dialogue on the
                agenda ahead as the world enters a new era of energy transition.{" "}
              </Text>
              <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
                Key questions addressed at CREWeek 2024:{" "}
              </Text>
              <UnorderedList pb="15px">
                <ListItem mb="6px">
                  <span>
                    <strong>Energy Markets - </strong>
                    How will supply and demand balance in a world of
                    uncertainty?
                  </span>
                </ListItem>
                <ListItem mb="6px">
                  <span>
                    <strong>Policy and Geopolitics - </strong>
                    How will growing global tensions and conflicts reshape the
                    international order?
                  </span>
                </ListItem>
                <ListItem mb="6px">
                  <span>
                    <strong>Company Strategies - </strong>
                    Who will prevail and what will be sustainable competitive
                    advantages for companies? Will companies be rewarded for
                    diversification?
                  </span>
                </ListItem>
                <ListItem mb="6px">
                  <span>
                    <strong>Power Markets in Transition - </strong>
                    What are the choices and challenges ahead in the face of
                    growing power demand and testing of resilience?
                  </span>
                </ListItem>
                <ListItem mb="6px">
                  <span>
                    <strong>New Supply Chains for Net Zero - </strong>
                    Where are the greatest stresses and sources of disruptions?
                    How will the market for hydrogen develop? What will
                    reshoring mean for energy?
                  </span>
                </ListItem>
                <ListItem mb="6px">
                  <span>
                    <strong>Capital Transition - </strong>
                    How will persistent inflation and the higher cost of capital
                    impact energy and infrastructure investment? What is the
                    future of carbon markets, and their impact? What are the
                    emerging financial strategies?
                  </span>
                </ListItem>
                <ListItem mb="6px">
                  <span>
                    <strong>Technology and Innovation - </strong>
                    What role will AI play? How can the deployment and scaling
                    of new technologies be accelerated? What are the next
                    breakthroughs? What are the changing roles for nuclear
                    power, geothermal, mobility, CCUS, battery storage and
                    renewables?
                  </span>
                </ListItem>
                <ListItem mb="6px">
                  <span>
                    <strong>Climate and Sustainability -</strong>
                    How will decarbonization progress and how will climate goals
                    compete with priorities around economic growth, security,
                    affordability and access? What will be the approaches to
                    implementing the COP28 commitments?
                  </span>
                </ListItem>
                <ListItem mb="6px">
                  <span>
                    <strong>Just Transition -</strong>
                    How will a fair, equitable and just transition unfold that
                    balances economic growth and emission reductions? What are
                    the challenges for the Global South?
                  </span>
                </ListItem>
                <ListItem mb="6px">
                  <span>
                    <strong>Minerals and Metals -</strong>
                    Where will critical minerals and metals be sourced? How will
                    this shape the energy transition, and future geopolitics?
                  </span>
                </ListItem>
              </UnorderedList>

              <Text mb="24px" lineHeight="1.6" fontSize="16px" fontWeight="500">
                For further insight DOWNLOAD The Road Map for a Multidimensional
                Energy Transition{" "}
              </Text>
              <Text mb="24px" lineHeight="1.6" fontSize="15px" fontWeight="500">
                Through a diverse set of programs and platforms CREWeek will
                highlight the linkages of these topics across industries and
                showcase the partnerships and collaborative models that are
                transforming energy.
              </Text>
            </GridItem>

            <GridItem>
              <Box>
                <Image src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek2023-about-page-stats-side-bar-2.jpg" />
              </Box>
              <Box pt="30px">
                <Text lineHeight="1.6" mb="24px" fontWeight="600">
                  Our Mission
                </Text>
                <Text
                  mb="24px"
                  lineHeight="1.6"
                  fontSize="16px"
                  fontWeight="500"
                >
                  CREWeek brings together global leaders to advance new ideas,
                  insight and solutions to the biggest challenges facing the
                  future of energy, the environment, and climate. CREWeek is
                  widely considered to be the most prestigious annual gathering
                  of CEOs and Ministers from global energy and utilities, as
                  well as automotive, manufacturing, policy and financial
                  communities, along with a growing presence of tech. It has
                  been described by the Financial Times as the ‘the Davos of
                  energy,’ and by Politico as the “industry’s Super Bowl.” CNBC
                  called it “the world’s preeminent energy conference.” CREWeek
                  was rated one of the top five overall “corporate leader”
                  conferences in the world.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Center>

      <Center>
        <Box
          position="absolute"
          top={{
            base: "280rem",
            sm: "160rem",
            md: "130rem",
            lg: "120rem",
            xl: "125rem",
          }}
          w={{ base: "90%", sm: "90%", md: "95%", lg: "90%", xl: "60%" }}
        >
          <Box pb="30px" borderBottom="1px solid black">
            <Text fontSize="34px" lineHeight="40px" fontWeight="400">
              CREWeek Programs{" "}
            </Text>
          </Box>

          <Grid
            pt="60px"
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={7}
          >
            <GridItem
              colSpan={{
                base: "1",
                sm: "1",
                md: "2",
                lg: "2",
                xl: "2",
              }}
            >
              <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
                CREWeek consists of two concurrent programs – the Executive
                Conference and the Innovation Agora.{" "}
              </Text>
              <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
                CREWeek consists of two concurrent programs – the Executive
                Conference and the Innovation Agora. The Executive Conference
                provides an integrated framework for understanding what’s ahead
                for global energy markets and geopolitics. Corporate executives
                and senior government officials convene to address the defining
                trends and critical issues that are shaping the energy
                landscape. It is here where the worlds of energy, finance,
                manufacturing, mobility, technology, and policy converge.
                Through high-level dialogues and a global platform to share
                strategic visions, business leaders and policymakers advance
                ideas that will define the future of industry.
              </Text>
              <Text mb="24px" fontSize="16px" fontWeight="500">
                The Innovation Agora is an open marketplace for the exchange of
                insights and solutions on energy innovation and emerging
                technologies. It is also a forum to learn and connect, including
                an exciting program with many sessions and formats designed to
                facilitate meaningful dialogue and stimulate new thinking and
                learning. The program covers a wide array of transformational
                technology platforms ranging from digitalization, AI, analytics,
                and connectivity to robotics, blockchain, additive manufacturing
                and mobility, and including a continued focus on new
                technologies for decarbonization. The Agora convenes a
                remarkable community of technologists, investors, thought
                leaders, government officials and corporate innovators—all
                dedicated to creating new pathways and solutions for our energy
                future.
              </Text>
            </GridItem>

            <GridItem>
              <Box w="100%">
                <Image
                  w="100%"
                  src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-EC-about-page-promo-16-9-1.jpg"
                />
                <Text p="15px 0px 15px 0px" fontWeight="semibold">
                  CREWeek Executive Conference
                </Text>
              </Box>
              <Box>
                <Image
                  w="100%"
                  src="https://cdn.ihsmarkit.com/www/images/0224/about-agora.png"
                />
                <Text p="15px 0px 15px 0px" fontWeight="semibold">
                  Innovation Agora
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Center>

      <Center>
        <Box
          position="absolute"
          top={{
            base: "400rem",
            sm: "255rem",
            md: "175rem",
            lg: "165rem",
            xl: "170rem",
          }}
          w={{ base: "90%", sm: "90%", md: "95%", lg: "90%", xl: "60%" }}
        >
          <Box pb="30px" borderBottom="1px solid black">
            <Text fontSize="34px" lineHeight="40px" fontWeight="400">
              The CREWeek Community{" "}
            </Text>
          </Box>

          <Box pb="60px" pt="30px">
            <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
              The CREWeek community is a unique gathering of top global energy
              executives and leading members of the industrial, automotive,
              manufacturing and technology communities, as well as public
              policy-officials, financial institutions, tech, and thought
              leaders.{" "}
            </Text>
            <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
              This March, we were delighted to reconvene the CERAWeek community
              in Houston. This year’s theme was “Navigating a Turbulent World:
              Energy, Climate and Security”. The global energy industry is
              facing a welter of uncertainty and change -- driven by the effects
              of the global pandemic; shifting geopolitics and a war launched by
              one of the world’s major energy powers; high energy prices; supply
              chain and infrastructure constraints; and economic instability.
            </Text>
            <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
              CERAWeek 2023 explored in-depth the strategies for a world in
              turmoil. The energy industry continues to grapple with the twin
              challenge of meeting the world’s growing energy demand while
              reducing emissions. Designing the world’s energy systems for a
              lower carbon future remains paramount. How will the industry
              navigate the turbulence and lead the global transition to a
              sustainable, secure, abundant and affordable future? CERAWeek
              offered insight on the energy future -- and on emerging strategies
              and solutions.
            </Text>
            <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
              Previous speakers at CERAWeek have included Presidents Bill
              Clinton and George W. Bush, Prime Minister of Canada Justin
              Trudeau, President Iván Duque Márquez of Colombia, Mexican
              President Enrique Peña Nieto, Rwanda President Paul Kagame,
              Denmark’s Crown Princess Marie, Nobel Laureate Robert Schiller,
              U.S. Special Presidential Envoy for Climate John Kerry, U.S.
              Energy Secretary Jennifer Granholm, U.S. Environmental Protection
              Agency Administrator Michael Regan, Senators Joe Manchin, Lisa
              Murkowski, and Dan Sullivan, chief executive officers of
              Accenture, Amazon Web Services, bp, Chevron, Dow, Électricité de
              France, ExxonMobil, Ford Motor Company, Rivian, TotalEnergies -
              along with Bill Gates, Mary Barra, Bill Ford, Henry Kissinger,
              Michael Pompeo, Fed Chairman Alan Greenspan, Fed Chairman Ben
              Bernanke, author Walter Isaacson, and FedEx CEO Fred Smith.
            </Text>
            <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
              Daniel Yergin, S&P Global Vice Chairman, serves as Co-Chairman of
              CERAWeek. Dr. Yergin is a highly respected authority on energy,
              international politics and economics. He was described by Fortune
              as “one of the planet’s foremost thinkers about energy and its
              implications”; by TIME as the “one man whose opinion matters more
              than any other on global energy markets”; and by the New York
              Times as “America’s most influential energy pundit.” Dr. Yergin is
              author of the Pulitzer Prize- winning book, as well as The Quest:
              Energy, Security, and the Remaking of the Modern World.
            </Text>
          </Box>
        </Box>
      </Center>

      <Center>
        <Box
          position="absolute"
          top={{
            base: "540rem",
            sm: "320rem",
            md: "230rem",
            lg: "210rem",
            xl: "220rem",
          }}
          w={{ base: "90%", sm: "90%", md: "95%", lg: "90%", xl: "60%" }}
        >
          <Box pb="30px" borderBottom="1px solid black">
            <Text fontSize="34px" lineHeight="40px" fontWeight="400">
              CERAWeek History{" "}
            </Text>
          </Box>

          <Box pb="60px" pt="30px">
            <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
              In 1983, Cambridge Energy Research Associates (CERA) was founded
              in Cambridge, Massachusetts by Daniel Yergin and James Rosenfield.
              The energy research and consulting firm quickly became known for
              its critical knowledge and independent analysis on energy markets,
              geopolitics, industry trends, technology and strategy.
            </Text>
            <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
              Each year, CERA clients gathered for a few days in Houston, Texas
              to attend the executive conference where they gained insight into
              the energy future while connecting with their peers. Over time,
              the program was expanded to five days of informative sessions and
              networking opportunities—and named CERAWeek.
            </Text>
            <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
              Introduced in 2017, the Innovation Agora features exciting new
              programs and formats dedicated to emerging technologies. The
              Innovation Agora convenes a remarkable community of technologists,
              investors, thought leaders, government officials and corporate
              innovators to facilitate meaningful dialogue on the
              transformational technology platforms that are creating new energy
              pathways in the energy industry.
            </Text>
            <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
              The conference is distinctive in the extraordinary depth and
              breadth of its content, attracting global thought leaders and
              shaping the global energy agenda.
            </Text>
          </Box>
        </Box>
      </Center>

      <Box
        position="absolute"
        top={{
          base: "610rem",
          sm: "360rem",
          md: "260rem",
          lg: "240rem",
          xl: "250rem",
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export default About;
