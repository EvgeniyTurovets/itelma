var sub_news_form = document.getElementById('sub-news-form') 
var sub_news_form_submite = document.getElementById('sub-news-form-submite')
var sub_news_btn = document.getElementById('sub-news__btn') 
if(sub_news_form){
    sub_news_form.addEventListener('submit', function(e){
        e.preventDefault()
        sub_news_form.classList.add('active')
        sub_news_form_submite.classList.add('active')
        return false
    })

    sub_news_btn.addEventListener('click', function(){
        sub_news_form.classList.remove('active')
        sub_news_form_submite.classList.remove('active')
    })
}
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false,
});