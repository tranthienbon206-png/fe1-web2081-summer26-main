import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css'
})
export class Stories {

  stories = [
    {
      title: 'One Piece',
      author: 'Eiichiro Oda',
      year: 1997,
      category: 'Phiêu lưu',
      views: 100000,
      image: 'https://th.bing.com/th/id/R.c95bde62b2936a56c9edb7f560d628f1?rik=rmzeL9AYT8IYnA&pid=ImgRaw&r=0'
    },
    {
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      year: 1999,
      category: 'Hành động',
      views: 90000,
      image: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg'
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F. Fujio',
      year: 1969,
      category: 'Thiếu nhi',
      views: 70000,
      image: 'https://m.media-amazon.com/images/M/MV5BYWE2NDkyNjktNDA4MC00OTQ0LTg5ZDYtMjZlYmFhY2JjNGFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },

   
    {
      title: 'Dragon Ball',
      author: 'Akira Toriyama',
      year: 1984,
      category: 'Hành động',
      views: 95000,
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c9/DB_Tank%C5%8Dbon.png'
    },
    {
      title: 'Attack On Titan',
      author: 'Hajime Isayama',
      year: 2009,
      category: 'Dark Fantasy',
      views: 120000,
      image: 'https://m.media-amazon.com/images/S/pv-target-images/abce4f3146841f9aa66e9963531ab38e64108ecaa79b93e5a2781c89c59ebaac.jpg'
    },
    {
      title: 'Bleach',
      author: 'Tite Kubo',
      year: 2001,
      category: 'Phiêu lưu',
      views: 85000,
      image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png'
    }
  ];
}