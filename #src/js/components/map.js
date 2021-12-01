try {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.678362, 37.631757],
      zoom: 14,
      controls: ['zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    }),


      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/label.png',
        // Размеры метки.
        iconImageSize: [40, 62],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      })
    myMap.geoObjects
      .add(myPlacemark)
  });
} catch (error) {
  console.log(error)
}