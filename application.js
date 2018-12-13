$(document).ready(function() {
  const myList = [
    "go to school buy a mac get good grades buy a car go to work",
    "fintech relo flexible hours work from home 401k Roth-IRA",
    "GMO PPO IPO C3PO FOMO YOLO UI UX HMO BB8 CRM CMS PX CEM ICO",
    "do the dew i'm lovin' it it's miller time celebrate football",
    "gatorade monster rockstar redbull powerade vitamin water",
    "BTC XMR GVT EOS ETH QSP LSK VEN NEO LTC BCC ICX XLM",
    "cyber warriors hackers nation state spies crackers script kiddies",
    "have kids early save for the future plan ahead watch the news",
    "costco sams club kmart walmart target jcpenny sears kohls", 
    "the war on drugs palestine sida runaway greenhouse effect",
    "find a hobby pay for cable water your lawn be a good neighbor",
    "HUP INT QUIT ILL TRAP ABRT EMT FPE KILL BUS SEGV SYS PIPE ALRM TERM URG STOP TSTP CONT CHLD TTIN TTOU IO XCPU XFSZ VTALRM PROF WINCH INFO USR1 USR2"
  ]
 let rand = myList[Math.floor(Math.random() * myList.length)];
 $('#mantra')[0].innerHTML = "> " + rand;

  var menu = $('#menu');
  $('#pattern').on({
    mouseenter : function() {
      menu.fadeToggle(300);
      return false;
    },
    mouseleave : function() {
      menu.fadeToggle(300);
      return false;
    },
    click : function() {
      if ( menu.css('display') === 'none' ) {
        menu.fadeIn(300);
      }
    }
  });
});
