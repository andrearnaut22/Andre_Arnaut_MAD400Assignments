import { IContent } from '../models/icontent';

export class MockContentTs {
    public static martialArtsArray: IContent[] = 
[{
      id: 0,
      discipline: "Wrestling",
      description: "Involves different grappling-type techniques such as clinch fighting, throws and takedowns, joint locks, pins and other grappling holds",
      imgSrc: "https://medias.paris2024.org/uploads/2020/11/GettyImages-1332843384-scaled.jpeg?x-oss-process=image/resize,w_2560,h_1707,m_lfit/format,jpeg",
      type: "Grappling",
      tags: ["Wrestling", "NCAA", "Grappling"],
      author: "Andre Arnaut"
    },
    {
      id: 1,
      discipline: "Muay Thai",
      description: "Referred to as Thai boxing, it is a combat sport that uses stand-up striking along with various clinching techniques.",
      imgSrc: "https://cdn.onefc.com/wp-content/uploads/2020/09/Felipe-Lobo-Yodpanomrung-Jitmuangnon-Muay-Thai-1920X1280-29.jpg",
      type: "Striking",
      tags: ["Muay Thai", "Kickboxing", "Striking"],
      author: "Andre Arnaut"
    },
    {
      id: 2,
      discipline: "Brazilian Jiu-Jitsu",
      description: "Brazilian jiu-jitsu is a self-defence martial art and combat sport based on grappling, ground fighting, and submission holds.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/GABRIEL_VELLA_vs_ROMINHO_51.jpg/1200px-GABRIEL_VELLA_vs_ROMINHO_51.jpg",
      type: "Grappling",
      tags: ["Brazilian", "ADCC", "Grappling"],
      author: "Andre Arnaut"
    },
    {
      id: 3,
      discipline: "Combat Sambo",
      description: "A martial art with Soviet origins, an internationally practiced combat sport, and a recognized style of amateur wrestling included by UWW in the World Wrestling Championships along with Greco-Roman wrestling and freestyle wrestling.",
      imgSrc: "https://sambo.sport/upload/iblock/a8f/a8faffa27366c6035352a43f945b5dbd.jpg",
      type: "Hybrid",
      tags: ["Sambo", "Contact Sambo", "Hybrid"],
      author: "Andre Arnaut"
    }];
    
}

export const invalidmartialArray: IContent = {
  id: -1,
  discipline: "",
  author: "",
  type: ""
};