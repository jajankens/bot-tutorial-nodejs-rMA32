var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/; 
      botRegexOh = /^\/oh/; botRegexRiot = /^\/riot/; botRegexStandings = /^\/standings/;
      botRegexProp = /^\/prop/;botRegexKys = /^\/kys/; botRegexSlam = /^\/slam/; botRegexBrye = /^\/brye/;
      botRegexGian = /^\/gian/; botRegexScrotes = /^\/scrotes/; botRegexShaki = /^\/shaki/; botRegexHype = /^\/hype/;
      botRegexDaf = /^\/dafuq/; botRegexMA32 = /^\/pending/; botRegexTrade = /^\/trade/; botRegexShady = /^\/shady/;
      botRegex4thDown = /^\/4thdown/; botRegexStatCap = /^\/statcap/;
      botRegexSchedule = /^\/schedule/;
      botRegexMulti = /^\/mstream/i;
      botRegexHelp = /^\/help/;
      
      botRegexBitch = /^\/bitch/; botRegexGame = /^\/game/; botRegexBG = /^\/bg/; botRegexClown = /^\/clowning/; botRegexNoVance = /^\/novance/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  
  else if(request.text && botRegexHelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("HELP MENU\n ----DL Commands----\n -To view a specific team's schedule:\n/sdl [team abbreviation]\n -To view a specific team's depth chart:\n/ddl [team abbreviation]\n -To view the league's weekly schedule:\n /schedule\n -To view the league's current standings:\n /standings\n -To view a player or players based on name:\n /pdl [name]\n ----Trades/POS Changes/Suspensions----\n -To view trades, position changes, and suspensions:\n /trades\n ----Rules----\n -To view all rules\n /Rules\n -To view statcaps ad hoc:\n /statcap\n -To view 4th down rules ad hoc:\n /4thdown\n ----STREAMS----\n -To post a singular stream:\n/twitch [username] [short description optional]\n -To post multiple streams at once (platform doesn't matter):\n /mstream [username]/[username]\n NOTE: '/' between usernames is REQUIRED.\n ----FOR FUN----\n Just try them out:\n /duck\n /salt\n /game\n /bg\n /clowning\n /bitch");
    this.res.end();
  } 
  
   else if(request.text && botRegexSchedule.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/rcfm/schedules");
    this.res.end();
  } 
  
   else if(request.text && botRegexMulti.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://multistre.am/"+request.text.substring(9,request.text.length)+"/layout4/");
    this.res.end();
  } 
  
  else if(request.text && botRegexClown.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.theclownschool.com/online-classes");
    this.res.end();
  } 
  
  
  
  else if(request.text && botRegexOh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/640x458.jpeg.3b24480441b24aa3a67c3948cd4a7afd.large");
    this.res.end();
  } 
  else if(request.text && botRegexRiot.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/fDO2Nk0ImzvvW/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexProp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/409x327.jpeg.08b5d95c51bb4897835cfe6b514f2f52.large");
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.wikihow.com/Tie-a-Noose");
    this.res.end();
  } 
  else if(request.text && botRegexSlam.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/profile_images/587294731471757313/ZpI5PfKq.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexDaf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexBrye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/600x490.jpeg.b31d5153fb474d9bb18dd51b3d650afe.large");
    this.res.end();
  } 
  else if(request.text && botRegexGian.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/9V6ZnvD.png");
    this.res.end();
  }
  else if(request.text && botRegexShady.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/uTw1Pf2CGuAHm/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexScrotes.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1006x1340.jpeg.730381e4280e4028b8375432af14f39f.large");
    this.res.end();
  } 
  else if(request.text && botRegexShaki.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/305x375.jpeg.a8dd3aa18c7a4963a553e6dc16bcb100.large");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    postMessage("http://daddyleagues.com/rcfm/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexStandings.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/rcfm/standings/league");
    this.res.end();
  }
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/rcfm/maddenrating/");
    this.res.end();
  }
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  }
   else if(request.text && botRegexHype.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/2dto08eaL5vXO/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/rcfm/rules");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/rcfm/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/rcfm/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  
  
   else if(request.text && botRegex4thDown.test(request.text)) {
    this.res.writeHead(200);
    postMessage("-If you are on or past your opponents 35 yard line, and it is 4th & 2 or below, you may go for it \n -If you are up by 14 or more points you are not allowed to go for it This applies during any point of the match. \n -If you are losing by 14 or more points during the 3rd quarter you may go for it. \n -If you are losing by 3 or more points in the 4th quarter you may go for it. The down and distance does not matter in this situation. \n -If you are tied in the final two minutes of the 4th quarter you may go for it. The scenario must be sim related... just ask yourself if an NFL team would do it. \n -You are allowed one coaches decision a game. Any score, any quarter, regardless of field position. \n -You can attempt to convert a 4th down anywhere on the field, only if that conversion and new set of downs will allow you to run the game clock to 0:00 in the 4th quarter.");
    this.res.end();
  } 
  
  else if(request.text && botRegexStatCap.test(request.text)) {
    this.res.writeHead(200);
    postMessage("For a single player, do not exceed: \n 224 yards rushing \n 224 yards receiving \n 500 yards passing \n 4 rushing TDs \n 4 receiving TDs \n 5 passing TDs \n 5 sacks");
    this.res.end();
  }
  
 else if(request.text && botRegexBitch.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/480x268.gif.4eee574ceacc4985ad3ff5047fb60adc.large");
    this.res.end();
  }  

   else if(request.text && botRegexGame.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://giphygifs.s3.amazonaws.com/media/d9ltR6odFmQsE/giphy.gif");
    this.res.end();
  }  
  
   else if(request.text && botRegexNoVance.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/26uf82TQ93IGhfasU/giphy.gif");
    this.res.end();
  } 
  
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  
  else if(request.text && botRegexBG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.kym-cdn.com/photos/images/original/000/802/696/6c6.jpg")
    this.res.end();
  } 
  
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexMA32.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/12hVrn7ShR3An6bP5uBF3gaoTQQgVciC-0RqtWVZ39Ls/edit?usp=sharing");
    this.res.end();
  }
  else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1IHU40e5cENegADwlVOTuZilNCgYlAIKBQ4hv4wW1MhA/edit#gid=0");
    this.res.end();
  }
  
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
