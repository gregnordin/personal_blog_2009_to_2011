// Created by iWeb 3.0.4 local-build-20120629

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Users/nordin2/Dropbox/Public/web/Greg_Nordins_Blog/My_Albums/Pages/First_2009_Dirt_bike_ride_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Users/nordin2/Dropbox/Public/web/Greg_Nordins_Blog/My_Albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Users/nordin2/Dropbox/Public/web/Greg_Nordins_Blog/My_Albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,30),new IWSize(229,236),27,27,0,new IWSize(18,19)),new IWPhotoFrame([IWCreateImage('First_2009_Dirt_bike_ride_files/Modern_C_TL.png'),IWCreateImage('First_2009_Dirt_bike_ride_files/Modern_S_T.png'),IWCreateImage('First_2009_Dirt_bike_ride_files/Modern_C_TR.png'),IWCreateImage('First_2009_Dirt_bike_ride_files/Modern_S_R.png'),IWCreateImage('First_2009_Dirt_bike_ride_files/Modern_C_BR.png'),IWCreateImage('First_2009_Dirt_bike_ride_files/Modern_S_B.png'),IWCreateImage('First_2009_Dirt_bike_ride_files/Modern_C_BL.png'),IWCreateImage('First_2009_Dirt_bike_ride_files/Modern_S_L.png')],null,2,0.500000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('First_2009_Dirt_bike_ride_files/First_2009_Dirt_bike_rideMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
