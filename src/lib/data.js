import chain from "../assets/chain-9365116-7621444.svg";
import fire from "../assets/1f4a5.svg";
import image1 from "../assets/Image 1.svg";
import creative from "../assets/Creative 1.svg";
import banner from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import bigIdea from "../assets/The big idea.svg";
import arrow from "../assets/arrow.svg";
import rulesImg from "../assets/7450159 1.svg";
import criteriaImg from "../assets/8046554 1.svg";
const data = {
  navbar: {
    links: [
      {
        text: "timeline",
        url: "/",
      },
      {
        text: "overview",
        url: "/",
      },
      {
        text: "FAQs",
        url: "/",
      },
      {
        text: "contact",
        url: "/",
      },
    ],
  },
  hero: {
    titleTop: "getlinked Tech",
    titleDown: "Hackathon",
    chain: chain,
    fire: fire,
    text: "Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize",
    countdown: ["00", "00", "00"],
    creative: creative,
    image1: image1,
    banner: banner,
  },
  intro: {
    title: "Introduction to getlinked tech",
    text: "Our tech hackathon is a melting pot of visionaries, and its purpose is asclear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,that's what we're all about!",
    image: bigIdea,
    arrow: arrow,
  },
  rules: {
    title: "Rules",
    title2: "Guidelines",
    text: "Our tech hackathon is a melting pot of visionaries, and its purpose is asclear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,that's what we're all about!",
    image: rulesImg,
  },
  criteria: {
    title: "Judgin Criteria",
    title2: "Key Attributes",
    text: [
      {
        title: "Innovation and Creativity:",
        body: " Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
      },
      {
        title: "Functionality:",
        body: " Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
      },
      {
        title: "Impact and relevance:",
        body: " Determine the potential impact of the solution  in the real world.Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
      },
      {
        title: "Technical complexityy:",
        body: " Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
      },
      {
        title: "Adherence to Hackathon rules:",
        body: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements. ",
      },
    ],
    image: criteriaImg,
  },
};

export default data;
