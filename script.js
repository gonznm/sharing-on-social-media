var url = "https://github.com/gonznm/sharing-on-social-media";
var text_to_share = "Hello world"

const fb = document.getElementById('fb');
fb.addEventListener('click', shareOnFacebook);
const tweet = document.getElementById('twitter');
tweet.addEventListener('click', shareOnTwitter);

function shareOnFacebook(){
  const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' 
  + encodeURIComponent(url)+'&quote='+encodeURIComponent(text_to_share); // is there a better thing than quote?
  window.open(navUrl , '_blank');
}

function shareOnTwitter() {
    const navUrl =
      'https://twitter.com/intent/tweet?text='+ encodeURIComponent(text_to_share) + ' ' + url;
    window.open(navUrl, '_blank');
  }