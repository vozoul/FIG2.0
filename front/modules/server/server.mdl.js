import bodyParser from 'body-parser'
import { call } from '../../services/global.js'
import { needles, apiURL} from '../../services/config.js'

export const showAll = async (req, res) => {
  const payload = [{
    serverPicto: "/img/svg/dod.svg",
    serverTitle: "[FIG] Venez vous fendre la FIGUE !",
    serverIP: "51.178.138.85",
    serverPort: "27015",
    serverMap: "3xi_trainmap",
    serverStatus: "online",
    serverOptions: [{
      pic: "/img/svg/sourceBan.svg",
      alt: "Source ban"
    },{
      pic: "/img/svg/gameTracker.svg",
      alt: "game tracker"
    }],
    serverSlots: "32",
    playersOnline: ["Alpha Wolf", "PrincesseChieuse"],
    serverConnect: "steam://connect/51.178.138.85:27015"
  },{
    serverPicto: "/img/svg/mc.svg",
    serverTitle: "[FIG] Le monde cubic des FIGUES !",
    serverIP: "51.178.138.85",
    serverPort: "27016",
    serverStatus: "offline",
    serverVersion: "1.17.1",
    serverOptions: [{
      pic: "/img/svg/dynamap.svg",
      alt: "Dynamap"
    }],
    serverSlots: "20"
  },{
    serverPicto: "/img/svg/amongus.svg",
    serverTitle: "[FIG] Modded Among Us !",
    serverIP: "51.178.138.85",
    serverPort: "27017",
    serverMap: "skeld",
    serverStatus: "online",
    serverSlots: "15",
    playersOnline: ["Gobniou","DingoMorbid","KmradSilver","KMARTY","Loading...","M pti Bool","K@ng00rose","Jaye","Noémie","unL@pinR0se"]
  }];
  // const payload = call('GET', apiURL + "/servers/")
  res.render('pages/servers', {title: "SERVERS", servers: payload})
}

export const addOne = (req,res) => {}
export const modify = (req,res) => {}
export const remove = (req,res) => {}