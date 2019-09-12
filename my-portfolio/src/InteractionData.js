const interactionData = {
    interactionHUD: {
      graduationPhotos:{
        view: [
          { subtitle: "Text1",
            audioPath: "gradP_view_1",
            image: "gradP_view_1"
          },
          { subtitle: "Text2",
            audioPath: "gradP_view_2",
            image: "gradP_view_2"
          },
          { subtitle: "Text3",
            audioPath: "gradP_view_3",
            image: "gradP_view_4"
          }
        ]
      },   
      chessChampionship:{
        lookAt:[
          { subtitle: "Minha primeira medalha, ganhei no campeonato de xadrez. Sempre falo dessa medalha, mas na verdade, só conseguimos ganhar na sorte, pois tinham 4 grupos competindo",
            audioPath: "chess_look_1"
          }
        ]
      },
      graduationFrame:{
        lookAt:[
          { subtitle: "Lembro que faltava muito nas aulas pra jogar... se bem que a faculdade era sobre jogos, então eu estava estudando remotamente?",
            audioPath: "gradF_look_1"
          }
        ],
        view:[
          { subtitle: "Foi bem divertido fazer essa faculdade. Pena que foi muito abrangente.",
            audioPath: "gradF_view_1",
            image: "gradF_view_1"
          }
        ]
      },
      feedPots:{
        lookAt:[
          { subtitle: "Eu amo meus gatos.",
            audioPath: "feedP_look_1"
          }
        ],
        animation:[
          { name: "feedPots",
            subtitle: "Text1",
            audioPath: "feedP_anim_1"
          }
        ]
      },
      
      closet:{
        animation:[
          { name:"withoutKey",
            subtitle: "Onde deixei minhas chaves?",
            audioPath: "closet_anim_1"
          },
          { name:"openCloset",
            subtitle: "FASOKFASOKFAS",
            audioPath: "cloaset_anim_2"
          }
        ],
        view:[
          //Unity 2018
          { subtitle: "Minha primeira vez no evento da Unity 2018 de São Paulo. Foi muito bom.",
            audioPath: "closet_view_1"
          },
          //Unity 2019
          { subtitle: "Gostei tanto que fui a segunda vez.",
            audioPath: "closet_view_2"
          },
          //Camiseta Hora de Aventura Longa
          { subtitle: "Eu aaaamo essa camiseta. A melhor.",
            audioPath: "closet_view_3"
          },
          //BLusa Cinza
          { subtitle: "É super fácil me reconhecer, sempre estou usando essa blusa.",
            audioPath: "closet_view_4"
          },
          //Orelhas e pata de gato
          { subtitle: "Q? ... Fetiches são estranhos",
            audioPath: "closet_view_5"
          }
        ]
      },
      closet_Key:{
        view:[       
          { subtitle: "Text1",
            audioPath: "closetKey_view_1",
            image: "closetKey_view_1"
          }
        ],
        animation:[
          { name: "gettingKey",
            subtitle: "Text1",
            audioPath: "closetKey_anim_1"
          }
        ] 
      },
      mug:{
        lookAt:[
          { subtitle:"Saudades de hora de aventura, o que sera que aconteceu com a dona porquinha?",
            audioPath:"mug_look_1"
          }
        ]
      },
      ukulele:{
        lookAt:[
          { subtitle:"Parece de brinquedo, mas tem um som poderoso.",
            audioPath:"ukulele_look_1"
          }
        ],
        animation:[
          { name: "ukulele",
            subtitle: "Text1",
            audioPath: "ukulele_anim_1"
          }
        ]
      },
      diary:{
        lookAt:[
          { subtitle:"Diários sempre tem coisas constrangedoras.",
            audioPath:"diary_look_1"
          }
        ],
        view:[
          {
            subtitle: "Text1",
            audioPath:"diary_view_1"
          }
        ]
      },
      smartphone:{
        lookAt:[
          {
            subtitle: "Sempre me perguntei se a Google já sabe tudo o que eu faço.",
            audioPath: "phone_look_1"
          }
        ],
        view:[
          //SMS (Voce ganhou um carro! Ligue para XxXxXx e use o código 213"
          { subtitle:"Será que alguém realmente caí nisso?",
            audioPath:"phone_view_1",
            image: "phone_view_1"
          },
          //Tinder (Mostra varias conversas nao orespondidas)
          {
            subtitle: "Hm..",
            audioPath: "phone_view_2"
          }
        ]
      },
      pc:{
        lookAt:[
          { subtitle: "Será que apaguei meu histórico?",
            audioPath: "pc_look_1"
          }
        ],
        view:[
          //Email (Email com uma proposta de "Vagas arrombadas" e o salario é um pão com manteiga - "Essa vaga parece boa").
          { subtitle:"Wow. Essa vaga parece muito boa.",
            audioPath:"pc_view_1",
            image: "pc_view_1"
          },
          { subtitle:"Text2",
            audioPath:"pc_view_2",
            image: "pc_view_2"
          },
          { subtitle:"Text3",
            audioPath:"pc_view_3",
            image: "pc_view_3"
          }
        ]
      }
    },
    getImages: function(name){
      var imagesPath = [];
      for (let i = 0; i < interactionData[name].view.length; i++) {
        imagesPath.push(interactionData[name].view[i].image);
      }
      return imagesPath;
    },
    getAllItems: function(){
      var items = [
        "graduationPhotos", "chessChampionship",
        "graduationFrame", "feedPots",
        "closet", "closet_Key",
        "mug", "ukulele",
        "diary", "smartphone", "pc"
      ];
      return items;
    }
}

export default interactionData;