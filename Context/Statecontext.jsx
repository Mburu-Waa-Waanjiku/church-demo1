"use client"

import { createContext, useState, useEffect, useContext, } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

  const [value, setValue] = useState("Word");

  const [spashPage, setSplashPage] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('splasher');
        if (loader)
          loader.style.display = 'none';
          setSplashPage(false) 
        }
    }, []);

  const [openMenu, setOpenMenu] = useState(false);
  const handleOpen = () => {
    setOpenMenu(true)
  }
  const handleClose = () => {
    setOpenMenu(false)
  }
  const menu = ["Preachings", "Music", "Word", "Preachers", "Events"]
  const constent = {
    Preachings: [
      {
        title: "Give Me This MOUNTAIN",
        Preacher: "Pst T",
        image: "https://i.ytimg.com/vi/ca_eZiQgxjE/hqdefault.jpg",
        link: "https://www.youtube.com/embed/FFnG43fcVko",
        date: "2 week ago"
      },
      {
        title: "In God We Trust",
        Preacher: "Pst Lilian",
        image: "https://i.ytimg.com/vi/6g_UmYZIHmc/hqdefault.jpg",
        link: "https://www.youtube.com/embed/GS9sIxI1r4U",
        date: "3 weeks ago"
      },
      {
        title: "In God We Trust",
        Preacher: "Pst Lilian",
        image: "https://i.ytimg.com/vi/dZc4z1pFRxE/hqdefault.jpg",
        link: "https://www.youtube.com/embed/wyMdc8IFy8M",
        date: "1 month ago"
      },
      {
        title: "The Things of GOD",
        Preacher: "Pst Allan Kyuna",
        image: "https://i.ytimg.com/vi/I4qjLA2VE8k/hqdefault.jpg",
        link: "https://www.youtube.com/embed/uL212K_RbJs",
        date: "1 month ago"
      },
      {
        title: "Sunday Service",
        Preacher: "Pst Lilian",
        image: "https://i.ytimg.com/vi/bVOFwyMtmFE/hqdefault.jpg",
        link:"https://www.youtube.com/embed/BDMjX9tuW00",
        date: "2 month ago"
      }
    ],
    Music: [
      {
        title: "Reaching Gods Garment",
        Preacher: "Praise Team",
        image: "",
        link: "https://www.youtube.com/embed/hoBX7tqhoBs",
        date: "2 weeks ago"
      },
      {
        title: "Reaching Gods Garment",
        Preacher: "Praise Team",
        image: "",
        link: "https://www.youtube.com/embed/Bltcn7-nOUg",
        date: "17-06-2023"
      },
      {
        title: "Reaching Gods Garment",
        Preacher: "Praise Team",
        image: "",
        link: "https://www.youtube.com/embed/UNSxgteSX0Y",
        date: "10-06-2023"
      },
      {
        title: "Reaching Gods Garment",
        Preacher: "Praise Team",
        image: "",
        link: "https://www.youtube.com/embed/lP9x4YAKIS8",
        date: "03-06-2023"
      },
    ],
    Word: [
      {
        title: "A Prayer for Enduring Marriages",
        Preacher: "Pst Allan",
        p1: "“However, each one of you also must love his wife as he loves himself, and the wife must respect her husband”—Ephesians 5:33",
        p2: "Sadly, marriage is under attack. It’s being devalued, avoided, redesigned, and mocked. But God designed marriage as a sacred union to be respected and revered, holy before Him. Unlike current cultural trends, marriage is not a legal contract but a covenant with God. It’s His idea, design, and set of laws surrounding it. Human laws do not trump His ways, and He has not given us the freedom to reinvent it. Marriage is vital to God’s plan because it represents the relationship between Jesus Christ and the Church. The breaking down of it on earth is the enemy at work to try and destroy God’s will for the Church. Revelation 19:7 paints the picture of what is to come with Christ and His Church.",
        p3: "“Let us rejoice and be glad and give Him glory! For the wedding of the Lamb has come, and His bride has made herself ready.”  Marriage is something to fight for, just like the Church of Jesus Christ is worth fighting for. If Christians are unwilling to fight for their marriages, how can they stand up and fight for the Church?",
        p4: "Believers in Jesus Christ must consider their earthly marriage covenants with reverence and commitment. Ephesians 5:25-33 explains the mystery of earthly marriage, designed to form an unbreakable bond between husband, wife, and God. He reveals the mystery of His Bride, the Church. “Husbands, love your wives, just as Christ loved the Church and gave Himself up for her to make her holy, cleansing her by the washing with water through word and to present her to Himself as a radiant Church, without stain or wrinkle or any other blemish, but holy and blameless.”",
        p5: " Ephesians 5:25-27 Marriage is our God-designed model for what the Church is to become, which is the body of Christ on earth. Ephesians 5:28-30 explains, “In this same way, husbands ought to love their wives as their own bodies.",
        image: "/prayer.png",
      },
      {
        title: "Where Did Jesus Die?",
        Preacher: "Pst T Mwangi",
        p1: "Jesus was crucified at a place called Golgotha also called Calvary. It is often referred to as \t\"the place of the skull\" due to its rocky appearance and the stone having the appearance of a skull. It is placed outside of Jerusalem’s city walls, where criminals were executed in order to separate them from the rest of society.",
        p2: "To those who believe, which includes the vast majority of followers of Christianity around the world, this place is a powerful symbol; one that has been venerated for generations. The death of Jesus is an important cornerstone in the Christian faith and Golgotha remains stamped upon its history being the place where Jesus died.",
        p3: "There are four accounts in the Gospels about Jesus' death at the place called Golgotha. The New Testament of the Bible contains four books that are called the Gospels. Each of these four books, Matthew, Mark, Luke (which are considered the synoptic gospels), and John, gives an account of Jesus' life, death, and resurrection.",
        p4: "At Golgotha Jesus died on the cross to make atonement for humankind's sins, demonstrating his immense love and self-sacrifice. After being beaten by roman guards and mocked by the people, Jesus was brought to Golgotha carrying his own cross.",
        image: "/cross4.png",
      },
    ],
    Preachers: [
      {
        title: "Bishp. Allan Kyula",
        image: "/Kyuna1.png",
      },
      {
        title: "Pastor T Mwangi",
        image: "/T.jpg",
      },
      {
        title: "Apst. Joshua Selman",
        image: "/Joshua selman2.jpg",
      },
    ],
    Events: [
      {
        title: "Reaching Gods Children",
        desc: "Preaching by reaching souls with needs",
        image: "/rema.jpg",
      },
    ]
  }
  const [openContent, setOpenContent] = useState(false);
  const [miniContent, setMiniContent] = useState(false);
  const [property, setProperty] = useState(null);
  const handleContentOpen = (e, item) => {
    setOpenContent(true);
  };
  const handleContentClose = () => {
    setOpenContent(false)
  };

  return (
    <Context.Provider
      value={{
        value,
        setValue,
        openMenu,
        setOpenMenu,
        handleOpen,
        handleClose,
        spashPage,
        menu,
        constent,
        openContent,
        handleContentOpen,
        handleContentClose,
        miniContent,
        setMiniContent,
        property,
        setProperty
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);