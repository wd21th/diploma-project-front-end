import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.scss'],
})
export class BlogAreaComponent implements OnInit {
  blogItems = [
    {
      id: 1,
      blogImg: 'https://egemen.kz/media/2022/03/04/photo_371339.jpeg',
      title:
        'Қазақ тіліндегі бағдарламалауға кіріспе: негізгі ұғымдар мен терминдер',
      authorImg:
        'https://this-person-does-not-exist.com/img/avatar-gen113d00860304dd1024c094309e2b8eec.jpg',
      authorName: 'Қаймолда Ержан',
      category: 'Қазақ тілі',
      color: 'green',
    },
    {
      id: 2,
      blogImg:
        'https://www.chawtechsolutions.com/wp-content/uploads/2020/01/skyrocket.png',
      title:
        'Қазақ тілінде Python тілін үйрену: синтаксис негіздері және бағдарлама құрылымы',
      authorImg:
        'https://this-person-does-not-exist.com/img/avatar-gen61f9bced4577bf13622cb12cf60c6fb8.jpg',
      authorName: 'Санат Толеген',
      category: 'Бэкэнд Дамыту',
      color: 'sky-blue',
    },
    {
      id: 3,
      blogImg:
        'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1274648/retina_500x200_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png',
      title:
        'Қазақ тілінде веб-әзірлеу: HTML, CSS және JavaScript көмегімен динамикалық веб-сайттарды құру',
      authorImg:
        'https://this-person-does-not-exist.com/img/avatar-gen11bc3c5b1a680d2924878f9b55cb4ffd.jpg',
      authorName: 'Амирханов Аскар',
      category: 'Фронт-энд',
      color: 'green',
    },
    {
      id: 4,
      blogImg: 'https://hsbi.hse.ru/upload/articles/2020/700/SQLpt1-3.jpg',
      title:
        'Қазақ тіліндегі деректер қорының негіздері: SQL-мен жұмыс және деректерді басқару',
      authorImg:
        'https://this-person-does-not-exist.com/img/avatar-gen851aed63b70702e95f2072c46d97bd43.jpg',
      authorName: 'Орынбай Карлыгаш',
      category: 'Деректерді талдау',
      color: 'blue',
    },
    {
      id: 5,
      blogImg:
        'https://static.tildacdn.com/tild6237-3934-4231-b739-666234343538/casual-life-3d-desig.png',
      title:
        'Қазақ тіліндегі графикалық дизайн: Photoshop және Illustrator көмегімен тиімді дизайн жобаларын жасау',
      authorImg:
        'https://this-person-does-not-exist.com/img/avatar-genee7df6c303ed4a93a5d49942ce597849.jpg',
      authorName: 'Нуртаева Сауле',
      category: 'Дизайн',
      color: 'orange',
    },
    {
      id: 6,
      blogImg: 'https://img-c.udemycdn.com/course/750x422/2632258_0546.jpg',
      title:
        'Қазақ тілінде мобильді даму: Android және iOS үшін қосымшалар жасау',
      authorImg:
        'https://this-person-does-not-exist.com/img/avatar-gen11c307856a39e5b3bc674ff99656400e.jpg',
      authorName: 'Акбарыс Бекжан',
      category: 'IOS',
      color: 'pink',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
