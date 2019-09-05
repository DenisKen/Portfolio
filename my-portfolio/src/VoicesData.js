const voices = {
    graduationPhotos:{
      view: [
        { subtitle: "Text1",
          audioPath: "Path1"
        },
        { subtitle: "Text2",
          audioPath: "Path2"
        },
        { subtitle: "Text3",
          audioPath: "Path3"
        }
      ]
    },
    keys:{
      view:[       
        { subtitle: "Text1",
          audioPath: "Path1"
        }
      ],
      animation:[
        { name: "gettingKey",
          subtitle: "Text1",
          audioPath: "Path1"
        }
      ]
    },
    chessChampionship:{
      lookAt:[
        {
          subtitle: "Minha medalha de prata do campeonato de xadrez. Sempre falo dessa medalha, mas na verdade, só conseguimos ganhar na sorte, pois tinham 4 grupos competindo",
          audioPath: "Path1"
        }
      ]
    },
    graduationFrame:{
      lookAt:[
        { subtitle: "Lembro que faltava muito nas aulas pra jogar... se bem que a faculdade era sobre jogos, então eu estava estudando remotamente?",
          audioPath: "Path1"
        }
      ],
      view:[
        { subtitle: "Foi bem divertido fazer essa faculdade. Pena que foi muito abrangente.",
          audioPath: "Path1"
        }
      ]
    },
    feedPots:{
      lookAt:[
        { subtitle: "Eu amo meus gatos.",
          audioPath: "Path1"
        }
      ],
      animation:[
        { name: "feedPots",
          subtitle: "Text1",
          audioPath: "Path1"
        }
      ]
    },
    closet:{
      animation:[
        { name:"withoutKey",
          subtitle: "Onde deixei minhas chaves?",
          audioPath: "Path1"
        },
        { name:"openCloset",
          subtitle: "",
          audioPath: ""
        }
      ],
      view:[
        //Unity 2018
        { subtitle: "Minha primeira vez no evento da Unity 2018 de São Paulo. Foi muito bom.",
          audioPath: "Path1"
        },
        //Unity 2019
        { subtitle: "Gostei tanto que fui a segunda vez.",
          audioPath: "Path2"
        },
        //Camiseta Hora de Aventura Longa
        { subtitle: "Eu aaaamo essa camiseta. A melhor.",
          audioPath: "Path3"
        },
        //BLusa Cinza
        { subtitle: "É super fácil me reconhecer, sempre estou usando essa blusa.",
          audioPath: "Path4"
        },
        //Orelhas e pata de gato
        { subtitle: "Q? ... Fetiches são estranhos",
          audioPath: "Path5"
        }
      ]
    },
    mug:{
      lookAt:[
        {
          subtitle:"Saudades de hora de aventura, o que sera que aconteceu com a dona porquinha?",
          audioPath:"Path1"
        }
      ]
    },
    ukulele:{
      lookAt:[
        { subtitle:"Parece de brinquedo, mas tem um som poderoso.",
          audioPath:"Path1"
        }
      ],
      animation:[
        {
          name: "ukulele",
          subtitle: "Text1",
          audioPath: "AudioPath"
        }
      ]
    },
    diary:{
      lookAt:[
        { subtitle:"Diários sempre tem coisas constrangedoras.",
          audioPath:"Path1"
        }
      ],
      view:[
        {
          subtitle: "Text1",
          audioPath:"Path1"
        }
      ]
    },
    smartphone:{
      lookAt:[
        {
          subtitle: "Sempre me perguntei se a Google já sabe tudo o que eu faço.",
          audioPath: "Path1"
        }
      ],
      view:[
        //SMS (Voce ganhou um carro! Ligue para XxXxXx e use o código 213"
        { subtitle:"Será que alguém realmente caí nisso?",
          audioPath:"Path1"
        },
        //Tinder (Mostra varias conversas nao orespondidas)
        {
          subtitle: "Hm..",
          audioPath: "Path1"
        }
      ]
    },
    pc:{
      lookAt:[
        { subtitle: "Será que apaguei meu histórico?",
          audioPath: "Path1"
        }
      ],
      view:[
        //Email (Email com uma proposta de "Vagas arrombadas" e o salario é um pão com manteiga - "Essa vaga parece boa").
        { subtitle:"Wow. Essa vaga parece muito boa.",
          audioPath:"Paht1"
        },
        { subtitle:"Text2",
          audioPath:"Paht2"},
        { subtitle:"Text3",
          audioPath:"Paht3"}
      ]
    }
}

export default voices;