// Created by iWeb 3.0.4 local-build-20120629

function createMediaStream_id5()
{return IWCreatePhotocast("file://localhost/Users/nordin2/Dropbox/Public/web/Greg_Nordins_Blog/Moab_2010_Day_1_files/rss.xml",true);}
function initializeMediaStream_id5()
{createMediaStream_id5().load('file://localhost/Users/nordin2/Dropbox/Public/web/Greg_Nordins_Blog',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget2'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id5',{pageIndex:0}));});}
function layoutMediaGrid_id5(range)
{createMediaStream_id5().load('file://localhost/Users/nordin2/Dropbox/Public/web/Greg_Nordins_Blog',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id5',new IWPhotoGridLayout(3,new IWSize(177,177),new IWSize(177,45),new IWSize(212,237),27,27,0,new IWSize(12,13)),new IWPhotoFrame([IWCreateImage('Moab_2010_Day_1_files/Modern_C_TL.png'),IWCreateImage('Moab_2010_Day_1_files/Modern_S_T.png'),IWCreateImage('Moab_2010_Day_1_files/Modern_C_TR.png'),IWCreateImage('Moab_2010_Day_1_files/Modern_S_R.png'),IWCreateImage('Moab_2010_Day_1_files/Modern_C_BR.png'),IWCreateImage('Moab_2010_Day_1_files/Modern_S_B.png'),IWCreateImage('Moab_2010_Day_1_files/Modern_C_BL.png'),IWCreateImage('Moab_2010_Day_1_files/Modern_S_L.png')],null,2,0.333333,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget2','widget3','widget4')});}
function relayoutMediaGrid_id5(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id5(range);}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Moab_2010_Day_1_files/Moab_2010_Day_1Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');NotificationCenter.addObserver(null,relayoutMediaGrid_id5,'RangeChanged','id5')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id5()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
